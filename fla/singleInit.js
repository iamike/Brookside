var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_.json", type:"spritesheet", id:"singleAnim_atlas_"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_2.json", type:"spritesheet", id:"singleAnim_atlas_2"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_3.json", type:"spritesheet", id:"singleAnim_atlas_3"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_4.json", type:"spritesheet", id:"singleAnim_atlas_4"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_5.json", type:"spritesheet", id:"singleAnim_atlas_5"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_6.json", type:"spritesheet", id:"singleAnim_atlas_6"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_7.json", type:"spritesheet", id:"singleAnim_atlas_7"}, true);
loader.loadFile({src:"imagesSingle/singleAnim_atlas_8.json", type:"spritesheet", id:"singleAnim_atlas_8"}, true);

    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["singleAnim_atlas_"] = queue.getResult("singleAnim_atlas_");
    ss["singleAnim_atlas_2"] = queue.getResult("singleAnim_atlas_2");
    ss["singleAnim_atlas_3"] = queue.getResult("singleAnim_atlas_3");
    ss["singleAnim_atlas_4"] = queue.getResult("singleAnim_atlas_4");
    ss["singleAnim_atlas_5"] = queue.getResult("singleAnim_atlas_5");
    ss["singleAnim_atlas_6"] = queue.getResult("singleAnim_atlas_6");
    ss["singleAnim_atlas_7"] = queue.getResult("singleAnim_atlas_7"); 
    ss["singleAnim_atlas_8"] = queue.getResult("singleAnim_atlas_8");

    exportRoot = new lib.singleAnim();

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