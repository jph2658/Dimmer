var Scene = function(rows, columns) {
	var canvas = document.getElementById('mainCanvas');;
	var rows = rows;
	var columns = columns;

	if(canvas.getContext) {
		canvas.addEventListener('click', function(event) {
			console.log(event.offsetX + "/" + event.offsetY);
		});
		this.createBoard(rows, columns);
	}
}

Scene.prototype.createBoard = function(rows, columns) {	
	var interval = 55;
	
	document.getElementById('mainCanvas').setAttribute("height", (rows * interval) - 5);
    document.getElementById('mainCanvas').setAttribute("width", (columns * interval) - 5);
	
	var xMax = rows * interval;
	var yMax = columns * interval;
	var grid = new Array(rows * columns)
	var counter = 0;
	
	for (xIndex = 0; xIndex < xMax; xIndex += interval) {
        for (yIndex = 0; yIndex < yMax; yIndex += interval) {
            grid[counter] = new Tile(xIndex, yIndex, false);
			counter++;
        }
    }
}

var Tile = function(xIndex, yIndex, state) {
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

Tile.prototype.toggleState = function() {
	console.log("toggleState called.");
	if(this.state) {
		
	} else {
	
	}
}

function init() {
	var gameStage = new Scene(3, 3);
}