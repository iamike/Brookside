var canvas, stage, exportRoot; 

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
    loader.loadFile({src:"imagesStartNew/canvasAnimNew_atlas_.json", type:"spritesheet", id:"canvasAnimNew_atlas_"}, true);


    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["canvasAnimNew_atlas_"] = queue.getResult("canvasAnimNew_atlas_");

    exportRoot = new lib.canvasAnimNew();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);



    //hide progress
    $('#loadBody').hide();

}

function handleProgress(evt) {
    var loaded = Math.floor(evt.loaded * 100);
    $(".progress").text(loaded + "%");

}