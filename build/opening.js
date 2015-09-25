(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1078,
	fps: 16,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.a21 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a3 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a4 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.a6 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.c11 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.c10 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.c3 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.c4 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.c511 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.c6 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.c7 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.d1 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.d2 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.d3 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.d4 = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["canvasAnimNew_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.s15 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.hand();
	this.instance.setTransform(76.8,59.6,1,1,118.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,36.9,62.9,62.1);


(lib.s14 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.d4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,53);


(lib.s13 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.d3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,46);


(lib.s12 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.d2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,28);


(lib.s11 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.d1();
	this.instance.setTransform(0,0,0.38,0.38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.3,22.8);


(lib.s10 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.c11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,400);


(lib.s9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.c7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,243,203);


(lib.s8 = function() {
	this.initialize();

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApTCJIANj7IK6hBIHgEHIhnBfQgBABgTAAQiAAAusgrg");
	mask.setTransform(54.4,10.1);

	// 图层 1
	this.instance = new lib.a4();
	this.instance.setTransform(0,0,0.375,0.375);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,28.2);


(lib.s6 = function() {
	this.initialize();

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgzBnQgbgBgUgWQgRgTAAgQQAAgRAigWIApgXQAAgIACgCQADgDAMAAQADgGABgIIABgWQADgbAvgJQAjAJAbA7QAWAvAAAhQAAAagGAHQgMARguAHg");
	mask.setTransform(112,26.7);

	// 图层 1
	this.instance = new lib.a4();
	this.instance.setTransform(-3.1,0,0.388,0.388);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.4,16.4,19.7,17);


(lib.s5 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.a6();
	this.instance.setTransform(0,0,0.408,0.408);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.9,34.3);


(lib.s4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.c3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,400);


(lib.s6_1 = function() {
	this.initialize();

	// 图层 1
	this.instance_1 = new lib.c10();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185,167);


(lib.s5_1 = function() {
	this.initialize();

	// 图层 1
	this.instance_1 = new lib.c4();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155,173);


(lib.s3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.c511();
	this.instance.setTransform(-2.7,14.1,0.586,0.586);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,14.1,220.5,151.9);


(lib.s2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.c6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,127);


(lib.s1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.a21();
	this.instance.setTransform(4.3,10.5,0.379,0.379);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.3,10.5,94.7,80.3);


(lib.m2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.a3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209,67);


(lib.m1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a21();
	this.instance.setTransform(0,0,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,105.5);


(lib.s16 = function() {
	this.initialize();

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDGmQhcgKhkgnQhygrhThDQjViqBDjvQALhRBHhLQCNiWEpAfQFPAjCMCXQB8CGggDaQgaC5iqBNQhrAxiRAAQgzAAg1gGg");
	mask.setTransform(59.6,66);

	// 图层 1
	this.instance = new lib.s1("synched",0);
	this.instance.setTransform(66.3,56.7,1.192,1.192,0,0,0,55.6,47.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.1,23.2,110.2,85);


(lib.m3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s6("synched",0);
	this.instance.setTransform(59.5,17,1,1,0,0,0,59.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({x:57.3,y:15},3).to({x:59.5,y:17},4).to({x:57.3,y:15},3).to({x:59.5,y:17},4).wait(22));

	// 图层 5
	this.instance_1 = new lib.s8("synched",0);
	this.instance_1.setTransform(59.5,17,1,1,0,0,0,59.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,33.4);


// stage content:
(lib.canvasAnimNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{allShow:0,toSence:106});

	// timeline functions:
	this.frame_105 = function() {
		this.gotoAndPlay("allShow");
	}
	this.frame_160 = function() {
		this.stop();
		app.showMode();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(55).call(this.frame_160).wait(1));

	// 图层 37
	this.instance = new lib.s16("synched",0);
	this.instance.setTransform(321.4,657.7,2.688,2.688,0,0,0,66.2,56.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).to({scaleX:3.09,scaleY:3.09,rotation:13.5,x:291.7,y:684.2,alpha:0},13,cjs.Ease.get(1)).to({_off:true},1).wait(41));

	// c10.png
	this.instance_1 = new lib.s6_1("synched",0);
	this.instance_1.setTransform(353.6,599.7,0.293,0.293,0,0,0,93.3,83.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106).to({_off:false},0).to({regX:93,regY:83.4,scaleX:0.84,scaleY:0.84,x:370.2,y:526.2},13,cjs.Ease.get(1)).to({regX:92.5,regY:83.5,scaleX:0.97,scaleY:0.97,x:372.2,y:531.7},13).wait(2).to({startPosition:0},0).to({scaleX:6.31,scaleY:6.31,x:624.6,y:-37.1},5).to({scaleX:6.66,scaleY:6.66,x:641.1,y:-74.4},2,cjs.Ease.get(1)).to({regY:83.6,scaleX:7.28,scaleY:7.28,x:670.5,y:-140.4},8).wait(12));

	// 图层 27
	this.instance_2 = new lib.s5_1("synched",0);
	this.instance_2.setTransform(224.7,719.4,0.28,0.28,0,0,0,76.8,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({regX:76.7,regY:85.9,scaleX:0.69,scaleY:0.69,x:187,y:688.8},13,cjs.Ease.get(1)).to({regX:77.5,regY:86.5,scaleX:0.93,scaleY:0.93,x:189.2,y:693.4},13).wait(2).to({startPosition:0},0).to({scaleX:2.42,scaleY:2.42,x:102.8,y:1010.2},5).to({scaleX:2.69,scaleY:2.69,x:-129.1,y:1284.1},10,cjs.Ease.get(1)).wait(12));

	// 图层 28
	this.instance_3 = new lib.s3("synched",0);
	this.instance_3.setTransform(309.6,665.7,1.466,1.466,0,0,0,112.4,89.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106).to({_off:false},0).to({regX:112.5,scaleX:2.16,scaleY:2.16,x:301.1,y:602.8},13,cjs.Ease.get(1)).wait(15).to({startPosition:0},0).to({scaleX:9.89,scaleY:9.89,x:382.8,y:543.6,alpha:0},7).to({scaleX:11.29,scaleY:11.29,x:397.6,y:532.6},8,cjs.Ease.get(1)).to({startPosition:0},11).wait(1));

	// 图层 29 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_106 = new cjs.Graphics().p("EAKhA6SQn8h6jsmLQhsiwgQi9QgRjABPijQBCiNBxhlQAlggAkgWQAdgSAAADQAPgLAegQQA9gfBJgbQDshSEhALQC2AHDUBHQDmBNC0B8QHBE3hQGxQhXHUlzCvQjIBfkCAAQjIAAjsg5g");
	var mask_graphics_107 = new cjs.Graphics().p("AkFNxQofiDj/mmQhzi9gSjIQgSjNBVivQBGiXB7hsQAogiAmgXQAfgUAAAEQARgMAfgRQBBgiBPgcQD8hYE1AMQDBAIDjBMQD2BRDBCFQHgFNhWHOQhdH0mNC7QjWBmkUAAQjUAAj8g9g");
	var mask_graphics_108 = new cjs.Graphics().p("AkVOmQpAiLkOm/Qh6jIgTjUQgTjaBai6QBKifCDhyQAqglAogZQAigUAAADQARgMAhgSQBFgkBUgeQELhdFHANQDNAIDxBQQEFBXDMCNQH9FhhbHpQhiISmmDHQjiBskkAAQjhAAkMhBg");
	var mask_graphics_109 = new cjs.Graphics().p("AkjPWQpeiSkcnWQiAjSgUjgQgUjlBejDQBPioCJh4QAsgmArgaQAjgWAAAEQASgOAjgTQBIglBYgfQEahiFYANQDYAJD8BUQETBbDWCUQIYF0hgICQhnIum7DRQjuBxk0AAQjtAAkZhEg");
	var mask_graphics_110 = new cjs.Graphics().p("AkwQCQp5iYkpnrQiGjcgUjpQgWjvBjjNQBSivCPh9QAvgoAsgbQAlgXAAAEQATgOAkgUQBMgnBcggQElhnFoAOQDhAJEIBYQEfBfDgCbQIwGEhkIZQhtJHnODaQj5B2lBAAQj4AAklhHg");
	var mask_graphics_111 = new cjs.Graphics().p("Ak8QpQqRiek0n+QiLjjgVjzQgXj4BnjUQBVi2CViCQAwgqAugcQAmgYAAAEQAUgOAmgVQBOgoBggiQEwhqF1AOQDrAKESBbQEpBjDpCgQJFGThoIuQhwJdnhDiQkBB7lOAAQkBAAkxhKg");
	var mask_graphics_112 = new cjs.Graphics().p("AlGRLQqmijk+oOQiQjrgWj6QgXkABqjcQBYi8CZiGQAygqAwgeQAngYAAAEQAVgPAngVQBQgqBjgjQE6htGCAOQDyAKEaBeQE0BnDwClQJYGghrJAQh1JwnwDqQkKB/lYAAQkKAAk6hNg");
	var mask_graphics_113 = new cjs.Graphics().p("AlPRpQq4iolHocQiUjxgWkCQgYkHBtjhQBajBCeiJQAzgsAxgfQAogZAAAEQAVgPApgVQBSgsBmgjQFDhxGMAPQD4AKEiBhQE8BpD3CqQJoGrhuJQQh3KBn+DxQkRCBliABQkRAAlDhPg");
	var mask_graphics_114 = new cjs.Graphics().p("AlWSDQrIislOooQiYj3gWkHQgZkNBvjnQBdjFChiMQA0gtAzgfQApgaAAAEQAVgPApgWQBVgtBogkQFKhzGVAPQD+ALEoBiQFDBsD9CuQJ1G1hwJcQh6KQoJD2QkYCFlpAAQkXAAlKhQg");
	var mask_graphics_115 = new cjs.Graphics().p("AldSXQrUivlVoxQiZj8gYkMQgYkSBxjqQBejJCkiPQA1guAzgfQAqgaAAAEQAWgQAqgWQBWguBpgkQFQh1GdAPQECALEuBkQFJBuEBCxQKBG8hyJoQh9KboSD7QkcCHlwAAQkcAAlRhSg");
	var mask_graphics_116 = new cjs.Graphics().p("AlhSnQrfixlZo5Qicj/gXkQQgakVBzjuQBfjMCniRQA2guA0ggQAqgaAAAEQAWgQArgXQBXguBrglQFUh3GiAQQEHALEyBmQFNBvEECzQKKHDh0JwQh+KloZD9QkgCJl1AAQkgAAlVhTg");
	var mask_graphics_117 = new cjs.Graphics().p("AllSzQrlizldo/QidkBgYkTQgZkYBzjwQBhjOCoiSQA3gvA0ggQAqgbAAAEQAXgQArgWQBYgvBsglQFYh4GlAQQEJAKE2BnQFQBwEHC1QKQHHh1J3Qh/KrofEAQkkCKl4AAQkjAAlYhTg");
	var mask_graphics_118 = new cjs.Graphics().p("AlnS6Qrqi0lepCQiekDgYkUQgakaB1jxQBgjPCqiTQA2gvA1ghQArgbAAAEQAXgQArgXQBYguBtgmQFah5GoAQQEKALE3BoQFTBwEIC3QKUHJh2J6QiAKvoiECQklCLl6AAQklAAlahUg");
	var mask_graphics_119 = new cjs.Graphics().p("EADdA4UQrpi0lfpEQifkDgYkWQgZkbB0jyQBhjPCqiTQA3gvA0ghQArgbAAAEQAXgQArgXQBZgvBtglQFYh5GpAQQENALE4BnQFTBxEJC3QKVHKh2J9QiAKxojECQkmCLl7AAQknAAlbhUg");
	var mask_graphics_134 = new cjs.Graphics().p("EADdA4UQrpi0lfpEQifkDgYkWQgZkbB0jyQBhjPCqiTQA3gvA0ghQArgbAAAEQAXgQArgXQBZgvBtglQFYh5GpAQQENALE4BnQFTBxEJC3QKVHKh2J9QiAKxojECQkmCLl7AAQknAAlbhUg");
	var mask_graphics_135 = new cjs.Graphics().p("AocccQxikOoPtmQjvmGgkmfQgmmoCvlsQCSk2D/jeQBShHBPgwQBBgpAAAGQAigYBAgiQCFhHCkg4QIIi2J/AYQGRAQHUCcQH9CpGNETQPhKwixO6QjBQKs1GDQm4DRo5AAQm5AAoJh+g");
	var mask_graphics_136 = new cjs.Graphics().p("EgLSAl7Q3Yloq/yJQk+oHgworQgzo2DqnkQDCmfFTkoQBuheBphAQBXg2AAAIQAtghBXguQCxheDahLQK2jyNTAgQIZAVJwDQQKmDiITFuQUsOWjsT6QkAVixIIFQpLEXr4AAQpNAAq3ipg");
	var mask_graphics_137 = new cjs.Graphics().p("EgOGAvbQ9PnCtv2rQmOqKg8q2QhArDElpeQDzoGGnlzQCKh1CEhRQBshDAAAKQA5gpBsg5QDdh2ERheQNkkvQoAoQKfAbMNEEQNQEaKYHKQZ3R7koY6QlAa71aKHQreFcu2AAQrgAAtljTg");
	var mask_graphics_138 = new cjs.Graphics().p("EgQ8A47UgjFgIcgQfgbOQndsLhItCQhNtRFgrXQEjpuH8m9QCliNCehhQCChQAAALQBEgwCChFQEKiNFIhxQQRlrT+AvQMlAhOpE3QP6FTMcImQfEVhljd5UgGBAgUgZsAMIQtxGhx0AAQt0AAwUj8g");
	var mask_graphics_139 = new cjs.Graphics().p("EgTwBCaUgo8gJ2gTPgfwQotuOhUvNQhaveGbtRQFTrVJRoIQDBikC5hxQCXheAAAOQBQg5CXhQQE3ikF+iFQS/mnXTA3QOrAmRGFrQSkGMOhKBUAkPAZHgGfAi5UgHAAltgd+AOJQwFHn0xAAQwJAAzBkng");
	var mask_graphics_140 = new cjs.Graphics().p("EgWmBL6UguygLQgV/gkTQp8wPhgxZQhnxsHVvKQGFs9KlpSQDdi7DSiBQCthsAAAQQBbhBCuhcQFii8G2iXQVsnkaoA/QQyArTiGgQVOHEQmLdUApbActgHaAn4UgIBArGgiRAQKQyXIt3wAAQydAA1vlRg");
	var mask_graphics_141 = new cjs.Graphics().p("EgZaBVaUg0pgMrgYvgo1QrMyShszkQh0z5IQxDQG1ulL6qcQD5jTDtiRQDCh5AAARQBnhJDDhnQGPjTHsirQYaogd9BHQS5AwV+HUQX3H8SrM6UAunAgSgIWAs4UgJAAwegmjASMQ0rJz6uAAQ0wAA4dl7g");
	var mask_graphics_142 = new cjs.Graphics().p("EgaQBYPUg2YgNFgZkgqMQrjy5hx0NQh30jIhxoQHEvEMTqyQEBjaD1iWQDJh9AAASQBqhLDJhrQGdjaH8iwQZOoze8BKQThAyWtHjQYqINTTNVUAwJAhWgInAuXUgJUAyGgn0ASyQ1XKI7nAAQ1dAA5QmIg");
	var mask_graphics_143 = new cjs.Graphics().p("Ega/BasUg35gNdgaRgrXQr4zah00xQh71IIxyHQHQvfMqrFQEIjhD7iaQDPiAAAASQBthNDOhuQGpjgIKi1QZ7pCfzBMQUEAzXVHxQZWIbT1NtUAxfAiSgI2AvpUgJkAzfgo8ATUQ19Ka8YAAQ2CAA5+mTg");
	var mask_graphics_144 = new cjs.Graphics().p("EgbnBcyUg5LgNyga3gsWQsJz2h31RQh91nI9yhQHbv1M8rWQEOjlEBieQDUiEAAATQBvhODThwQGyjmIWi5UAahgJQAgiABOQUiA0X3H8QZ7IpUSOAUAyoAjEgJEAwwUgJyA0qgp3ATwQ2eKp9DAAQ2iAA6jmbg");
	var mask_graphics_145 = new cjs.Graphics().p("EgcHBefUg6OgOCgbXgtKQsX0Oh51pQiA2AJIy4QHjwHNMrjQETjqEGigQDXiHAAAUQBxhQDXhyQG7jrIfi7UAbBgJbAhHABPQU7A1YTIFQaZIzUpOQUAzkAjugJOAxpUgJ+A1ogqoAUHQ24K29lAAQ29AA7Cmjg");
	var mask_graphics_146 = new cjs.Graphics().p("EgcgBfzUg7DgOOgbvgtzQsi0gh718QiB2UJQzJQHqwWNXrtQEXjtEKijQDaiIAAAUQBzhRDah0QHAjtIni/UAbZgJjAhlABQQVNA2YpINQaxI6U8OdUA0RAkOgJWAyVUgKGA2YgrPAUZQ3MLA+AAAQ3RAA7ampg");
	var mask_graphics_147 = new cjs.Graphics().p("EgcyBgvUg7ogOXgcBguPQsp0th82KQiD2jJVzUQHvwgNgr1QEajvEMilQDciJAAAUQB0hSDch1QHGjwIsjAUAbqgJqAh6ABSQVbA2Y4ISQbCJAVJOmUA0yAklgJcAy0UgKMA27grqAUmQ3bLH+SAAQ3hAA7rmug");
	var mask_graphics_148 = new cjs.Graphics().p("Egc9BhUUg7+gOdgcLguhQsv00h82TQiE2rJZzbQHywnNlr5QEcjxENilQDeiKAAAUQB0hSDeh2QHIjxIvjBUAb1gJuAiGABSQVjA3ZCIVQbMJDVROsUA1GAkygJgAzIUgKQA3Pgr7AUtQ3kLL+eAAQ3oAA72mvg");
	var mask_graphics_149 = new cjs.Graphics().p("EgdABhgUg8GgOfgcPgumQsw03h92WQiE2tJbzeQHywpNnr6QEcjyEOilQDeiLAAAUQB1hSDeh2QHJjyIwjBUAb4gJvAiLABSQVmA3ZFIWQbPJFVTOtUA1NAk3gJhAzOUgKRA3WgsAAUwQ3nLM+iAAQ3rAA75mwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(106).to({graphics:mask_graphics_106,x:203.8,y:378.7}).wait(1).to({graphics:mask_graphics_107,x:293.6,y:660.3}).wait(1).to({graphics:mask_graphics_108,x:291.6,y:652}).wait(1).to({graphics:mask_graphics_109,x:289.8,y:644.4}).wait(1).to({graphics:mask_graphics_110,x:288.2,y:637.4}).wait(1).to({graphics:mask_graphics_111,x:286.7,y:631.3}).wait(1).to({graphics:mask_graphics_112,x:285.4,y:625.8}).wait(1).to({graphics:mask_graphics_113,x:284.3,y:621.1}).wait(1).to({graphics:mask_graphics_114,x:283.3,y:617.1}).wait(1).to({graphics:mask_graphics_115,x:282.6,y:613.9}).wait(1).to({graphics:mask_graphics_116,x:282,y:611.3}).wait(1).to({graphics:mask_graphics_117,x:281.5,y:609.5}).wait(1).to({graphics:mask_graphics_118,x:281.3,y:608.4}).wait(1).to({graphics:mask_graphics_119,x:222.9,y:368.9}).wait(15).to({graphics:mask_graphics_134,x:222.9,y:368.9}).wait(1).to({graphics:mask_graphics_135,x:285.8,y:600.6}).wait(1).to({graphics:mask_graphics_136,x:290.4,y:593.1}).wait(1).to({graphics:mask_graphics_137,x:294.9,y:585.6}).wait(1).to({graphics:mask_graphics_138,x:299.5,y:578.1}).wait(1).to({graphics:mask_graphics_139,x:304.1,y:570.7}).wait(1).to({graphics:mask_graphics_140,x:308.7,y:563.2}).wait(1).to({graphics:mask_graphics_141,x:313.2,y:555.7}).wait(1).to({graphics:mask_graphics_142,x:314.6,y:553.5}).wait(1).to({graphics:mask_graphics_143,x:315.8,y:551.6}).wait(1).to({graphics:mask_graphics_144,x:316.8,y:549.9}).wait(1).to({graphics:mask_graphics_145,x:317.6,y:548.6}).wait(1).to({graphics:mask_graphics_146,x:318.2,y:547.6}).wait(1).to({graphics:mask_graphics_147,x:318.7,y:546.8}).wait(1).to({graphics:mask_graphics_148,x:318.9,y:546.4}).wait(1).to({graphics:mask_graphics_149,x:319,y:546.2}).wait(1).to({graphics:null,x:0,y:0}).wait(11));

	// c7.png
	this.instance_4 = new lib.s9("synched",0);
	this.instance_4.setTransform(374.3,751.8,0.33,0.33,0,0,0,121.1,101.2);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106).to({_off:false},0).to({regX:121.5,regY:101.3,scaleX:0.48,scaleY:0.48,x:361.3,y:693.6},13,cjs.Ease.get(1)).wait(15).to({startPosition:0},0).to({regX:121.4,regY:101.5,scaleX:1.03,scaleY:1.03,x:533.2,y:946.7},5).to({regX:121.5,regY:101.4,scaleX:1.13,scaleY:1.13,x:752.7,y:1187.8},10,cjs.Ease.get(1)).wait(12));

	// 图层 31
	this.instance_5 = new lib.s4("synched",0);
	this.instance_5.setTransform(296.4,608.8,0.971,0.971,0,0,0,118,199.6);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(106).to({_off:false},0).to({regX:118.5,regY:200,scaleX:1.4,scaleY:1.4,x:282.4,y:521.3},13,cjs.Ease.get(1)).to({startPosition:0},13).to({scaleX:2.49,scaleY:2.49,x:315.1,y:533.6},3).to({scaleX:2.69,scaleY:2.69,x:321,y:535.8},6,cjs.Ease.get(1)).wait(20));

	// b4.png
	this.instance_6 = new lib.s1("synched",0);
	this.instance_6.setTransform(321.6,657.8,3.205,3.205,0,0,0,55.6,47.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(106).to({_off:false},0).to({scaleX:4.12,scaleY:4.12,x:302,y:581},13,cjs.Ease.get(1)).to({regX:55.5,scaleX:4.19,scaleY:4.19,x:301.7,y:580.7},13,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleX:18.08,scaleY:18.08,x:332.3,y:476.3},7).to({scaleX:20.61,scaleY:20.61,x:337.5,y:457.3},8,cjs.Ease.get(1)).wait(12));

	// c6.png
	this.instance_7 = new lib.s2("synched",0);
	this.instance_7.setTransform(327.6,747,1.944,1.944,0,0,0,118.5,63.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).to({scaleX:2.71,scaleY:2.71,x:318.5,y:693.7},13,cjs.Ease.get(1)).wait(13).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({scaleX:11.71,scaleY:11.71,x:404.5,y:964.2},7).to({scaleX:13.34,scaleY:13.34,x:420.4,y:1013.6},8,cjs.Ease.get(1)).wait(12));

	// 图层 35
	this.instance_8 = new lib.s15("synched",0);
	this.instance_8.setTransform(314,761,1.348,1.348,-121.8,0,0,-140.2,72);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({rotation:-39.1,x:314.1,y:760.9},31).wait(15).to({regY:72.1,rotation:-125.1,x:314.3},0).to({rotation:-38.6,x:314.2},29).wait(16).to({rotation:-38.6},0).to({_off:true},1).wait(65));

	// a4.png
	this.instance_9 = new lib.m3("synched",0);
	this.instance_9.setTransform(318.5,668.7,2.688,2.688,0,0,0,52.5,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},106).wait(55));

	// 图层 1
	this.instance_10 = new lib.s5("synched",0);
	this.instance_10.setTransform(319,403.4,2.688,2.688,0,0,0,72.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105).to({startPosition:0},0).to({scaleX:2.18,scaleY:2.18,y:403.3,alpha:0},5).to({_off:true},1).wait(50));

	// a2.png
	this.instance_11 = new lib.m1("synched",0);
	this.instance_11.setTransform(318.5,803.1,2.688,2.688,0,0,0,62,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({startPosition:24},0).to({scaleX:2.69,scaleY:2.69,rotation:-5,x:318.6,startPosition:34},4,cjs.Ease.get(1)).wait(3).to({startPosition:37},0).to({regX:61.9,scaleX:2.69,scaleY:2.69,rotation:5.7,x:318.7,startPosition:41},3).to({regY:104.9,rotation:-4.4,x:318.5,y:802.8,startPosition:46},4).to({regY:105,rotation:0,x:318.4,y:803.1,startPosition:53},6,cjs.Ease.get(1)).wait(29).to({regX:62,x:318.5,startPosition:24},0).to({scaleX:2.69,scaleY:2.69,rotation:-5,x:318.6,startPosition:34},4,cjs.Ease.get(1)).wait(3).to({startPosition:37},0).to({regX:61.9,scaleX:2.69,scaleY:2.69,rotation:5.7,x:318.7,startPosition:41},3).to({regY:104.9,rotation:-4.4,x:318.5,y:802.8,startPosition:46},4).to({regY:105,rotation:0,x:318.4,y:803.1,startPosition:53},6,cjs.Ease.get(1)).to({_off:true},13).wait(55));

	// a3.png
	this.instance_12 = new lib.m2();
	this.instance_12.setTransform(306.4,793.5,2.688,2.688,0,0,0,104.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({x:292.9},4,cjs.Ease.get(1)).wait(3).to({x:319.8},3).to({x:299.6},4).to({x:306.4},6,cjs.Ease.get(1)).wait(29).to({x:292.9},4,cjs.Ease.get(1)).wait(3).to({x:319.8},3).to({x:299.6},4).to({x:306.4},6,cjs.Ease.get(1)).to({_off:true},13).wait(55));

	// d1.png
	this.instance_13 = new lib.s11("synched",0);
	this.instance_13.setTransform(325.2,275.6,2.688,2.688,0,0,0,84,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(105).to({startPosition:0},0).to({scaleX:2.27,scaleY:2.27,x:325.1,y:275.7,alpha:0},5).to({_off:true},1).wait(50));

	// d2.png
	this.instance_14 = new lib.s12("synched",0);
	this.instance_14.setTransform(109,489.4,2.688,2.688,0,0,0,23.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(105).to({startPosition:0},0).to({regX:23.5,x:60.9,y:422.2,alpha:0},5).to({_off:true},1).wait(50));

	// d3.png
	this.instance_15 = new lib.s13("synched",0);
	this.instance_15.setTransform(555.1,551.2,2.688,2.688,0,0,0,32.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(105).to({startPosition:0},0).to({x:674.8,y:489.4,alpha:0},5).to({_off:true},1).wait(50));

	// d4.png
	this.instance_16 = new lib.s14("synched",0);
	this.instance_16.setTransform(616.9,681.8,2.688,2.688,0,0,0,28.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(105).to({startPosition:0},0).to({regX:28.6,x:695.1,y:684.5,alpha:0},5).to({_off:true},1).wait(50));

	// 图层 5
	this.instance_17 = new lib.s10("synched",0);
	this.instance_17.setTransform(320,539.8,2.714,2.714,0,0,0,118.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.4,536,695.2,1085.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
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


$(function() {


    app.resize();

    //creatjs touch event
    createjs.Touch.enable(stage, true, false);

    //init the canvas animation when it ready.
    init();

    //make screen viewport center
    window.addEventListener('touchmove', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);
    window.addEventListener('dblclick', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);

    //global parts
    $('.option').swipe({
            tap: function(event, target) {
                console.log(target.id);
                //exportRoot.gotoAndPlay("showResult1");
            }
        })
        /*  */
        $("#start").swipe({
            swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                exportRoot.gotoAndPlay("toSence");
                $("#start").hide();
            },
            threshold: 150
        });
      



    //Single Mode
    $("#spot").swipe({
        tap: function(event, target) {
            exportRoot.gotoAndPlay();

            //console.log('test');
        },
        threshold: 150
    });


    $('#swipeHint').swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            exportRoot.gotoAndPlay();
            $('#swipeHint').hide();
        },
        threshold: 200
    })

    //double Mode A
    $("#QRcode").swipe({
        tap: function(event, direction, distance, duration, fingerCount, fingerData) {
            exportRoot.gotoAndPlay();

        }
    });

    //double Mode B
    $("#drawCircle").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

            //console.log('test');
            exportRoot.gotoAndPlay();

        },
        threshold: 50
    });



});

