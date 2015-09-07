(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1078,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.arrow = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.chocolate = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.chocolateShadow = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.heading1 = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.heading2 = function() {
	this.spriteSheet = ss["canvasAnim_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading2();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading2();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading1();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.heading1();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolateShadow();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolateShadow();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-320,-539);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


(lib.bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.mcPath = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1078);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chocolate();
	this.instance.setTransform(-320,-539);

	this.instance_1 = new lib.Tween19("synched",0);
	this.instance_1.setTransform(26,146.1,1,1,0,0,0,26,146.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween20("synched",0);
	this.instance_2.setTransform(22,150.1,1,1,-6.2,0,0,22,150.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},3).to({state:[]},3).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({_off:true,regX:22,regY:150.2,rotation:-6.2,x:22,y:150.1},3).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-539,640,1078);


// stage content:



(lib.canvasAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{allShow:79});

	// timeline functions:
	this.frame_114 = function() {
		this.gotoAndPlay("allShow");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// arrow
	this.instance = new lib.mcPath();
	this.instance.setTransform(320,539,1,1,0,0,0,320,539);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({alpha:1},27).wait(25));

	// heading
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(320,539);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(320,539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},50).to({state:[{t:this.instance_2}]},29).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({_off:true,alpha:1},29).wait(36));

	// heading2
	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.setTransform(320,490.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween10("synched",0);
	this.instance_4.setTransform(320,538.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({_off:true,y:538.1,alpha:1},23).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off:false},23).wait(20).to({startPosition:0},0).to({scaleX:1.13,scaleY:1.13},3).to({scaleX:1,scaleY:1},3).wait(10));

	// hand
	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.setTransform(320,539);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.setTransform(320,539);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).to({_off:true,alpha:1},29).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({_off:false},29).to({rotation:26,x:516.1,y:561},14).to({rotation:70.7,x:602.1,y:756.9},12).wait(10));

	// chocolate
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(320,539);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(320,539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},20).to({state:[{t:this.instance_8}]},29).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({_off:true,alpha:1},29).wait(66));

	// chocolateShadow
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(320,539);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(320,539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},37).to({state:[{t:this.instance_10}]},12).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37).to({_off:false},0).to({_off:true,alpha:1},12).wait(66));

	// bg
	this.instance_11 = new lib.bg_1();
	this.instance_11.setTransform(320,539,1,1,0,0,0,320,539);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},29).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,539,640,1078);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;