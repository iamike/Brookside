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
    //single
    showSpot: function() {
        $('#spot').fadeIn();
    },
    showSwipeHint: function() {
        $('#swipeHint').fadeIn();
    },
    showResult: function() {

    },
    showMode: function() {
        var $modeSelector = $("#modeSelector");
        $modeSelector.fadeIn(2000);
    },
    //double 
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
$("#start").swipe({
    //Generic swipe handler for all directions
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        exportRoot.gotoAndPlay("toSence");

        $("#start").hide();


    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 150
});

//Single Mode
//add swpie event
$("#spot").swipe({
    //Generic swipe handler for all directions
    tap: function(event, target) {
        exportRoot.gotoAndPlay();
        $("#spot").hide();
    }
});
$('#swipeHint').swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        exportRoot.gotoAndPlay();
        $('#swipeHint').hide();
    },
    threshold: 200
})
$('.option').swipe({
    tap: function(event, target) {
        console.log(target.id);
        //exportRoot.gotoAndPlay("showResult1");
    }
})
//double Mode
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
//double Mode B
$("#drawCircle").swipe({
    //Generic swipe handler for all directions
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        console.log('test');
        exportRoot.gotoAndPlay();

        // $("#start").hide();

    },
    threshold:50
});


//});
