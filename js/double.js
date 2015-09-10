//app function
var app = {
    lockedStory: false,
    currentStoryId: 0,
    resize: function() {
        this._minisite = $('#minisite');
        $(window).resize(this.onResize);
        this.onResize();
    },
    onResize: function() {
        var domwidth = document.documentElement.clientWidth;
        var domheight = document.documentElement.clientHeight;

        var scale = Math.max(domwidth / 320, domheight / 539);
        var width = 320 * scale;
        var height = 539 * scale;
        app._minisite.css({
            scale: [scale, scale],
            left: -(width - domwidth) / 2,
            top: -(height - domheight) / 2
        });
    },
    doubleModeStep1:function(){
        $('.step1').show();
    },
    doubleModeStep2: function() {
        $('.step1').hide();
    },
    doubleModeStep3: function() {
        $('.step2').show();
    },
    doubleModeStep4: function() {
        $('.step2').hide();
    },
    detectShake: function() {
        //create a new instance of shake.js.
        var myShakeEvent = new Shake({
            threshold: 15
        });

        // start listening to device motion
        myShakeEvent.start();

        // register a shake event
        window.addEventListener('shake', shakeEventDidOccur, false);

        //shake event callback
        function shakeEventDidOccur() {

            //put your own code here etc.
            exportRoot.gotoAndPlay();
        }
    }

};



//$(function() {

//creatjs touch event
createjs.Touch.enable(stage, true, false);

//init the canvas animation when it ready.
init();

//make screen viewport center
app.resize();

//add swpie event
$("#QRcode").swipe({
    //Generic swipe handler for all directions
    tap: function(event, direction, distance, duration, fingerCount, fingerData) {

        exportRoot.gotoAndPlay();

        // $("#start").hide();

    }
});
$("#spot").swipe({
    //Generic swipe handler for all directions
    tap: function(event, direction, distance, duration, fingerCount, fingerData) {

        exportRoot.gotoAndPlay();

        // $("#start").hide();

    }
});


//});
