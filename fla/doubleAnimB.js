(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1078,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"imagesDoubleB/a12.png", id:"a12"},
		{src:"imagesDoubleB/b10.png", id:"b10"},
		{src:"imagesDoubleB/b11.png", id:"b11"},
		{src:"imagesDoubleB/b12.png", id:"b12"},
		{src:"imagesDoubleB/b13.png", id:"b13"},
		{src:"imagesDoubleB/b14.png", id:"b14"},
		{src:"imagesDoubleB/b15.png", id:"b15"},
		{src:"imagesDoubleB/b16.png", id:"b16"},
		{src:"imagesDoubleB/b17.png", id:"b17"},
		{src:"imagesDoubleB/b3.png", id:"b3"},
		{src:"imagesDoubleB/b4.png", id:"b4"},
		{src:"imagesDoubleB/b5.png", id:"b5"},
		{src:"imagesDoubleB/b6.jpg", id:"b6"},
		{src:"imagesDoubleB/b7.png", id:"b7"},
		{src:"imagesDoubleB/b8.png", id:"b8"},
		{src:"imagesDoubleB/b9.png", id:"b9"},
		{src:"imagesDoubleB/c12.png", id:"c12"},
		{src:"imagesDoubleB/c13.png", id:"c13"},
		{src:"imagesDoubleB/c1.png", id:"c1"},
		{src:"imagesDoubleB/c2.png", id:"c2"},
		{src:"imagesDoubleB/Choco_one_00092.png", id:"Choco_one_00092"},
		{src:"imagesDoubleB/Choco_one_00094.png", id:"Choco_one_00094"},
		{src:"imagesDoubleB/Choco_one_00096.png", id:"Choco_one_00096"},
		{src:"imagesDoubleB/Choco_one_00098.png", id:"Choco_one_00098"},
		{src:"imagesDoubleB/Choco_one_00100.png", id:"Choco_one_00100"},
		{src:"imagesDoubleB/Choco_one_00102.png", id:"Choco_one_00102"},
		{src:"imagesDoubleB/Choco_one_00104.png", id:"Choco_one_00104"},
		{src:"imagesDoubleB/Choco_one_00106.png", id:"Choco_one_00106"},
		{src:"imagesDoubleB/Choco_one_00108.png", id:"Choco_one_00108"},
		{src:"imagesDoubleB/Choco_one_00110.png", id:"Choco_one_00110"},
		{src:"imagesDoubleB/Choco_one_00112.png", id:"Choco_one_00112"},
		{src:"imagesDoubleB/Choco_one_00114.png", id:"Choco_one_00114"},
		{src:"imagesDoubleB/Choco_one_00116.png", id:"Choco_one_00116"},
		{src:"imagesDoubleB/Choco_one_00118.png", id:"Choco_one_00118"},
		{src:"imagesDoubleB/Choco_one_00120.png", id:"Choco_one_00120"},
		{src:"imagesDoubleB/Choco_one_00122.png", id:"Choco_one_00122"},
		{src:"imagesDoubleB/Choco_one_00124.png", id:"Choco_one_00124"},
		{src:"imagesDoubleB/Choco_one_00125.png", id:"Choco_one_00125"},
		{src:"imagesDoubleB/Choco_one_00126.png", id:"Choco_one_00126"},
		{src:"imagesDoubleB/Choco_one_00129.png", id:"Choco_one_00129"},
		{src:"imagesDoubleB/Choco_one_00135.png", id:"Choco_one_00135"},
		{src:"imagesDoubleB/Choco_one_00139.png", id:"Choco_one_00139"},
		{src:"imagesDoubleB/Choco_one_00143.png", id:"Choco_one_00143"},
		{src:"imagesDoubleB/Choco_one_00147.png", id:"Choco_one_00147"},
		{src:"imagesDoubleB/doublebg.jpg", id:"doublebg"},
		{src:"imagesDoubleB/mixR0001.png", id:"mixR0001"},
		{src:"imagesDoubleB/mixR0002.png", id:"mixR0002"},
		{src:"imagesDoubleB/mixR0003.png", id:"mixR0003"},
		{src:"imagesDoubleB/mixR0004.png", id:"mixR0004"},
		{src:"imagesDoubleB/mixR0005.png", id:"mixR0005"},
		{src:"imagesDoubleB/mixR0006.png", id:"mixR0006"},
		{src:"imagesDoubleB/mixR0007.png", id:"mixR0007"},
		{src:"imagesDoubleB/mixR0008.png", id:"mixR0008"},
		{src:"imagesDoubleB/mixR0009.png", id:"mixR0009"},
		{src:"imagesDoubleB/mixR0010.png", id:"mixR0010"},
		{src:"imagesDoubleB/mixR0011.png", id:"mixR0011"},
		{src:"imagesDoubleB/mixR0012.png", id:"mixR0012"},
		{src:"imagesDoubleB/mixR0013.png", id:"mixR0013"},
		{src:"imagesDoubleB/mixR0014.png", id:"mixR0014"},
		{src:"imagesDoubleB/mixR0015.png", id:"mixR0015"},
		{src:"imagesDoubleB/mixR0016.png", id:"mixR0016"},
		{src:"imagesDoubleB/mixR0017.png", id:"mixR0017"},
		{src:"imagesDoubleB/mixR0018.png", id:"mixR0018"},
		{src:"imagesDoubleB/mixR0019.png", id:"mixR0019"},
		{src:"imagesDoubleB/mixR0020.png", id:"mixR0020"},
		{src:"imagesDoubleB/mixR0021.png", id:"mixR0021"},
		{src:"imagesDoubleB/mixR0022.png", id:"mixR0022"},
		{src:"imagesDoubleB/mixR0023.png", id:"mixR0023"},
		{src:"imagesDoubleB/mixR0024.png", id:"mixR0024"},
		{src:"imagesDoubleB/mixR0025.png", id:"mixR0025"},
		{src:"imagesDoubleB/mixR0026.png", id:"mixR0026"},
		{src:"imagesDoubleB/mixR0027.png", id:"mixR0027"},
		{src:"imagesDoubleB/mixR0028.png", id:"mixR0028"},
		{src:"imagesDoubleB/mixR0029.png", id:"mixR0029"},
		{src:"imagesDoubleB/mixR0030.png", id:"mixR0030"},
		{src:"imagesDoubleB/mixR0031.png", id:"mixR0031"},
		{src:"imagesDoubleB/mixR0032.png", id:"mixR0032"},
		{src:"imagesDoubleB/mixR0033.png", id:"mixR0033"},
		{src:"imagesDoubleB/mixR0034.png", id:"mixR0034"},
		{src:"imagesDoubleB/mixR0035.png", id:"mixR0035"},
		{src:"imagesDoubleB/mixR0036.png", id:"mixR0036"},
		{src:"imagesDoubleB/mixR0037.png", id:"mixR0037"},
		{src:"imagesDoubleB/mixR0038.png", id:"mixR0038"},
		{src:"imagesDoubleB/mixR0039.png", id:"mixR0039"},
		{src:"imagesDoubleB/mixR0040.png", id:"mixR0040"},
		{src:"imagesDoubleB/mixR0041.png", id:"mixR0041"},
		{src:"imagesDoubleB/mixR0042.png", id:"mixR0042"},
		{src:"imagesDoubleB/mixR0043.png", id:"mixR0043"},
		{src:"imagesDoubleB/result.png", id:"result"},
		{src:"imagesDoubleB/reward1.png", id:"reward1"},
		{src:"imagesDoubleB/reward2.png", id:"reward2"},
		{src:"imagesDoubleB/reward3.png", id:"reward3"},
		{src:"imagesDoubleB/scanHint.png", id:"scanHint"}
	]
};



// symbols:



(lib.a12 = function() {
	this.initialize(img.a12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,51);


(lib.b10 = function() {
	this.initialize(img.b10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,128);


(lib.b11 = function() {
	this.initialize(img.b11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,150);


(lib.b12 = function() {
	this.initialize(img.b12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,69);


(lib.b13 = function() {
	this.initialize(img.b13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,92);


(lib.b14 = function() {
	this.initialize(img.b14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,56);


(lib.b15 = function() {
	this.initialize(img.b15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,47);


(lib.b16 = function() {
	this.initialize(img.b16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,49);


(lib.b17 = function() {
	this.initialize(img.b17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,88);


(lib.b3 = function() {
	this.initialize(img.b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,239);


(lib.b4 = function() {
	this.initialize(img.b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,95);


(lib.b5 = function() {
	this.initialize(img.b5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,373);


(lib.b6 = function() {
	this.initialize(img.b6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,400);


(lib.b7 = function() {
	this.initialize(img.b7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,248);


(lib.b8 = function() {
	this.initialize(img.b8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,76);


(lib.b9 = function() {
	this.initialize(img.b9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,56);


(lib.c12 = function() {
	this.initialize(img.c12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,332);


(lib.c13 = function() {
	this.initialize(img.c13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,332);


(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,350);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,353);


(lib.Choco_one_00092 = function() {
	this.initialize(img.Choco_one_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00094 = function() {
	this.initialize(img.Choco_one_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00096 = function() {
	this.initialize(img.Choco_one_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00098 = function() {
	this.initialize(img.Choco_one_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00100 = function() {
	this.initialize(img.Choco_one_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00102 = function() {
	this.initialize(img.Choco_one_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00104 = function() {
	this.initialize(img.Choco_one_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00106 = function() {
	this.initialize(img.Choco_one_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00108 = function() {
	this.initialize(img.Choco_one_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00110 = function() {
	this.initialize(img.Choco_one_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00112 = function() {
	this.initialize(img.Choco_one_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00114 = function() {
	this.initialize(img.Choco_one_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00116 = function() {
	this.initialize(img.Choco_one_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00118 = function() {
	this.initialize(img.Choco_one_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00120 = function() {
	this.initialize(img.Choco_one_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00122 = function() {
	this.initialize(img.Choco_one_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00124 = function() {
	this.initialize(img.Choco_one_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00125 = function() {
	this.initialize(img.Choco_one_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00126 = function() {
	this.initialize(img.Choco_one_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00129 = function() {
	this.initialize(img.Choco_one_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00135 = function() {
	this.initialize(img.Choco_one_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00139 = function() {
	this.initialize(img.Choco_one_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00143 = function() {
	this.initialize(img.Choco_one_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Choco_one_00147 = function() {
	this.initialize(img.Choco_one_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.doublebg = function() {
	this.initialize(img.doublebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.mixR0001 = function() {
	this.initialize(img.mixR0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0002 = function() {
	this.initialize(img.mixR0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0003 = function() {
	this.initialize(img.mixR0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0004 = function() {
	this.initialize(img.mixR0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0005 = function() {
	this.initialize(img.mixR0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0006 = function() {
	this.initialize(img.mixR0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0007 = function() {
	this.initialize(img.mixR0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0008 = function() {
	this.initialize(img.mixR0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0009 = function() {
	this.initialize(img.mixR0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0010 = function() {
	this.initialize(img.mixR0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0011 = function() {
	this.initialize(img.mixR0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0012 = function() {
	this.initialize(img.mixR0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0013 = function() {
	this.initialize(img.mixR0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0014 = function() {
	this.initialize(img.mixR0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0015 = function() {
	this.initialize(img.mixR0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0016 = function() {
	this.initialize(img.mixR0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0017 = function() {
	this.initialize(img.mixR0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0018 = function() {
	this.initialize(img.mixR0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0019 = function() {
	this.initialize(img.mixR0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0020 = function() {
	this.initialize(img.mixR0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0021 = function() {
	this.initialize(img.mixR0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0022 = function() {
	this.initialize(img.mixR0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0023 = function() {
	this.initialize(img.mixR0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0024 = function() {
	this.initialize(img.mixR0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0025 = function() {
	this.initialize(img.mixR0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0026 = function() {
	this.initialize(img.mixR0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0027 = function() {
	this.initialize(img.mixR0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0028 = function() {
	this.initialize(img.mixR0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0029 = function() {
	this.initialize(img.mixR0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0030 = function() {
	this.initialize(img.mixR0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0031 = function() {
	this.initialize(img.mixR0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0032 = function() {
	this.initialize(img.mixR0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0033 = function() {
	this.initialize(img.mixR0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0034 = function() {
	this.initialize(img.mixR0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0035 = function() {
	this.initialize(img.mixR0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0036 = function() {
	this.initialize(img.mixR0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0037 = function() {
	this.initialize(img.mixR0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0038 = function() {
	this.initialize(img.mixR0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0039 = function() {
	this.initialize(img.mixR0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0040 = function() {
	this.initialize(img.mixR0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0041 = function() {
	this.initialize(img.mixR0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0042 = function() {
	this.initialize(img.mixR0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.mixR0043 = function() {
	this.initialize(img.mixR0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,768);


(lib.result = function() {
	this.initialize(img.result);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.reward1 = function() {
	this.initialize(img.reward1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,258);


(lib.reward2 = function() {
	this.initialize(img.reward2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,258);


(lib.reward3 = function() {
	this.initialize(img.reward3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,254);


(lib.scanHint = function() {
	this.initialize(img.scanHint);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,80);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c2();
	this.instance.setTransform(-183,-176.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183,-176.5,366,353);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c2();
	this.instance.setTransform(-183,-176.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183,-176.5,366,353);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c1();
	this.instance.setTransform(-183.5,-175);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.5,-175,367,350);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c1();
	this.instance.setTransform(-183.5,-175);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.5,-175,367,350);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Choco_one_00147();
	this.instance.setTransform(0,0,1,0.871);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,939);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scanHint();
	this.instance.setTransform(-183.5,-255.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.5,-255.7,406,80);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.reward2();
	this.instance.setTransform(-234,-129);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-234,-129,468,258);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.reward2();
	this.instance.setTransform(-234,-129);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-234,-129,468,258);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.reward3();
	this.instance.setTransform(-122.5,-127);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.5,-127,245,254);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.reward1();
	this.instance.setTransform(-234,-129);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-234,-129,468,258);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.reward1();
	this.instance.setTransform(-234,-129);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-234,-129,468,258);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.result();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.result();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,400);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D1A11").s().p("AhjAnIAEgDIAHgJIACgGIAGADIgGALIgHAIgAAtAnIgDgCIAOgIQAGgDAFgGIgDgJIgDgJIgBgLIgYAAIAAANIAQgEIACADIgSAHIAAAYIAAADIgDACIgGABIgLABIAAgEIgCgDIAIABIAFAAIACgCIABgDIAAgSIgWAJIgBgDIgCgEIAZgHIAAgQIgYABIAAgGIAYAAIAAgOIgHACIgJABIgBgEIgDgDQAGABAMgCQAGAAAOgFIAEAFIABABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgOACIAAAPIAXAAIAAgLIgBgNIAAgDIADABIAEAAIACAAIgBACIgBACIAAAEIAAAHIAAALIAhAAIAAAGIgggBIACAQIAEAJIAEgFIAEgHIADgEIABgGIAHABIABABIgBABIgBACIgFAHIgEAIIgHAHIAGAHIAFAFIADACIACgBIACgDIABgFQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAEABQgBAFgCADIgDAEIgEAAIgFgCQgFgCgDgDIgHgIIgLAJIgMAHIgCgDgAhBAlIgFgMIAFgDIAIARIgHADgAgrAgIgGgIIAFgEIAHAJIAEAJIgGACIgEgIgAgRAgIgJgKIAFgDQAKAKAFAIIgGADIgFgIgAhXASIABgGIAAgYIgBgCIAbAAIgBgcIAEABIAFAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgBABAAAFIAAADIAjAAIAIgBIAAAHIgVAAIgWAAIAAAKIAhAAIAAAGIgBAFIABAUIgIAAIAAgFIgzAAIAAAGgAhPAIIAzAAIAAgQIgzAAgABPgaIgJgHIAEgEIANALIAEADIgFAEg");
	this.shape.setTransform(10,4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,8.6);


(lib.aa4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.388,0.957],0,0,0,0,0,134.1).s().p("AunOoQmEmEAAokQAAojGEmEQGEmEIjAAQIkAAGEGEQGEGEAAIjQAAIkmEGEQmEGEokAAQojAAmEmEg");
	this.shape.setTransform(132.5,132.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,264.9,264.9);


(lib.aa3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,239);


(lib.aa2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111,95);


(lib.a29 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b16();
	this.instance.setTransform(0,0,0.443,0.443);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124.1,21.7);


(lib.a28 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b15();
	this.instance.setTransform(0,0,0.443,0.443);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124.1,20.9);


(lib.a27 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b17();
	this.instance.setTransform(0,0,0.375,0.375);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198.1,33);


(lib.a25 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b14();
	this.instance.setTransform(0,0,0.982,0.982);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,55);


(lib.a24 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b14();
	this.instance.setTransform(0,0,0.982,0.982);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,55);


(lib.a23 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b14();
	this.instance.setTransform(0,0,0.982,0.982);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,55);


(lib.a21 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b13();
	this.instance.setTransform(0,0,0.383,0.383);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.5,35.2);


(lib.a16 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,128);


(lib.a15 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.a12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,51);


(lib.a14 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,69);


(lib.a13 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,150);


(lib.a12_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,56);


(lib.a11 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,76);


(lib.a10 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjkAkQhfgPgBgVQABgUBfgQQBfgPCFAAQCGAABfAPQBfAQAAAUQAAAVhfAPQhfAQiGAAQiFAAhfgQg");
	this.shape.setTransform(32.5,5.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,10.5);


(lib.a9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,248);


(lib.a7 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.b5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,373);


(lib.aa6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.aa4("synched",0);
	this.instance.setTransform(132.4,132.4,1,1,0,0,0,132.4,132.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.9,264.9);


(lib.a173 = function() {
	this.initialize();

	// 元件 2
	this.instance = new lib.b14();
	this.instance.setTransform(-0.6,-0.6,0.982,0.982);

	// 元件 10
	this.instance_1 = new lib.a10();
	this.instance_1.setTransform(35.6,50,1,1,0,0,0,32.5,5.2);
	this.instance_1.alpha = 0.34;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_1.cache(-2,-2,69,15);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-0.6,83,67.5);


(lib.a172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 2
	this.instance = new lib.a25("synched",0);
	this.instance.setTransform(30.8,52.1,1,1,0,0,0,31.4,52.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({startPosition:0},0).to({rotation:-4.9},4,cjs.Ease.get(1)).wait(4).to({startPosition:0},0).to({regX:31.3,regY:52.8,rotation:6.8,y:52.2},4).to({regX:31.4,regY:52.7,rotation:-3.2,y:52.1},3).to({rotation:0},2).wait(9));

	// 元件 10
	this.instance_1 = new lib.a10();
	this.instance_1.setTransform(35.6,50,1,1,0,0,0,32.5,5.2);
	this.instance_1.alpha = 0.34;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_1.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-0.6,83,67.5);


(lib.a22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(5.4,-3.8,1,1,0,0,0,10,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// 图层 1
	this.instance_1 = new lib.a21("synched",0);
	this.instance_1.setTransform(15.1,15.9,1,1,-5.2,0,0,18.8,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:17.7,scaleX:0.91,scaleY:0.94,rotation:0,x:20.6,y:18.8},4).to({regY:17.6,scaleX:1,scaleY:1,x:18.8,y:17.6},2).to({regY:17.7,scaleX:0.91,scaleY:0.94,x:20.6,y:18.8},2).to({regY:17.6,scaleX:1,scaleY:1,rotation:-5.2,x:15.1,y:15.9},4).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-8.1,40.6,43.2);


(lib.a17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 2
	this.instance = new lib.a23("synched",0);
	this.instance.setTransform(31.8,52.4,1,1,0,0,0,32.4,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.9},4,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:32.5,regY:52.9,rotation:6.3,y:52.3},3).to({regY:53,rotation:-3,y:52.4},3).to({regX:32.4,rotation:0},2).wait(60));

	// 元件 10
	this.instance_1 = new lib.a10();
	this.instance_1.setTransform(35.6,50,1,1,0,0,0,32.5,5.2);
	this.instance_1.alpha = 0.34;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_1.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-0.6,83,67.5);


(lib.a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 2
	this.instance = new lib.a24("synched",0);
	this.instance.setTransform(31.9,51.7,1,1,0,0,0,32.5,52.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).to({regY:52.4,rotation:-5.7,y:51.8},5,cjs.Ease.get(1)).wait(4).to({startPosition:0},0).to({regX:32.6,regY:52.3,rotation:5,y:51.7},3).to({regX:32.5,regY:52.4,rotation:-2.8},3).to({regY:52.3,rotation:0},2).wait(34));

	// 元件 10
	this.instance_1 = new lib.a10();
	this.instance_1.setTransform(35.6,50,1,1,0,0,0,32.5,5.2);
	this.instance_1.alpha = 0.34;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_1.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-0.6,83,67.5);


// stage content:
(lib.doubleAnimB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{showResult1:347,showResult2:371,showResult3:396});

	// timeline functions:
	this.frame_7 = function() {
		app.doubleModeStep2();
	}
	this.frame_19 = function() {
		this.stop();
		$("#drawCircle").show();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		$("#drawCircle").hide();
	}
	this.frame_114 = function() {
		this.stop();
		app.detectShake();
	}
	this.frame_346 = function() {
		this.gotoAndPlay(272);
	}
	this.frame_370 = function() {
		this.stop();
	}
	this.frame_395 = function() {
		this.stop();
	}
	this.frame_420 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(12).call(this.frame_19).wait(6).call(this.frame_25).wait(6).call(this.frame_31).wait(5).call(this.frame_36).wait(4).call(this.frame_40).wait(1).call(this.frame_41).wait(73).call(this.frame_114).wait(232).call(this.frame_346).wait(24).call(this.frame_370).wait(25).call(this.frame_395).wait(25).call(this.frame_420).wait(1));

	// cho
	this.instance = new lib.Choco_one_00092();

	this.instance_1 = new lib.Choco_one_00094();

	this.instance_2 = new lib.Choco_one_00096();

	this.instance_3 = new lib.Choco_one_00098();

	this.instance_4 = new lib.Choco_one_00100();

	this.instance_5 = new lib.Choco_one_00102();

	this.instance_6 = new lib.Choco_one_00104();

	this.instance_7 = new lib.Choco_one_00106();

	this.instance_8 = new lib.Choco_one_00108();

	this.instance_9 = new lib.Choco_one_00110();

	this.instance_10 = new lib.Choco_one_00112();

	this.instance_11 = new lib.Choco_one_00114();

	this.instance_12 = new lib.Choco_one_00116();

	this.instance_13 = new lib.Choco_one_00118();

	this.instance_14 = new lib.Choco_one_00120();

	this.instance_15 = new lib.Choco_one_00122();

	this.instance_16 = new lib.Choco_one_00124();

	this.instance_17 = new lib.Choco_one_00125();

	this.instance_18 = new lib.Choco_one_00126();

	this.instance_19 = new lib.Choco_one_00129();

	this.instance_20 = new lib.Choco_one_00135();

	this.instance_21 = new lib.Choco_one_00139();

	this.instance_22 = new lib.Choco_one_00143();

	this.instance_23 = new lib.Choco_one_00147();

	this.instance_24 = new lib.Symbol2();
	this.instance_24.setTransform(320,539,1,1,0,0,0,320,469.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},82).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},8).to({state:[]},1).wait(306));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(106).to({_off:false},0).to({scaleX:0.59,scaleY:0.59,x:324,y:621.6},8).to({_off:true},1).wait(306));

	// choMerge
	this.instance_25 = new lib.mixR0001();
	this.instance_25.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_26 = new lib.mixR0002();
	this.instance_26.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_27 = new lib.mixR0003();
	this.instance_27.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_28 = new lib.mixR0004();
	this.instance_28.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_29 = new lib.mixR0005();
	this.instance_29.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_30 = new lib.mixR0006();
	this.instance_30.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_31 = new lib.mixR0007();
	this.instance_31.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_32 = new lib.mixR0008();
	this.instance_32.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_33 = new lib.mixR0009();
	this.instance_33.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_34 = new lib.mixR0010();
	this.instance_34.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_35 = new lib.mixR0011();
	this.instance_35.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_36 = new lib.mixR0012();
	this.instance_36.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_37 = new lib.mixR0013();
	this.instance_37.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_38 = new lib.mixR0014();
	this.instance_38.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_39 = new lib.mixR0015();
	this.instance_39.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_40 = new lib.mixR0016();
	this.instance_40.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_41 = new lib.mixR0017();
	this.instance_41.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_42 = new lib.mixR0018();
	this.instance_42.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_43 = new lib.mixR0019();
	this.instance_43.setTransform(-195.4,94.2,1.335,1.335);

	this.instance_44 = new lib.mixR0020();
	this.instance_44.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_45 = new lib.mixR0021();
	this.instance_45.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_46 = new lib.mixR0022();
	this.instance_46.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_47 = new lib.mixR0023();
	this.instance_47.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_48 = new lib.mixR0024();
	this.instance_48.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_49 = new lib.mixR0025();
	this.instance_49.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_50 = new lib.mixR0026();
	this.instance_50.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_51 = new lib.mixR0027();
	this.instance_51.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_52 = new lib.mixR0028();
	this.instance_52.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_53 = new lib.mixR0029();
	this.instance_53.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_54 = new lib.mixR0030();
	this.instance_54.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_55 = new lib.mixR0031();
	this.instance_55.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_56 = new lib.mixR0032();
	this.instance_56.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_57 = new lib.mixR0033();
	this.instance_57.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_58 = new lib.mixR0034();
	this.instance_58.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_59 = new lib.mixR0035();
	this.instance_59.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_60 = new lib.mixR0036();
	this.instance_60.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_61 = new lib.mixR0037();
	this.instance_61.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_62 = new lib.mixR0038();
	this.instance_62.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_63 = new lib.mixR0039();
	this.instance_63.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_64 = new lib.mixR0040();
	this.instance_64.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_65 = new lib.mixR0041();
	this.instance_65.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_66 = new lib.mixR0042();
	this.instance_66.setTransform(-185.6,94.2,1.335,1.335);

	this.instance_67 = new lib.mixR0043();
	this.instance_67.setTransform(-185.6,94.2,1.335,1.335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},41).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[]},23).wait(315));

	// blurCho
	this.instance_68 = new lib.c12();
	this.instance_68.setTransform(127.4,338.5,1.209,1.209);

	this.instance_69 = new lib.c13();
	this.instance_69.setTransform(116.9,318.8,1.262,1.262);

	this.instance_70 = new lib.c2();
	this.instance_70.setTransform(126.7,360.6);

	this.instance_71 = new lib.Tween9("synched",0);
	this.instance_71.setTransform(309.7,537.1);
	this.instance_71._off = true;

	this.instance_72 = new lib.Tween10("synched",0);
	this.instance_72.setTransform(319.2,514.7,0.629,0.629);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_68}]},25).to({state:[{t:this.instance_69}]},6).to({state:[{t:this.instance_70}]},5).to({state:[{t:this.instance_71}]},5).to({state:[{t:this.instance_72}]},20).to({state:[{t:this.instance_72}]},22).to({state:[]},1).wait(337));
	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(41).to({_off:false},0).to({_off:true,scaleX:0.63,scaleY:0.63,x:319.2,y:514.7},20).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(41).to({_off:false},20).to({scaleX:0.54,scaleY:0.54,x:303.5,y:499.6,alpha:0},22).to({_off:true},1).wait(337));

	// hint
	this.instance_73 = new lib.Tween2("synched",0);
	this.instance_73.setTransform(300.6,492.7);
	this.instance_73.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).to({alpha:1},6).to({_off:true},1).wait(414));

	// c1
	this.instance_74 = new lib.Tween1("synched",0);
	this.instance_74.setTransform(324,323.6);
	this.instance_74.alpha = 0;
	this.instance_74._off = true;

	this.instance_75 = new lib.Tween8("synched",0);
	this.instance_75.setTransform(324,539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_74}]},7).to({state:[{t:this.instance_75}]},12).to({state:[]},22).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(7).to({_off:false},0).to({_off:true,y:539,alpha:1},12).wait(402));

	// reward3
	this.instance_76 = new lib.Tween16("synched",0);
	this.instance_76.setTransform(320,389.1);
	this.instance_76.alpha = 0;
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(415).to({_off:false},0).to({alpha:1},5).wait(1));

	// reward2
	this.instance_77 = new lib.Tween17("synched",0);
	this.instance_77.setTransform(320,391.1);
	this.instance_77._off = true;

	this.instance_78 = new lib.Tween18("synched",0);
	this.instance_78.setTransform(320,391.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_77}]},390).to({state:[{t:this.instance_78}]},5).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(390).to({_off:false},0).to({_off:true},5).wait(26));

	// reward1
	this.instance_79 = new lib.Tween14("synched",0);
	this.instance_79.setTransform(320,391.1);
	this.instance_79.alpha = 0;
	this.instance_79._off = true;

	this.instance_80 = new lib.Tween15("synched",0);
	this.instance_80.setTransform(320,391.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_79}]},365).to({state:[{t:this.instance_80}]},5).to({state:[]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(365).to({_off:false},0).to({_off:true,alpha:1},5).wait(51));

	// result
	this.instance_81 = new lib.Tween12("synched",0);
	this.instance_81.setTransform(322,-348.1);
	this.instance_81._off = true;

	this.instance_82 = new lib.Tween13("synched",0);
	this.instance_82.setTransform(322,555);
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(346).to({_off:false},0).to({_off:true,y:555},14).wait(11).to({_off:false,y:-348.1},0).to({_off:true,y:555},14).wait(11).to({_off:false,y:-348.1},0).to({_off:true,y:555},14).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(346).to({_off:false},14).wait(1).to({y:531},0).wait(1).to({y:555},0).wait(1).to({y:545},0).wait(1).to({y:555},0).wait(1).to({startPosition:0},0).to({_off:true},6).to({_off:false},14).wait(1).to({y:531},0).wait(1).to({y:555},0).wait(1).to({y:545},0).wait(1).to({y:555},0).wait(1).to({startPosition:0},0).to({_off:true},6).to({_off:false},14).wait(1).to({y:531},0).wait(1).to({y:555},0).wait(1).to({y:545},0).wait(1).to({y:555},0).wait(1).to({startPosition:0},0).wait(6));

	// 元件 29
	this.instance_83 = new lib.a29("synched",0);
	this.instance_83.setTransform(-31.5,415.2,1.746,1.746,0,0,0,62.1,10.9);
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(185).to({_off:false},0).to({x:321.9},10,cjs.Ease.get(1)).to({_off:true},151).wait(75));

	// 元件 28
	this.instance_84 = new lib.a28("synched",0);
	this.instance_84.setTransform(676.2,386.8,1.753,1.753,0,0,0,62.1,10.4);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(183).to({_off:false},0).to({x:323.6},10,cjs.Ease.get(1)).to({_off:true},153).wait(75));

	// 元件 27
	this.instance_85 = new lib.a27("synched",0);
	this.instance_85.setTransform(-126.3,334.3,2.07,2.07,0,0,0,99,16.5);
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(181).to({_off:false},0).to({regY:16.4,x:323,y:335},10,cjs.Ease.get(1)).to({_off:true},155).wait(75));

	// 图层 2
	this.instance_86 = new lib.a22("synched",0);
	this.instance_86.setTransform(157.8,654.3,2.07,2.07,0,0,0,18.8,17.6);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(197).to({_off:false},0).wait(23).to({regX:18.7,x:267.7,y:619.9,startPosition:20},0).wait(24).to({regX:18.8,x:431.2,y:674.8,startPosition:0},0).wait(27).to({x:157.8,y:654.3},0).wait(23).to({regX:18.7,x:267.7,y:619.9,startPosition:20},0).wait(24).to({regX:18.8,x:431.2,y:674.8,startPosition:0},0).to({_off:true},28).wait(75));

	// 图层 3
	this.instance_87 = new lib.a172("synched",0);
	this.instance_87.setTransform(480.7,751.3,1.888,1.888,0,0,0,34,27.7);

	this.instance_88 = new lib.a17("synched",0);
	this.instance_88.setTransform(231.3,734.5,2.07,2.07,0,0,0,34,27.7);

	this.instance_89 = new lib.a2("synched",0);
	this.instance_89.setTransform(346.1,668.3,1.582,1.582,0,0,0,34,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_89},{t:this.instance_88},{t:this.instance_87}]},197).wait(224));

	// 图层 24
	this.instance_90 = new lib.a14();
	this.instance_90.setTransform(-125.8,938.5,2.864,2.864,0,0,0,49.9,34.8);
	this.instance_90._off = true;
	this.instance_90.filters = [new cjs.BlurFilter(2, 2, 3)];
	this.instance_90.cache(-2,-2,104,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(187).to({_off:false},0).to({scaleX:1.94,scaleY:1.94,x:80.6,y:840.8},9,cjs.Ease.get(1)).wait(225));

	// 元件 17
	this.instance_91 = new lib.a173();
	this.instance_91.setTransform(654.5,1034.2,2.786,2.786,0,0,0,34,27.7);
	this.instance_91._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(185).to({_off:false},0).to({scaleX:1.89,scaleY:1.89,x:480.7,y:751.3},9,cjs.Ease.get(1)).to({_off:true},3).wait(224));

	// 元件 17
	this.instance_92 = new lib.a173();
	this.instance_92.setTransform(6.7,1041.6,3.055,3.055,0,0,0,34,27.7);
	this.instance_92._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(183).to({_off:false},0).to({scaleX:2.07,scaleY:2.07,x:231.3,y:734.5},9,cjs.Ease.get(1)).to({_off:true},5).wait(224));

	// 元件 17
	this.instance_93 = new lib.a173();
	this.instance_93.setTransform(338.5,1023.7,2.335,2.335,0,0,0,34,27.6);
	this.instance_93._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(181).to({_off:false},0).to({scaleX:1.58,scaleY:1.58,x:346.1,y:668.3},9,cjs.Ease.get(1)).to({_off:true},7).wait(224));

	// 图层 16
	this.instance_94 = new lib.a9();
	this.instance_94.setTransform(798.1,593,2.155,2.155,0,0,0,99.9,124);
	this.instance_94._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(156).to({_off:false},0).to({regX:100,scaleX:1.36,scaleY:1.36,x:544.4,y:606.2},3).to({regY:124.1,scaleX:0.88,scaleY:0.88,x:391.9,y:614.1},8,cjs.Ease.get(1)).wait(14).to({regX:100.1,regY:124,scaleX:0.47,scaleY:0.47,x:366.7,y:498.6},6,cjs.Ease.get(1)).wait(234));

	// 图层 12
	this.instance_95 = new lib.a7();
	this.instance_95.setTransform(327.6,596.9,1.411,1.4,0,0,0,150,186.6);
	this.instance_95._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(147).to({_off:false},0).wait(9).to({regY:186.4,scaleX:0.87,scaleY:0.86,x:282.7,y:613.9},3).to({regX:150.2,regY:186.6,scaleX:0.55,scaleY:0.54,x:255.9,y:624.3},8,cjs.Ease.get(1)).wait(14).to({regX:150.8,regY:186.5,scaleX:0.29,scaleY:0.29,x:294.9,y:504},6,cjs.Ease.get(1)).wait(234));

	// 图层 17
	this.instance_96 = new lib.a10();
	this.instance_96.setTransform(799.5,848.6,5.915,5.058,0,0,0,32.5,5.2);
	this.instance_96.alpha = 0.301;
	this.instance_96._off = true;
	this.instance_96.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_96.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(156).to({_off:false},0).to({scaleX:3.51,scaleY:3,x:519.7,y:759},3).to({scaleX:2.42,scaleY:2.07,x:392.5,y:718.6},8,cjs.Ease.get(1)).wait(14).to({regY:5.3,scaleX:1.28,scaleY:1.09,x:366.9,y:554},6,cjs.Ease.get(1)).wait(234));

	// 图层 13
	this.instance_97 = new lib.a10();
	this.instance_97.setTransform(315.9,822.4,5.189,5.189,0,0,0,32.5,5.3);
	this.instance_97.alpha = 0;
	this.instance_97._off = true;
	this.instance_97.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_97.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(156).to({_off:false},0).to({regY:5.2,scaleX:3.05,scaleY:3.05,x:273.8,y:751.1,alpha:0.211},3).to({scaleX:2.07,scaleY:2.07,x:254.7,y:718.6,alpha:0.301},8,cjs.Ease.get(1)).wait(14).to({regX:32.4,regY:5.3,scaleX:1.09,scaleY:1.09,x:294.1,y:554},6,cjs.Ease.get(1)).wait(234));

	// 元件 15
	this.instance_98 = new lib.a15();
	this.instance_98.setTransform(689.7,856.5,2.627,2.627,0,0,0,50.1,25.5);
	this.instance_98._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(160).to({_off:false},0).to({regX:50,scaleX:1.86,scaleY:1.86,x:561.7,y:814.6},5).to({regX:50.1,regY:25.6,scaleX:1.42,scaleY:1.42,x:489,y:790.8},8,cjs.Ease.get(1)).wait(8).to({regY:25.5,scaleX:1.33,scaleY:1.33,x:501.8,y:637.8},6,cjs.Ease.get(1)).wait(234));

	// 元件 14
	this.instance_99 = new lib.a14();
	this.instance_99.setTransform(-12.1,850,1.3,1.3,0,0,0,50,34.6);
	this.instance_99._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(158).to({_off:false},0).to({regX:49.9,regY:34.5,scaleX:0.92,scaleY:0.92,x:100.5,y:810},5).to({regX:50,regY:34.6,scaleX:0.7,scaleY:0.7,x:165.1,y:787.2},8,cjs.Ease.get(1)).wait(10).to({regX:50.1,regY:34.7,scaleX:0.37,scaleY:0.37,x:174.4,y:600.5},6,cjs.Ease.get(1)).wait(234));

	// 元件 12
	this.instance_100 = new lib.a12_1();
	this.instance_100.setTransform(723.7,653.6,3.087,3.087,0,0,0,50,28);
	this.instance_100._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(156).to({_off:false},0).to({regY:28.1,scaleX:2.19,scaleY:2.19,x:564.6,y:671.2},3).to({regX:50.1,scaleX:1.67,scaleY:1.67,x:473.9,y:681},8,cjs.Ease.get(1)).wait(14).to({regX:50,regY:28.2,scaleX:0.88,scaleY:0.88,x:409.9,y:534.1},6,cjs.Ease.get(1)).wait(234));

	// 元件 13
	this.instance_101 = new lib.a13();
	this.instance_101.setTransform(790.2,599.1,1.09,1.09,0,0,0,100.2,75);
	this.instance_101._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(156).to({_off:false},0).to({regX:100,regY:74.9,scaleX:0.77,scaleY:0.77,x:604.5,y:632.2},3).to({regY:74.8,scaleX:0.59,scaleY:0.59,x:498.5,y:651.3},8,cjs.Ease.get(1)).wait(14).to({regX:100.1,regY:75.1,scaleX:0.31,scaleY:0.31,x:423,y:518.5},6,cjs.Ease.get(1)).wait(234));

	// 元件 11
	this.instance_102 = new lib.a11();
	this.instance_102.setTransform(-148.2,667.9,2.658,2.658,0,0,0,50,38);
	this.instance_102._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(156).to({_off:false},0).to({scaleX:1.88,scaleY:1.88,x:54.2,y:681},3).to({scaleX:1.44,scaleY:1.44,x:169.9,y:688.6},8,cjs.Ease.get(1)).wait(14).to({regY:38.1,scaleX:0.76,scaleY:0.76,x:249.4,y:538.1},6,cjs.Ease.get(1)).wait(234));

	// 元件 16
	this.instance_103 = new lib.a16();
	this.instance_103.setTransform(-243.4,614.7,1.747,1.747,0,0,0,100,64);
	this.instance_103._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(156).to({_off:false},0).to({scaleX:1.24,scaleY:1.24,x:29.6,y:643.4},3).to({regY:64.1,scaleX:0.95,scaleY:0.95,x:185.6,y:659.9},8,cjs.Ease.get(1)).wait(14).to({regY:64,scaleX:0.5,scaleY:0.5,x:257.6,y:522.9},6,cjs.Ease.get(1)).wait(234));

	// 图层 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_141 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_142 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_143 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_144 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_145 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_146 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_147 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(141).to({graphics:mask_graphics_141,x:322.1,y:511.1}).wait(1).to({graphics:mask_graphics_142,x:322.1,y:479.4}).wait(1).to({graphics:mask_graphics_143,x:322.1,y:447.7}).wait(1).to({graphics:mask_graphics_144,x:322.1,y:401.9}).wait(1).to({graphics:mask_graphics_145,x:322.1,y:356.2}).wait(1).to({graphics:mask_graphics_146,x:322.1,y:310.5}).wait(1).to({graphics:mask_graphics_147,x:322.1,y:264.7}).wait(1).to({graphics:null,x:0,y:0}).wait(273));

	// 元件 2
	this.instance_104 = new lib.aa2();
	this.instance_104.setTransform(324.6,618.9,2.07,2.07,0,0,0,55.5,47.5);
	this.instance_104._off = true;

	this.instance_104.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(114).to({_off:false},0).wait(11).to({y:545.7},5).to({y:509.1},8,cjs.Ease.get(1)).wait(3).to({y:695.5},6).to({_off:true},1).wait(273));

	// 元件 3
	this.instance_105 = new lib.aa3();
	this.instance_105.setTransform(327.5,1221.2,2.07,2.07,0,0,0,105,119.5);
	this.instance_105._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(125).to({_off:false},0).to({y:958.6},5).to({y:863.1},8,cjs.Ease.get(1)).wait(3).to({scaleX:2.28,scaleY:2.28,y:821.8},2).to({scaleX:2.07,scaleY:2.07,y:614.7},4).to({_off:true},1).wait(273));

	// 图层 7
	this.instance_106 = new lib.aa6();
	this.instance_106.setTransform(327.1,620.8,2.07,2.07,0,0,0,132.4,132.4);
	this.instance_106._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(114).to({_off:false},0).wait(11).to({y:547.6},5).to({y:511.1},8,cjs.Ease.get(1)).wait(3).to({y:573.2,alpha:0},6).to({_off:true},1).wait(273));

	// 图层 15
	this.instance_107 = new lib.元件8("synched",0);
	this.instance_107.setTransform(321,539.6,2.692,2.692,0,0,0,118.5,200);
	this.instance_107.alpha = 0;
	this.instance_107._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(125).to({_off:false},0).to({alpha:1},11).wait(228).to({startPosition:0},0).wait(57));

	// 2-1-f
	this.instance_108 = new lib.doublebg();

	this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(421));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,539,640,1078);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;