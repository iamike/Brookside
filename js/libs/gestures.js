//// On screen logger function
//var Logger = new function(){
//
//  var output = document.getElementById('logger');
//  output.style.display = "block";
//  var messages = [];
//
//  this.trace = function(){
//      var msg = Array.prototype.slice.call(arguments).join(" ");
//      messages.unshift(msg);
//      if ( messages.length > 15 ) {
//          messages.pop();
//      }
//      output.innerHTML = messages.join("<br>");
//      console.log(msg);
//  };
//};

var Gesture = (function()
{
    var _SAMPLE_COUNT = 50;
    var _DPR = window.devicePixelRatio || 1;

    var Gesture = new Class({
        name: "",
        normalized: [],
        values: [],
        drawLengths: [],
        drawDots: true,
        onGestureSuccess:null,
        onGestureFailure:null,
        devicePixelRatio: window.devicePixelRatio || 1,

        initialize: function(){
        },

        add: function(idx, x, y, context)
        {
            var values = this.values[idx];
            if ( typeof values == "undefined" ) this.values[idx] = values = [];

            // Check against inserting the same values
            if ( values.length > 1 && values[values.length-2] === x && values[values.length-1] === y ) return;

            values.push(x, y);

            if (context)
            {
                // Draw if we have a context
                this.draw(context, idx);
            }
        },

        getDistributedValues: function(values){

            // Get total length of gesture
            var i, totalLength = 0, dx, dy, dist;
            for ( i = 0; i<values.length-2; i+=2 )
            {
                dx = values[i+2] - values[i];
                dy = values[i+3] - values[i+1];
                totalLength += Math.sqrt(dx*dx + dy*dy);
            }

            if ( totalLength == 0 )
                return null;

            // Get distributed values
            var distributed = [], idx = 0, idxLength = 0, sampleLength = totalLength / (_SAMPLE_COUNT-1);
            for ( i=0; i<_SAMPLE_COUNT; i++)
            {
                var requiredLength = Math.min(totalLength, sampleLength * i); // Math.min so we don't get rounding errors
                while ( true )
                {
                    dx = values[idx+2] - values[idx];
                    dy = values[idx+3] - values[idx+1];
                    dist = Math.sqrt(dx*dx + dy*dy);

                    if ( idxLength + dist < requiredLength )
                    {
                        idx += 2;
                        idxLength += dist;
                    }
                    else
                    {
                        // Required length is between this location and the next, get exact position
                        var factor = (requiredLength - idxLength) / dist;
                        distributed[i*2] = values[idx] + (dx * factor);
                        distributed[(i*2) + 1] = values[idx+1] + (dy * factor);
                        break;
                    }
                }
            }

            return distributed;
        },

        normalize: function()
        {
            // Get distributed versions of recorded gestures
            var i, j, distributed = [], distributedValues;
            for ( i = 0; i<this.values.length; i++ )
            {
                distributedValues = this.getDistributedValues(this.values[i]);
                if ( distributedValues )
                    distributed.push(distributedValues);
            }

            // Get bounds and max size
            var x, y, minX = Number.MAX_VALUE, maxX = Number.MIN_VALUE, minY = Number.MAX_VALUE, maxY = Number.MIN_VALUE;
            for (i = 0; i < distributed.length; i++)
            {
                distributedValues = distributed[i];
                for ( j = 0; j<distributedValues.length; j+=2 )
                {
                    x = distributedValues[j];
                    y = distributedValues[j+1];
                    if ( x < minX ) minX = x;
                    if ( y < minY ) minY = y;
                    if ( x > maxX ) maxX = x;
                    if ( y > maxY ) maxY = y;
                }
            }
            var size = Math.max(maxX - minX, maxY - minY);

            // Normalize values
            this.normalized.length = 0;
            for (i = 0; i < distributed.length; i++)
            {
                var normalized = [];
                normalized.length = _SAMPLE_COUNT*2;
                distributedValues = distributed[i];
                for ( j = 0; j<distributedValues.length; j+=2 )
                {
                    normalized[j] = Math.round(((distributedValues[j] - minX)/size)*1000)/1000;
                    normalized[j+1] = Math.round(((distributedValues[j+1] - minY)/size)*1000)/1000;
                }
                this.normalized.push(normalized);
            }
            return true;
        },

        getPartMatch: function(lhs, rhs){
            // Do location match
            var i, totalDist=0, dx, dy;
            for ( i=0; i<lhs.length; i+=2 )
            {
                dx = rhs[i] - lhs[i];
                dy = rhs[i+1] - lhs[i+1];
                totalDist += Math.sqrt((dx*dx) + (dy*dy));
            }
            var locationMatch = 1-(totalDist/lhs.length)/0.5;

            // Do angle match
            var average = 0, dx1, dy1, dist1, dx2, dy2, dist2;
            for ( i=0; i<lhs.length-2; i+=2 )
            {
                dx1 = lhs[i+2] - lhs[i];
                dy1 = lhs[i+3] - lhs[i+1];
                dist1 = Math.sqrt(dx1*dx1 + dy1*dy1);

                dx2 = rhs[i+2] - rhs[i];
                dy2 = rhs[i+3] - rhs[i+1];
                dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);

                var cos = (dx1*dx2 + dy1*dy2)/(dist1*dist2);
                average += Math.acos(Math.min(cos, 1));
            }
            var angleMatch = 1-(average/(_SAMPLE_COUNT-1))/Math.PI;

            return locationMatch * angleMatch;
        },

        getMatch: function(other){
            // Multi part gestures only match if the both have the same number of parts
            var count = this.normalized.length;
            if ( other.normalized.length != count )
                return 0;

            if ( count > 2 )
                throw "Gesture.getMatch: only up to 2 part gestures supported";

            var i, j, matches = [];
            for (i = 0; i < count; i++) {

                matches[i] = [];
                for (j = 0; j < count; j++) {
                    matches[i][j] = this.getPartMatch(this.normalized[i], other.normalized[j]);
                }
            }

            // NOTE: Currently only supports matching 2 part gestures max. If we need more we'll need to implement the stabile marriage problem.
            return count == 2 ? Math.max(matches[0][0] + matches[1][1], matches[1][0] + matches[0][1])/count : matches[0][0];
        },

        draw: function(context, idx)
        {
            var values = this.values[idx];
            if ( this.drawDots )
            {
                if ( !values || !values.length ) return;
                var x = values[values.length-2], y = values[values.length-1];

                if ( values.length == 2 )
                {
                    // Draw first dot
                    context.beginPath();
                    context.arc(x, y, 5*this.devicePixelRatio, 0, 360, false);
                    context.fillStyle = "#FFFC00";
                    context.fill();

                    context.beginPath();
                    context.lineWidth = 1.5*this.devicePixelRatio;
                    context.arc(x, y, 10*this.devicePixelRatio, 0, 360, false);
                    context.strokeStyle = "#FFFC00";
                    context.stroke();
                }
                else
                {
                    // Draw line dots
                    var px = values[values.length-4], py = values[values.length-3],dx = px - x, dy = py - y,
                        dist = Math.sqrt(dx*dx + dy*dy),
                        currentLength = this.drawLengths[idx] || 0,
                        interval = 10*this.devicePixelRatio, offset = 10*this.devicePixelRatio;

                    this.drawLengths[idx] = currentLength + dist;

                    if ( dist > 0 )
                    {
                        dx /= dist;
                        dy /= dist;

                        var start = (interval - (currentLength % interval));
                        if ( currentLength < offset ) start += offset;

                        for ( var i = start; i<dist; i+=interval )
                        {
                            context.beginPath();
                            context.arc(px - i*dx, py - i*dy, 1.5*this.devicePixelRatio, 0, 360, false);
                            context.fillStyle = "#FFFFFF";
                            context.fill();
                        }
                    }
                }
            }
            else
            {
                if ( values.length < 2 ) return;

                var length = values.length;
                context.beginPath();
                context.moveTo(values[length-4]*_DPR,values[length-3]*_DPR);
                context.lineTo(values[length-2]*_DPR,values[length-1]*_DPR);
                context.stroke();
            }
        }
    });

    return Gesture;
})();

var Gestures = (function(){

    var _GESTURES = {"version": 2, "gestures": [
        {"name": "swipe_right", "values": [[0,0,1000,0]]},
        {"name": "swipe_left", "values": [[1000,0,0,0]]},
        {"name": "swipe_up", "values": [[0,1000,0,0]]},
        {"name": "swipe_down", "values": [[0,0,0,1000]]},
        {"name": "swipe_diagonal_left_up", "values": [[1000,1000,0,0]]},
        {"name": "swipe_diagonal_right_up", "values": [[0,1000,1000,0]]},
        {"name": "swipe_diagonal_left_down", "values": [[1000,0,0,1000]]},
        {"name": "swipe_diagonal_right_down", "values": [[0,0,1000,1000]]},
        {"name": "draw_square_right", "values": [[0,0,1000,0,1000,1000,0,1000,0,100]]},
        {"name": "draw_square_left", "values": [[1000,0,0,0,0,1000,1000,1000,1000,100]]},
        {"name": "draw_triangle_left", "values": [[1000,1000,500,0,0,1000,900,1000]]},
        {"name": "draw_triangle_right", "values": [[0,1000,500,0,1000,1000,100,1000]]},
        {"name": "zigzag_up", "values": [[500,1000,800,500,200,500,500,0]]},
        {"name": "zigzag_down", "values": [[500,0,200,500,800,500,500,1000]]},
        {"name": "swipe_right_2_fingers", "values": [[0,0,1000,0], [0,333,1000,333]]},
        {"name": "swipe_left_2_fingers", "values": [[1000,0,0,0], [1000,333,0,333]]},
        {"name": "swipe_up_2_fingers", "values": [[0,1000,0,0], [333,1000,333,0]]},
        {"name": "swipe_down_2_fingers", "values": [[0,0,0,1000], [333,0,333,1000]]},
        {"name": "pinch_screen", "values": [[0,0,400,0], [1000,0,600,0]]},
        {"name": "stretch_screen", "values": [[400,0,0,0], [600,0,1000,0]]},
        {"name": "draw_circle_left", "values": [[500,0,345,24,206,95,95,206,24,345,0,500,24,655,95,794,206,905,345,976,500,1000,655,976,794,905,905,794,976,655,1000,500,976,345,905,206,794,95,655,24]]},
        {"name": "draw_circle_right", "values": [[500,0,655,24,794,95,905,206,976,345,1000,500,976,655,905,794,794,905,655,976,500,1000,345,976,206,905,95,794,24,655,0,500,24,345,95,206,206,95,345,24]]},
		
		{"name": "draw_U_left", "values": [[0,0,0,100,0,200,0,300,0,400,0,500,24,655,95,794,206,905,345,976,500,1000,655,976,794,905,905,794,976,655,1000,500,1000,400,1000,300,1000,200,1000,100,1000,0]]},
		{"name": "draw_U_right", "values": [[1000,0,1000,100,1000,200,1000,300,1000,400,1000,500,976,655,905,794,794,905,655,976,500,1000,345,976,206,905,95,794,24,655,0,500,0,400,0,300,0,200,0,100,0,0]]},
		
        {"name": "draw_figure_of_eight", "values": [[625,500,547,564,476,636,421,724,405,828,457,934,586,997,736,974,829,883,843,774,805,678,740,599,664,532,586,468,510,401,445,322,407,226,421,117,514,26,664,3,793,66,845,172,829,276,774,364,703,436]]}
    ]};

    var Gestures = new Class({

        gestures: [],
        multiTouch: null,
        gesture: null,
        canvas: null,
        context: null,
        validGestures: null,
        offsetX: 0,
        offsetY: 0,
        devicePixelRatio: window.devicePixelRatio || 1,

        initialize: function(touchContainer, canvas){

            this.multiTouch = new MultiTouch(touchContainer, this.gestureStart.bind(this), this.gestureUpdate.bind(this), this.gestureEnd.bind(this));

            if ( _GESTURES.version !== 2 )
                throw "ns.Gestures: invalid json version";

            this.setupCanvas(canvas);

            this.offsetX = - touchContainer.getCoordinates().left;
            this.offsetY = - touchContainer.getCoordinates().top;

            // Deserialize gesture data
            for ( var i=0; i<_GESTURES.gestures.length; i++ )
            {
                var gesture = new Gesture();
                gesture.name = _GESTURES.gestures[i].name;
                var values = _GESTURES.gestures[i].values;
                for ( var j=0; j<values.length; j++ )
                {
                    // Sub gestures
                    for (var k = 0; k < values[j].length; k+=2){
                        gesture.add(j, values[j][k], values[j][k+1]);
                    }
                }
                gesture.normalize();
                this.gestures.push(gesture);
            }
        },

        gestureStart: function(){
            this.gesture = new Gesture();
            this.gesture.name = "recording_gesture";
            this.clearCanvas();
        },

        gestureUpdate: function(touches){
            if ( this.gesture )
            {
                for (var i = 0; i < touches.length; i++) {
                    this.gesture.add(i, (touches[i].pageX + this.offsetX)*this.devicePixelRatio, (touches[i].pageY + this.offsetY)*this.devicePixelRatio, this.context);
                }
            }

            if(typeof setupScroll == 'function') {
                setupScroll();
            }
        },

        gestureEnd: function(){
            if ( this.gesture )
            {
                if ( this.gesture.normalize() )
                {
                    var bestAccuracy = 0, bestGesture, other, accuracy;
                    for ( var i=0; i<this.gestures.length; i++ )
                    {
                        other = this.gestures[i];
                        if ( !this.validGestures || this.validGestures.length == 0 || this.validGestures.indexOf(other.name) != -1 )
                        {
                            accuracy = this.gesture.getMatch(other);
                            if ( accuracy > bestAccuracy )
                            {
                                bestAccuracy = accuracy;
                                bestGesture = other;
                            }
                        }
                    }

                    if ( bestGesture && bestAccuracy > 0.5 )
                    {
                        // Call success callback
                        if (this.onGestureSuccess)
                            this.onGestureSuccess({gesture: bestGesture.name, accuracy: bestAccuracy});
                    }
                    else
                    {
                        // Call failure callback
                        if (this.onGestureFailure)
                            this.onGestureFailure();
                    }
                }

                this.clearCanvas();

                this.gesture = null;
            }
        },

        setValidGestures: function(gestures){
            this.validGestures = gestures;
        },

        setupCanvas: function(canvas)
        {
            if ( canvas )
            {
                this.canvas = canvas;
                this.context = canvas.getContext('2d');
                this.clearCanvas();
            }
        },

        clearCanvas: function(){
            if ( this.canvas )
            {
                this.canvas.width = this.canvas.width;
                this.context.lineWidth = 5;
                this.context.lineCap = "round";
                this.context.strokeStyle = "#FFFFFF";
                this.context.fillStyle = "#FFFFFF";
            }
        },

        supportsMultiTouch: function(){
            return this.multiTouch.supportsMultiTouch && !android;
        }
    });

    return Gestures;
})();

