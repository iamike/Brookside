(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1078,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"imagesSingle/a12.png", id:"a12"},
		{src:"imagesSingle/b10.png", id:"b10"},
		{src:"imagesSingle/b11.png", id:"b11"},
		{src:"imagesSingle/b12.png", id:"b12"},
		{src:"imagesSingle/b13.png", id:"b13"},
		{src:"imagesSingle/b14.png", id:"b14"},
		{src:"imagesSingle/b15.png", id:"b15"},
		{src:"imagesSingle/b16.png", id:"b16"},
		{src:"imagesSingle/b17.png", id:"b17"},
		{src:"imagesSingle/b3.png", id:"b3"},
		{src:"imagesSingle/b4.png", id:"b4"},
		{src:"imagesSingle/b5.png", id:"b5"},
		{src:"imagesSingle/b6.jpg", id:"b6"},
		{src:"imagesSingle/b7.png", id:"b7"},
		{src:"imagesSingle/b8.png", id:"b8"},
		{src:"imagesSingle/b9.png", id:"b9"},
		{src:"imagesSingle/bg_sence.jpg", id:"bg_sence"},
		{src:"imagesSingle/Choco_one_00092.png", id:"Choco_one_00092"},
		{src:"imagesSingle/Choco_one_00094.png", id:"Choco_one_00094"},
		{src:"imagesSingle/Choco_one_00096.png", id:"Choco_one_00096"},
		{src:"imagesSingle/Choco_one_00098.png", id:"Choco_one_00098"},
		{src:"imagesSingle/Choco_one_00100.png", id:"Choco_one_00100"},
		{src:"imagesSingle/Choco_one_00102.png", id:"Choco_one_00102"},
		{src:"imagesSingle/Choco_one_00104.png", id:"Choco_one_00104"},
		{src:"imagesSingle/Choco_one_00106.png", id:"Choco_one_00106"},
		{src:"imagesSingle/Choco_one_00108.png", id:"Choco_one_00108"},
		{src:"imagesSingle/Choco_one_00110.png", id:"Choco_one_00110"},
		{src:"imagesSingle/Choco_one_00112.png", id:"Choco_one_00112"},
		{src:"imagesSingle/Choco_one_00114.png", id:"Choco_one_00114"},
		{src:"imagesSingle/Choco_one_00116.png", id:"Choco_one_00116"},
		{src:"imagesSingle/Choco_one_00118.png", id:"Choco_one_00118"},
		{src:"imagesSingle/Choco_one_00120.png", id:"Choco_one_00120"},
		{src:"imagesSingle/Choco_one_00122.png", id:"Choco_one_00122"},
		{src:"imagesSingle/Choco_one_00124.png", id:"Choco_one_00124"},
		{src:"imagesSingle/Choco_one_00125.png", id:"Choco_one_00125"},
		{src:"imagesSingle/Choco_one_00126.png", id:"Choco_one_00126"},
		{src:"imagesSingle/Choco_one_00129.png", id:"Choco_one_00129"},
		{src:"imagesSingle/Choco_one_00135.png", id:"Choco_one_00135"},
		{src:"imagesSingle/Choco_one_00139.png", id:"Choco_one_00139"},
		{src:"imagesSingle/Choco_one_00143.png", id:"Choco_one_00143"},
		{src:"imagesSingle/Choco_one_00147.png", id:"Choco_one_00147"},
		{src:"imagesSingle/heading4.png", id:"heading4"},
		{src:"imagesSingle/heading5.png", id:"heading5"},
		{src:"imagesSingle/Juice_one_00001.png", id:"Juice_one_00001"},
		{src:"imagesSingle/Juice_one_00003.png", id:"Juice_one_00003"},
		{src:"imagesSingle/Juice_one_00005.png", id:"Juice_one_00005"},
		{src:"imagesSingle/Juice_one_00007.png", id:"Juice_one_00007"},
		{src:"imagesSingle/Juice_one_00009.png", id:"Juice_one_00009"},
		{src:"imagesSingle/Juice_one_00011.png", id:"Juice_one_00011"},
		{src:"imagesSingle/Juice_one_00013.png", id:"Juice_one_00013"},
		{src:"imagesSingle/Juice_one_00015.png", id:"Juice_one_00015"},
		{src:"imagesSingle/Juice_one_00017.png", id:"Juice_one_00017"},
		{src:"imagesSingle/Juice_one_00019.png", id:"Juice_one_00019"},
		{src:"imagesSingle/Juice_one_00021.png", id:"Juice_one_00021"},
		{src:"imagesSingle/Juice_one_00023.png", id:"Juice_one_00023"},
		{src:"imagesSingle/Juice_one_00025.png", id:"Juice_one_00025"},
		{src:"imagesSingle/Juice_one_00027.png", id:"Juice_one_00027"},
		{src:"imagesSingle/Juice_one_00028.png", id:"Juice_one_00028"},
		{src:"imagesSingle/Juice_one_00029.png", id:"Juice_one_00029"},
		{src:"imagesSingle/Juice_one_00030.png", id:"Juice_one_00030"},
		{src:"imagesSingle/Juice_one_00035.png", id:"Juice_one_00035"},
		{src:"imagesSingle/Juice_one_00036.png", id:"Juice_one_00036"},
		{src:"imagesSingle/Juice_one_00039.png", id:"Juice_one_00039"},
		{src:"imagesSingle/Juice_one_00043.png", id:"Juice_one_00043"},
		{src:"imagesSingle/Juice_one_00047.png", id:"Juice_one_00047"},
		{src:"imagesSingle/result.png", id:"result"},
		{src:"imagesSingle/reward1.png", id:"reward1"},
		{src:"imagesSingle/reward2.png", id:"reward2"},
		{src:"imagesSingle/reward3.png", id:"reward3"},
		{src:"imagesSingle/s1.png", id:"s1"},
		{src:"imagesSingle/swipeHint.png", id:"swipeHint"}
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


(lib.bg_sence = function() {
	this.initialize(img.bg_sence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


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


(lib.heading4 = function() {
	this.initialize(img.heading4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,58);


(lib.heading5 = function() {
	this.initialize(img.heading5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,58);


(lib.Juice_one_00001 = function() {
	this.initialize(img.Juice_one_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00003 = function() {
	this.initialize(img.Juice_one_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00005 = function() {
	this.initialize(img.Juice_one_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00007 = function() {
	this.initialize(img.Juice_one_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00009 = function() {
	this.initialize(img.Juice_one_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00011 = function() {
	this.initialize(img.Juice_one_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00013 = function() {
	this.initialize(img.Juice_one_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00015 = function() {
	this.initialize(img.Juice_one_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00017 = function() {
	this.initialize(img.Juice_one_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00019 = function() {
	this.initialize(img.Juice_one_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00021 = function() {
	this.initialize(img.Juice_one_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00023 = function() {
	this.initialize(img.Juice_one_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00025 = function() {
	this.initialize(img.Juice_one_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00027 = function() {
	this.initialize(img.Juice_one_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00028 = function() {
	this.initialize(img.Juice_one_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00029 = function() {
	this.initialize(img.Juice_one_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00030 = function() {
	this.initialize(img.Juice_one_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00035 = function() {
	this.initialize(img.Juice_one_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00036 = function() {
	this.initialize(img.Juice_one_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00039 = function() {
	this.initialize(img.Juice_one_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00043 = function() {
	this.initialize(img.Juice_one_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Juice_one_00047 = function() {
	this.initialize(img.Juice_one_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


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


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,332);


(lib.swipeHint = function() {
	this.initialize(img.swipeHint);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,447);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading5();
	this.instance.setTransform(-205,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205,-29,410,58);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading5();
	this.instance.setTransform(-205,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205,-29,410,58);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading4();
	this.instance.setTransform(-200,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-29,400,58);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading4();
	this.instance.setTransform(-200,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-29,400,58);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.swipeHint();
	this.instance.setTransform(-222.4,-245.5,1.098,1.098);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-222.4,-245.5,444.9,491);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.swipeHint();
	this.instance.setTransform(-222.4,-245.5,1.098,1.098);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-222.4,-245.5,444.9,491);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,305,332);


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


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_sence();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_sence();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Choco_one_00147();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Symbol1_1 = function() {
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
	this.instance = new lib.Symbol1_1("synched",0);
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
(lib.singleAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{showResult1:313,"showResult1":314,showResult2:338,showResult3:363});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		$("#spot").show();
	}
	this.frame_41 = function() {
		this.stop();
		$("#swipeHint").show();
		$("#spot").hide();
	}
	this.frame_313 = function() {
		$('.resultLinks').show();
		$('.option').hide();
		this.gotoAndPlay(166);
	}
	this.frame_337 = function() {
		this.stop();
	}
	this.frame_362 = function() {
		this.stop();
	}
	this.frame_387 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(22).call(this.frame_41).wait(272).call(this.frame_313).wait(24).call(this.frame_337).wait(25).call(this.frame_362).wait(25).call(this.frame_387).wait(1));

	// chocolate
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

	this.instance_23 = new lib.Symbol1copy();
	this.instance_23.setTransform(320,539,1,1,0,0,0,320,539);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},42).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},9).to({state:[]},8).wait(306));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(65).to({_off:false},0).to({regY:539.1,scaleX:0.53,scaleY:0.43,x:333,y:624.9},9).to({_off:true},8).wait(306));

	// juice
	this.instance_24 = new lib.Juice_one_00001();

	this.instance_25 = new lib.Juice_one_00003();

	this.instance_26 = new lib.Juice_one_00005();

	this.instance_27 = new lib.Juice_one_00007();

	this.instance_28 = new lib.Juice_one_00009();

	this.instance_29 = new lib.Juice_one_00011();

	this.instance_30 = new lib.Juice_one_00013();

	this.instance_31 = new lib.Juice_one_00015();

	this.instance_32 = new lib.Juice_one_00017();

	this.instance_33 = new lib.Juice_one_00019();

	this.instance_34 = new lib.Juice_one_00021();

	this.instance_35 = new lib.Juice_one_00023();

	this.instance_36 = new lib.Juice_one_00025();

	this.instance_37 = new lib.Juice_one_00027();

	this.instance_38 = new lib.Juice_one_00028();

	this.instance_39 = new lib.Juice_one_00029();

	this.instance_40 = new lib.Juice_one_00030();

	this.instance_41 = new lib.Juice_one_00035();

	this.instance_42 = new lib.Juice_one_00036();

	this.instance_43 = new lib.Juice_one_00039();

	this.instance_44 = new lib.Juice_one_00043();

	this.instance_45 = new lib.Juice_one_00047();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},20).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[]},25).wait(322));

	// hint
	this.instance_46 = new lib.Tween2("synched",0);
	this.instance_46.setTransform(324.4,492.7);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.instance_47 = new lib.Tween3("synched",0);
	this.instance_47.setTransform(324.4,492.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},35).to({state:[{t:this.instance_47}]},6).to({state:[]},1).wait(346));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(35).to({_off:false},0).to({_off:true,alpha:1},6).wait(347));

	// h4
	this.instance_48 = new lib.Tween4("synched",0);
	this.instance_48.setTransform(320,258.2);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.instance_49 = new lib.Tween5("synched",0);
	this.instance_49.setTransform(320,276.2);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(41).to({_off:false},0).to({_off:true,y:276.2,alpha:1},6).wait(341));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(41).to({_off:false},6).wait(7).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(328));

	// h5
	this.instance_50 = new lib.Tween6("synched",0);
	this.instance_50.setTransform(320,232.4);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.instance_51 = new lib.Tween7("synched",0);
	this.instance_51.setTransform(320,260.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50}]},59).to({state:[{t:this.instance_51}]},6).to({state:[]},10).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(59).to({_off:false},0).to({_off:true,y:260.4,alpha:1},6).wait(323));

	// s1
	this.instance_52 = new lib.Symbol1("synched",0);
	this.instance_52.setTransform(320,385.8,1,1,0,0,0,152.5,166);
	this.instance_52.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({y:530,alpha:1},19).to({_off:true},23).wait(346));

	// reward3
	this.instance_53 = new lib.Tween16("synched",0);
	this.instance_53.setTransform(320,389.1);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(382).to({_off:false},0).to({alpha:1},5).wait(1));

	// reward2
	this.instance_54 = new lib.Tween17("synched",0);
	this.instance_54.setTransform(320,391.1);
	this.instance_54._off = true;

	this.instance_55 = new lib.Tween18("synched",0);
	this.instance_55.setTransform(320,391.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_54}]},357).to({state:[{t:this.instance_55}]},5).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(357).to({_off:false},0).to({_off:true},5).wait(26));

	// reward1
	this.instance_56 = new lib.Tween14("synched",0);
	this.instance_56.setTransform(320,391.1);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.instance_57 = new lib.Tween15("synched",0);
	this.instance_57.setTransform(320,391.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56}]},332).to({state:[{t:this.instance_57}]},5).to({state:[]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(332).to({_off:false},0).to({_off:true,alpha:1},5).wait(51));

	// result
	this.instance_58 = new lib.Tween12("synched",0);
	this.instance_58.setTransform(322,-348.1);
	this.instance_58._off = true;

	this.instance_59 = new lib.Tween13("synched",0);
	this.instance_59.setTransform(322,555);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(313).to({_off:false},0).to({_off:true,y:555},14).wait(11).to({_off:false,y:-348.1},0).to({_off:true,y:555},14).wait(11).to({_off:false,y:-348.1},0).to({_off:true,y:555},14).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(313).to({_off:false},14).wait(1).to({y:531},0).wait(1).to({y:555},0).wait(1).to({y:545},0).wait(1).to({y:555},0).wait(1).to({startPosition:0},0).to({_off:true},6).to({_off:false},14).wait(1).to({y:531},0).wait(1).to({y:555},0).wait(1).to({y:545},0).wait(1).to({y:555},0).wait(1).to({startPosition:0},0).to({_off:true},6).to({_off:false},14).wait(1).to({y:531},0).wait(1).to({y:555},0).wait(1).to({y:545},0).wait(1).to({y:555},0).wait(1).to({startPosition:0},0).wait(6));

	// 元件 29
	this.instance_60 = new lib.a29("synched",0);
	this.instance_60.setTransform(-31.5,415.2,1.746,1.746,0,0,0,62.1,10.9);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(153).to({_off:false},0).to({x:321.9},10,cjs.Ease.get(1)).to({_off:true},151).wait(74));

	// 元件 28
	this.instance_61 = new lib.a28("synched",0);
	this.instance_61.setTransform(676.2,386.8,1.753,1.753,0,0,0,62.1,10.4);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(151).to({_off:false},0).to({x:323.6},10,cjs.Ease.get(1)).to({_off:true},153).wait(74));

	// 元件 27
	this.instance_62 = new lib.a27("synched",0);
	this.instance_62.setTransform(-126.3,334.3,2.07,2.07,0,0,0,99,16.5);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(149).to({_off:false},0).to({regY:16.4,x:323,y:335},10,cjs.Ease.get(1)).to({_off:true},155).wait(74));

	// 图层 2
	this.instance_63 = new lib.a22("synched",0);
	this.instance_63.setTransform(157.8,654.3,2.07,2.07,0,0,0,18.8,17.6);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(165).to({_off:false},0).wait(23).to({regX:18.7,x:267.7,y:619.9,startPosition:20},0).wait(24).to({regX:18.8,x:431.2,y:674.8,startPosition:0},0).wait(27).to({x:157.8,y:654.3},0).wait(23).to({regX:18.7,x:267.7,y:619.9,startPosition:20},0).wait(24).to({regX:18.8,x:431.2,y:674.8,startPosition:0},0).to({_off:true},28).wait(74));

	// 图层 3
	this.instance_64 = new lib.a172("synched",0);
	this.instance_64.setTransform(480.7,751.3,1.888,1.888,0,0,0,34,27.7);

	this.instance_65 = new lib.a17("synched",0);
	this.instance_65.setTransform(231.3,734.5,2.07,2.07,0,0,0,34,27.7);

	this.instance_66 = new lib.a2("synched",0);
	this.instance_66.setTransform(346.1,668.3,1.582,1.582,0,0,0,34,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_66},{t:this.instance_65},{t:this.instance_64}]},165).wait(223));

	// 图层 24
	this.instance_67 = new lib.a14();
	this.instance_67.setTransform(-125.8,938.5,2.864,2.864,0,0,0,49.9,34.8);
	this.instance_67._off = true;
	this.instance_67.filters = [new cjs.BlurFilter(2, 2, 3)];
	this.instance_67.cache(-2,-2,104,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(155).to({_off:false},0).to({scaleX:1.94,scaleY:1.94,x:80.6,y:840.8},9,cjs.Ease.get(1)).wait(224));

	// 元件 17
	this.instance_68 = new lib.a173();
	this.instance_68.setTransform(654.5,1034.2,2.786,2.786,0,0,0,34,27.7);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(153).to({_off:false},0).to({scaleX:1.89,scaleY:1.89,x:480.7,y:751.3},9,cjs.Ease.get(1)).to({_off:true},3).wait(223));

	// 元件 17
	this.instance_69 = new lib.a173();
	this.instance_69.setTransform(6.7,1041.6,3.055,3.055,0,0,0,34,27.7);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(151).to({_off:false},0).to({scaleX:2.07,scaleY:2.07,x:231.3,y:734.5},9,cjs.Ease.get(1)).to({_off:true},5).wait(223));

	// 元件 17
	this.instance_70 = new lib.a173();
	this.instance_70.setTransform(338.5,1023.7,2.335,2.335,0,0,0,34,27.6);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(149).to({_off:false},0).to({scaleX:1.58,scaleY:1.58,x:346.1,y:668.3},9,cjs.Ease.get(1)).to({_off:true},7).wait(223));

	// 图层 16
	this.instance_71 = new lib.a9();
	this.instance_71.setTransform(798.1,593,2.155,2.155,0,0,0,99.9,124);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(124).to({_off:false},0).to({regX:100,scaleX:1.36,scaleY:1.36,x:544.4,y:606.2},3).to({regY:124.1,scaleX:0.88,scaleY:0.88,x:391.9,y:614.1},8,cjs.Ease.get(1)).wait(14).to({regX:100.1,regY:124,scaleX:0.47,scaleY:0.47,x:366.7,y:498.6},6,cjs.Ease.get(1)).wait(233));

	// 图层 12
	this.instance_72 = new lib.a7();
	this.instance_72.setTransform(327.6,596.9,1.411,1.4,0,0,0,150,186.6);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(115).to({_off:false},0).wait(9).to({regY:186.4,scaleX:0.87,scaleY:0.86,x:282.7,y:613.9},3).to({regX:150.2,regY:186.6,scaleX:0.55,scaleY:0.54,x:255.9,y:624.3},8,cjs.Ease.get(1)).wait(14).to({regX:150.8,regY:186.5,scaleX:0.29,scaleY:0.29,x:294.9,y:504},6,cjs.Ease.get(1)).wait(233));

	// 图层 17
	this.instance_73 = new lib.a10();
	this.instance_73.setTransform(799.5,848.6,5.915,5.058,0,0,0,32.5,5.2);
	this.instance_73.alpha = 0.301;
	this.instance_73._off = true;
	this.instance_73.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_73.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(124).to({_off:false},0).to({scaleX:3.51,scaleY:3,x:519.7,y:759},3).to({scaleX:2.42,scaleY:2.07,x:392.5,y:718.6},8,cjs.Ease.get(1)).wait(14).to({regY:5.3,scaleX:1.28,scaleY:1.09,x:366.9,y:554},6,cjs.Ease.get(1)).wait(233));

	// 图层 13
	this.instance_74 = new lib.a10();
	this.instance_74.setTransform(315.9,822.4,5.189,5.189,0,0,0,32.5,5.3);
	this.instance_74.alpha = 0;
	this.instance_74._off = true;
	this.instance_74.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_74.cache(-2,-2,69,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(124).to({_off:false},0).to({regY:5.2,scaleX:3.05,scaleY:3.05,x:273.8,y:751.1,alpha:0.211},3).to({scaleX:2.07,scaleY:2.07,x:254.7,y:718.6,alpha:0.301},8,cjs.Ease.get(1)).wait(14).to({regX:32.4,regY:5.3,scaleX:1.09,scaleY:1.09,x:294.1,y:554},6,cjs.Ease.get(1)).wait(233));

	// 元件 15
	this.instance_75 = new lib.a15();
	this.instance_75.setTransform(689.7,856.5,2.627,2.627,0,0,0,50.1,25.5);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(128).to({_off:false},0).to({regX:50,scaleX:1.86,scaleY:1.86,x:561.7,y:814.6},5).to({regX:50.1,regY:25.6,scaleX:1.42,scaleY:1.42,x:489,y:790.8},8,cjs.Ease.get(1)).wait(8).to({regY:25.5,scaleX:1.33,scaleY:1.33,x:501.8,y:637.8},6,cjs.Ease.get(1)).wait(233));

	// 元件 14
	this.instance_76 = new lib.a14();
	this.instance_76.setTransform(-12.1,850,1.3,1.3,0,0,0,50,34.6);
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(126).to({_off:false},0).to({regX:49.9,regY:34.5,scaleX:0.92,scaleY:0.92,x:100.5,y:810},5).to({regX:50,regY:34.6,scaleX:0.7,scaleY:0.7,x:165.1,y:787.2},8,cjs.Ease.get(1)).wait(10).to({regX:50.1,regY:34.7,scaleX:0.37,scaleY:0.37,x:174.4,y:600.5},6,cjs.Ease.get(1)).wait(233));

	// 元件 12
	this.instance_77 = new lib.a12_1();
	this.instance_77.setTransform(723.7,653.6,3.087,3.087,0,0,0,50,28);
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(124).to({_off:false},0).to({regY:28.1,scaleX:2.19,scaleY:2.19,x:564.6,y:671.2},3).to({regX:50.1,scaleX:1.67,scaleY:1.67,x:473.9,y:681},8,cjs.Ease.get(1)).wait(14).to({regX:50,regY:28.2,scaleX:0.88,scaleY:0.88,x:409.9,y:534.1},6,cjs.Ease.get(1)).wait(233));

	// 元件 13
	this.instance_78 = new lib.a13();
	this.instance_78.setTransform(790.2,599.1,1.09,1.09,0,0,0,100.2,75);
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(124).to({_off:false},0).to({regX:100,regY:74.9,scaleX:0.77,scaleY:0.77,x:604.5,y:632.2},3).to({regY:74.8,scaleX:0.59,scaleY:0.59,x:498.5,y:651.3},8,cjs.Ease.get(1)).wait(14).to({regX:100.1,regY:75.1,scaleX:0.31,scaleY:0.31,x:423,y:518.5},6,cjs.Ease.get(1)).wait(233));

	// 元件 11
	this.instance_79 = new lib.a11();
	this.instance_79.setTransform(-148.2,667.9,2.658,2.658,0,0,0,50,38);
	this.instance_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(124).to({_off:false},0).to({scaleX:1.88,scaleY:1.88,x:54.2,y:681},3).to({scaleX:1.44,scaleY:1.44,x:169.9,y:688.6},8,cjs.Ease.get(1)).wait(14).to({regY:38.1,scaleX:0.76,scaleY:0.76,x:249.4,y:538.1},6,cjs.Ease.get(1)).wait(233));

	// 元件 16
	this.instance_80 = new lib.a16();
	this.instance_80.setTransform(-243.4,614.7,1.747,1.747,0,0,0,100,64);
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(124).to({_off:false},0).to({scaleX:1.24,scaleY:1.24,x:29.6,y:643.4},3).to({regY:64.1,scaleX:0.95,scaleY:0.95,x:185.6,y:659.9},8,cjs.Ease.get(1)).wait(14).to({regY:64,scaleX:0.5,scaleY:0.5,x:257.6,y:522.9},6,cjs.Ease.get(1)).wait(233));

	// 图层 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_109 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_110 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_111 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_112 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_113 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_114 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");
	var mask_graphics_115 = new cjs.Graphics().p("EggLATQMAAAgoaMBAWAAAMAAAAoaQvdB7wGAAQwEAAwvh7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_graphics_109,x:322.1,y:511.1}).wait(1).to({graphics:mask_graphics_110,x:322.1,y:479.4}).wait(1).to({graphics:mask_graphics_111,x:322.1,y:447.7}).wait(1).to({graphics:mask_graphics_112,x:322.1,y:401.9}).wait(1).to({graphics:mask_graphics_113,x:322.1,y:356.2}).wait(1).to({graphics:mask_graphics_114,x:322.1,y:310.5}).wait(1).to({graphics:mask_graphics_115,x:322.1,y:264.7}).wait(1).to({graphics:null,x:0,y:0}).wait(272));

	// 元件 2
	this.instance_81 = new lib.aa2();
	this.instance_81.setTransform(324.6,618.9,2.07,2.07,0,0,0,55.5,47.5);
	this.instance_81._off = true;

	this.instance_81.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(74).to({_off:false},0).wait(19).to({y:545.7},5).to({y:509.1},8,cjs.Ease.get(1)).wait(3).to({y:695.5},6).to({_off:true},1).wait(272));

	// 元件 3
	this.instance_82 = new lib.aa3();
	this.instance_82.setTransform(327.5,1221.2,2.07,2.07,0,0,0,105,119.5);
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(93).to({_off:false},0).to({y:958.6},5).to({y:863.1},8,cjs.Ease.get(1)).wait(3).to({scaleX:2.28,scaleY:2.28,y:821.8},2).to({scaleX:2.07,scaleY:2.07,y:614.7},4).to({_off:true},1).wait(272));

	// 图层 7
	this.instance_83 = new lib.aa6();
	this.instance_83.setTransform(327.1,620.8,2.07,2.07,0,0,0,132.4,132.4);
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(74).to({_off:false},0).wait(19).to({y:547.6},5).to({y:511.1},8,cjs.Ease.get(1)).wait(3).to({y:573.2,alpha:0},6).to({_off:true},1).wait(272));

	// 图层 15
	this.instance_84 = new lib.元件8("synched",0);
	this.instance_84.setTransform(321,539.6,2.692,2.692,0,0,0,118.5,200);
	this.instance_84.alpha = 0;
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(74).to({_off:false},0).to({alpha:1},11).wait(228).to({startPosition:0},0).wait(75));

	// 2-1-f
	this.instance_85 = new lib.bg_sence();

	this.instance_86 = new lib.Tween8("synched",0);
	this.instance_86.setTransform(320,539);
	this.instance_86._off = true;

	this.instance_87 = new lib.Tween9("synched",0);
	this.instance_87.setTransform(320,539);
	this.instance_87.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_85}]}).to({state:[{t:this.instance_86}]},74).to({state:[{t:this.instance_87}]},11).to({state:[]},1).wait(302));
	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(74).to({_off:false},0).to({_off:true,alpha:0},11).wait(303));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,539,640,1078);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;