var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", handleProgress);
    //loader.loadFile({src:"../imagesDoubleB/doubleAnimB_atlas_.json", type:"spritesheet", id:"doubleAnimB_atlas_"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_.json", type:"spritesheet", id:"doubleAnimB_atlas_"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_2.json", type:"spritesheet", id:"doubleAnimB_atlas_2"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_3.json", type:"spritesheet", id:"doubleAnimB_atlas_3"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_4.json", type:"spritesheet", id:"doubleAnimB_atlas_4"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_5.json", type:"spritesheet", id:"doubleAnimB_atlas_5"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_6.json", type:"spritesheet", id:"doubleAnimB_atlas_6"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_7.json", type:"spritesheet", id:"doubleAnimB_atlas_7"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_8.json", type:"spritesheet", id:"doubleAnimB_atlas_8"}, true);
// loader.loadFile({src:"imagesDoubleB/doubleAnimB_atlas_9.json", type:"spritesheet", id:"doubleAnimB_atlas_9"}, true);

    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    var queue = evt.target;
    //ss["doubleAnimB_atlas_"] = queue.getResult("doubleAnimB_atlas_");
    // ss["doubleAnimB_atlas_"] = queue.getResult("doubleAnimB_atlas_");
    // ss["doubleAnimB_atlas_2"] = queue.getResult("doubleAnimB_atlas_2");
    // ss["doubleAnimB_atlas_3"] = queue.getResult("doubleAnimB_atlas_3");
    // ss["doubleAnimB_atlas_4"] = queue.getResult("doubleAnimB_atlas_4");
    // ss["doubleAnimB_atlas_5"] = queue.getResult("doubleAnimB_atlas_5");
    // ss["doubleAnimB_atlas_6"] = queue.getResult("doubleAnimB_atlas_6");
    // ss["doubleAnimB_atlas_7"] = queue.getResult("doubleAnimB_atlas_7");
    // ss["doubleAnimB_atlas_8"] = queue.getResult("doubleAnimB_atlas_8");
    // ss["doubleAnimB_atlas_9"] = queue.getResult("doubleAnimB_atlas_9");

    exportRoot = new lib.doubleAnimB();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);


    //alert('tst');
    //hide progress
    $('#loadBody').hide();
    if (window.ws){
        ws.send("scanComplete," + _strFromOpenID);

    }


}

function handleProgress(evt) {
    var loaded = Math.floor(evt.loaded * 100);
    $(".progress").text(loaded + "%");
    if (window.ws){
        ws.send("scanLoading," + _strFromOpenID);
    }

}