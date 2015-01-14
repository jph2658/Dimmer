var Stage = function () {
	var stageSet = [];
}

Stage.prototype.changeScene = function(set) {

}

var Scene = function () {
    var ctx = document.getElementById('mainCanvas').getContext('2d');
	
	var sceneObjects = [
		new Tile(0, 0, false)
	];
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