var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_.json", type:"spritesheet", id:"singleAnimTryout_atlas_"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_2.json", type:"spritesheet", id:"singleAnimTryout_atlas_2"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_3.json", type:"spritesheet", id:"singleAnimTryout_atlas_3"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_4.json", type:"spritesheet", id:"singleAnimTryout_atlas_4"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_5.json", type:"spritesheet", id:"singleAnimTryout_atlas_5"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_6.json", type:"spritesheet", id:"singleAnimTryout_atlas_6"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_7.json", type:"spritesheet", id:"singleAnimTryout_atlas_7"}, true);
loader.loadFile({src:"imagesTryout/singleAnimTryout_atlas_8.json", type:"spritesheet", id:"singleAnimTryout_atlas_8"}, true);

    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["singleAnimTryout_atlas_"] = queue.getResult("singleAnimTryout_atlas_");
    ss["singleAnimTryout_atlas_2"] = queue.getResult("singleAnimTryout_atlas_2");
    ss["singleAnimTryout_atlas_3"] = queue.getResult("singleAnimTryout_atlas_3");
    ss["singleAnimTryout_atlas_4"] = queue.getResult("singleAnimTryout_atlas_4");
    ss["singleAnimTryout_atlas_5"] = queue.getResult("singleAnimTryout_atlas_5");
    ss["singleAnimTryout_atlas_6"] = queue.getResult("singleAnimTryout_atlas_6");
    ss["singleAnimTryout_atlas_7"] = queue.getResult("singleAnimTryout_atlas_7"); 
    ss["singleAnimTryout_atlas_8"] = queue.getResult("singleAnimTryout_atlas_8");

    exportRoot = new lib.singleAnimTryout();

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