var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
    //loader.loadFile({src:"fla/images/doubleAnimA_atlas_.json", type:"spritesheet", id:"doubleAnimA_atlas_"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_.json", type:"spritesheet", id:"doubleAnimA_atlas_"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_2.json", type:"spritesheet", id:"doubleAnimA_atlas_2"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_3.json", type:"spritesheet", id:"doubleAnimA_atlas_3"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_4.json", type:"spritesheet", id:"doubleAnimA_atlas_4"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_5.json", type:"spritesheet", id:"doubleAnimA_atlas_5"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_6.json", type:"spritesheet", id:"doubleAnimA_atlas_6"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_7.json", type:"spritesheet", id:"doubleAnimA_atlas_7"}, true);
loader.loadFile({src:"imagesDoubleA/doubleAnimA_atlas_8.json", type:"spritesheet", id:"doubleAnimA_atlas_8"}, true);

    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    var queue = evt.target;
    //ss["doubleAnimA_atlas_"] = queue.getResult("doubleAnimA_atlas_");
    ss["doubleAnimA_atlas_"] = queue.getResult("doubleAnimA_atlas_");
    ss["doubleAnimA_atlas_2"] = queue.getResult("doubleAnimA_atlas_2");
    ss["doubleAnimA_atlas_3"] = queue.getResult("doubleAnimA_atlas_3");
    ss["doubleAnimA_atlas_4"] = queue.getResult("doubleAnimA_atlas_4");
    ss["doubleAnimA_atlas_5"] = queue.getResult("doubleAnimA_atlas_5");
    ss["doubleAnimA_atlas_6"] = queue.getResult("doubleAnimA_atlas_6");
    ss["doubleAnimA_atlas_7"] = queue.getResult("doubleAnimA_atlas_7");
    ss["doubleAnimA_atlas_8"] = queue.getResult("doubleAnimA_atlas_8");
    
    exportRoot = new lib.doubleAnimA();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);



    //hide progress
    $('#loadBody').hide();



    
    // if (window.devicePixelRatio) {
    //     // grab the width and height from canvas
    //     var height = canvas.getAttribute('height');
    //     var width = canvas.getAttribute('width');
    //     // reset the canvas width and height with window.devicePixelRatio applied
    //     canvas.setAttribute('width', Math.round(width * window.devicePixelRatio));
    //     canvas.setAttribute('height', Math.round(height * window.devicePixelRatio));
    //     // force the canvas back to the original size using css
    //     canvas.style.width = width + "px";
    //     canvas.style.height = height + "px";
    //     // set CreateJS to render scaled
    //     stage.scaleX = stage.scaleY = window.devicePixelRatio;
    // }


}

function handleProgress(evt) {
    var loaded = Math.floor(evt.loaded * 100);
    $(".progress").text(loaded + "%");

}