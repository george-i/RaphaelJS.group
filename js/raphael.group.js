// Raphael JS SVG Group 0.1
// Copyright (c) George I. 2011-2012
(function() {
	"use strict";
	Raphael.fn.group = function(f, g) {
		if(Raphael.svg == true) {
			this.svg = "http://www.w3.org/2000/svg";
			this.dv = document.getElementById(f);
			this.defs = this.dv.getElementsByTagName("defs")[0];
			var defs = this.defs;
			var svgHead = this.svg;
			this.svgcanv = this.dv.getElementsByTagName("svg")[0];
			this.svgcanv.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
			var countGroups = this.svgcanv.getElementsByTagName("g").length;
			var createUUID=function(b,a){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(b,a).toUpperCase()}}(/[xy]/g,function(b){var a=16*Math.random()|0;return("x"==b?a:a&3|8).toString(16)});		
			if(countGroups == 0) {
				this.masterGroup = document.createElementNS(this.svg, "g");
				this.svgcanv.appendChild(this.masterGroup)
			}else {
				this.masterGroup = this.svgcanv.getElementsByTagName("g")[0]
			}		
			this.group = document.createElementNS(this.svg, "g");
			for(i = 0;i < g.length;i++) {
				this.group.appendChild(g[i].node)
			}
			this.masterGroup.appendChild(this.group);
			this.group.set = [];
			var _mg = this.masterGroup;
			this.group.getMaster = function() {
				return _mg
			};
			this.group.remove = function() {
				this.parentNode.removeChild(this)
			};
			var thisTransform = {translate:{x:0, y:0}, scale:{x:1, y:1}, rotate:{x:0, y:0, z:0}};
			var transformString = function() {
				return"translate(" + thisTransform.translate.x + "," + thisTransform.translate.y + ") scale(" + thisTransform.scale.x + "," + thisTransform.scale.y + ") rotate(" + thisTransform.rotate.x + "," + thisTransform.rotate.y + "," + thisTransform.rotate.z + ")"
			};
			this.group.translate = function(c, a) {
				thisTransform.translate.x = c;
				thisTransform.translate.y = a;
				this.setAttribute("transform", transformString())
			};
			this.group.rotate = function(c, a, e) {
				thisTransform.rotate.x = c;
				thisTransform.rotate.y = a;
				thisTransform.rotate.z = e;
				this.setAttribute("transform", transformString())
			};
			this.group.scale = function(c, a) {
				thisTransform.scale.x = c;
				thisTransform.scale.y = a;
				this.setAttribute("transform", transformString())
			};
			this.group.push = function() {
				for(i = 0;i < arguments.length;i++) {
					this.appendChild(arguments[i].node)
				}
			};
			this.group.addElement = function() {
				for(i = 0;i < arguments.length;i++) {
					this.appendChild(arguments[i])
				}
			};
			this.group.getAttr = function(c) {
				return thisTransform[c]
			};
			this.group.copy = function(el) {
				this.copy = el.node.cloneNode(true);
				this.appendChild(this.copy)
			};
			this.group.toFront = function(){
				this.getMaster().appendChild(this);
			};
			this.group.clipPath = function(c){						
				var cp = document.createElementNS(svgHead, "clipPath");
				var cpID = createUUID();
				cp.setAttribute("id",cpID);
				cp.appendChild(c.node);
				defs.appendChild(cp);
				this.setAttribute("clip-path","url(#"+cpID+")")
			};

			this.group.animate = function(){
				var el = this;
				var args = arguments;
				var attrToAnimate = args[0];			
				var duration = args[1];
				var callback = args[2];
				var timerx;
				if(typeof(timerx) !== 'undefined'){
					clearInterval(timerx);
				}			
				var newPosx = attrToAnimate['x'];
				var original = el.getAttr('translate').x;
				var stepLen;
				timerx = setInterval(function(){if(original>newPosx){stepLen = (original - newPosx)/10;moveLeft()}else{stepLen = (newPosx - original)/10;moveRight()}},10);
				var currpos = original;						
				function moveLeft(){
					if(el.getAttr('translate').x-stepLen>newPosx){
						el.translate(el.getAttr('translate').x-stepLen,0);					
					}else{
						el.translate(newPosx,0);
						clearInterval(timerx);
						callback()
					}			
				};
				function moveRight(){
					if(el.getAttr('translate').x+stepLen<newPosx){
						el.translate(el.getAttr('translate').x+stepLen,0);					
					}else{
						el.translate(newPosx,0);
						clearInterval(timerx);
						callback()
					}			
				}			
			};		
			return this.group
		}
	};
})();