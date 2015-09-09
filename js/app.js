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
    showMode:function(){
        var $modeSelector = $("#modeSelector");
            $modeSelector.fadeIn(2000);
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


//});
