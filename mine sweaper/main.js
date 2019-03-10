var canvas = document.querySelector('canvas');

const innerWidth = window.innerWidth
const innerWHeight = window.innerHeight
canvas.width = innerWidth
canvas.height = innerWHeight

var c = canvas.getContext('2d')

const config = {
	'size': 20,
}


function Piece(x, y, size, is_bomb, nearBombs) {
	this.x = x
	this.y = y
	this.size = size
	this.is_bomb = is_bomb 
	this.nearBombs = nearBombs

	this.addBomb = function() {
		this.nearBombs = parseInt(this.nearBombs) + 1
		
		
		// this.draw()
	}
	

	this.draw = function () {
		// c.clearRect(0, 0, innerWidth, innerHeight)

		if(this.is_bomb) { 
			c.moveTo(this.x, this.y)
			c.lineTo(this.x + this.size/2 , this.y + this.size/2)

			this.nearBombs = 0
		}
		if(this.nearBombs) {
			c.font = '20px calibri'
			c.fillText(this.nearBombs, this.x, this.y+ this.size/2)
			// console.log(this.nearBombs);
			
		}

		// c.moveTo(this.x, this.y)
		c.rect(this.x, this.y, this.size/2, this.size/2)
		// console.log(this.x,this.y);
		

		c.stroke()
	}
}


// creates a 2d array of Pience object
var balls = []
var length = config.size
var count = Math.pow(config.size,2)
for (let index = 0; index < length; index++) {

	balls[index] = []

	for (let i2 = 0; i2 <= length-1; i2++) {
		let bomb = false
		var chance = Math.floor(Math.random() * count) 
		if(chance<60){
			bomb = true
		}
		

		
		const el2 = balls[i2];
		var width = innerHeight / length 

		var x = width / 2 * index
		var y = i2 * width / 2

		balls[index].push(new Piece(x, y, width, bomb, 0))
	}

}








for (let i = 0; i < balls.length; i++) {
	const el = balls[i];

	for (let n = 0; n < balls.length; n++) {
		// console.log(n);


		if (balls[i][n].is_bomb) {
		
			if(balls[i-1]) {
				if(balls[i-1][n-1]) {balls[i-1][n-1].addBomb()}
				if(balls[i-1][n]) {balls[i-1][n].addBomb()}
				if(balls[i-1][n+1]) {balls[i-1][n+1].addBomb()}
			}
			if(balls[i]) {
				if(balls[i][n-1]) {balls[i][n-1].addBomb()}
				// if(balls[i][n]) {balls[i][n].addBomb()}
				if(balls[i][n+1]) {balls[i][n+1].addBomb()}
			}
			if(balls[i+1]) {
				if(balls[i+1][n-1]) {balls[i+1][n-1].addBomb()}
				if(balls[i+1][n]) {balls[i+1][n].addBomb()}
				if(balls[i+1][n+1]) {balls[i+1][n+1].addBomb()}
			}

			

			
		}
		
		// balls[i][n].draw()
		

	}
}





for (let i = 0; i < balls.length; i++) {
	const el = balls[i];

	for (let n = 0; n < el.length; n++) {
 	
		 el[n].draw()

	}
}