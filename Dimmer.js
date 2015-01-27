// Dimmer 'namespace'
var DIMMER = DIMMER || {};

DIMMER.stage = {
	scenes: [
	
	],
	enterScene: function() { 
		
	},
	createScene: function() {
	
	}
}

DIMMER.scene = {
	objects: [
		
	],
	initCanvas: function() { //Is there a way to implement this method to set a variable of an object directly to a statement? Or does it have to be done with a function like I have it? Is the method implementation better?
	this.ctx = document.getElementById('mainCanvas').getContext('2d');
	},
	add: function(obj) {
		objects[0] = Object.create(DIMMER.gameboard);
	},
	update: function() { //TODO: Iterates through objects list and causes the draw method to function.
		this.objects[0].draw(this.ctx, 0, 0, 50, 50, 15, "9C9C9C");
	}
}


DIMMER.gameboard = {
	//Does it make sense to have this hierarchy? If i'm going to do anything on each tile I'll have to call from the scene to the objects array and then to the gameboard object to its boardObjects array. Is there an more simple way to implement this?
	boardObjects = [
		
	],
	draw: function(grid) = { //How do I get the number of tiles I want to implement a 3x3 board or higher to the actual gameboard object?
		
	}
}
DIMMER.tile = {
	state: false,
	draw: function(canvas, x, y, width, height, radius, color) {
		canvas.fillStyle = color;
		canvas.beginPath();
		canvas.moveTo(x, y+radius);
		canvas.lineTo(x, y+height-radius);
		canvas.quadraticCurveTo(x, y+height, x+radius, y+height);
		canvas.lineTo(x+width-radius, y+height);
		canvas.quadraticCurveTo(x+width, y+height, x+width, y+height-radius);
		canvas.lineTo(x+width, y+radius);
		canvas.quadraticCurveTo(x+width, y, x+width-radius, y);
		canvas.lineTo(x+radius, y);
		canvas.quadraticCurveTo(x, y, x, y+radius);
		canvas.fill();
	},
	toggle: function() {
	
	}
}
function init() {
	var mainStage = Object.create(DIMMER.scene);
	mainStage.add(Object.create(DIMMER.tile));
	mainStage.initCanvas();
	mainStage.update();
	debugger;
}

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	}
}