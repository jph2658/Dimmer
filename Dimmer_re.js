//Stage is responsible for handling scenes
//and all actions performed on them.
var Stage = function () {
	//Array to hold each Scene as they do not require unique identifiers.
	//This will always initialize to an empty scene.
	var stageSet = [
		new Scene()
		];
	var sceneLoaded = 0;
}

//
Stage.prototype.changeScene = function(set, currentScene) {

}

var Scene = function () {
	var sceneObjects = [];
	this.init();
}

Scene.prototype.init = function (objects) {
	//ctx will be a permanent 'object' as the canvas will always be
	//present to draw to.
	this.ctx = document.getElementById('mainCanvas').getContext('2d');
}

Scene.prototype.tearDown = function () {

}

var Tile = function (ctx, x, y, state) {
	this.state = state;
	
	var ctx = document.getElementById('mainCanvas').getContext('2d');
	this.createGameTile(ctx, xIndex, yIndex, 50, 50, 15, "9C9C9C");
}

Tile.prototype.createGameTile = function(ctx, x, y, width, height, radius, color) {
	
	ctx.fillStyle = color;
	
	ctx.beginPath();
	ctx.moveTo(x, y+radius);
	ctx.lineTo(x, y+height-radius);
	ctx.quadraticCurveTo(x, y+height, x+radius, y+height);
	ctx.lineTo(x+width-radius, y+height);
	ctx.quadraticCurveTo(x+width, y+height, x+width, y+height-radius);
	ctx.lineTo(x+width, y+radius);
	ctx.quadraticCurveTo(x+width, y, x+width-radius, y);
	ctx.lineTo(x+radius, y);
	ctx.quadraticCurveTo(x, y, x, y+radius);
	ctx.fill();
}

function init() {
	var mainStage = new Stage();
};