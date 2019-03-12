
var canvas = document.querySelector('canvas');
const innerWidth = window.innerWidth
const innerWHeight = window.innerHeight
canvas.width = innerWidth
canvas.height = innerWHeight
var c = canvas.getContext('2d')



const model = tf.sequential()

model.add(tf.layers.dense({units: 256, inputShape: [6] } ) )
model.add(tf.layers.dense({units: 256, inputShape: [2] } ) )

model.add(tf.layers.dense({units: 3, inputShape: [2] } ) )


const optimizer = tf.train.adam(0.001)

model.compile({ 
	optimizer: optimizer, 
	loss: 'meanSquaredError'
});

var data = [
	[
		2,
		2,
		2,
		2,
		2,
		2,
	],
	[
		1,
		1,
		1,
		1,
		1,
		1,

	]
]

var ten2 = tf.tensor(data)


const config = {
	'size': 20 ,
	'debug': false,
	'difficult': 1,
}
async function test() {

	kek = await model.fit(ten2)
	
}
	test()


function Piece(x, y, size, is_bomb, nearBombs, iX, iY) {
	this.is_bomb = is_bomb 
	this.size = size
	
	
	
	
	this.x = x
	this.y = y
	this.nearBombs = nearBombs
	this.is_shown = false
	this.iX = iX
	this.iY = iY

	this.is_marked = false

	this.mark = function() {

		
		if(!this.is_shown) {

			if (!this.is_marked) {

				
				if(this.is_bomb ) {
					

				}

				this.is_marked = true

				c.strokeStyle = '#ffffff'
				c.beginPath()
				c.moveTo(this.x, this.y)
				c.lineTo(this.x + this.size/2, this.y + this.size/2)
				c.closePath()
				c.stroke()
			

			} else {
				// this.is_shown = false
				this.is_marked = false
				this.draw()
				
			}
		}
	}

	this.addBomb = function() {
		this.nearBombs = parseInt(this.nearBombs) + 1
	}
	

	this.draw = function () {

		if (config.debug) {
			
			if(this.is_bomb) { 
				c.beginPath()
				c.moveTo(this.x, this.y)
				c.lineTo(this.x + this.size/2 , this.y + this.size/2)
				this.nearBombs = 0
				c.closePath()
			}
			if(this.nearBombs) {
				c.beginPath()
				c.font = '20px calibri'
				c.fillStyle = '#000000'
				c.fillText(this.nearBombs, this.x + this.size/2, this.y + this.size/2)
				c.fillStyle = '#ffffff'
				c.closePath()
			}
		}

		if(this.is_shown && !this.is_marked) {
			c.beginPath()
			c.fillStyle = '#ffffff'
			c.strokeStyle = '#000000'
			c.fillRect(this.x, this.y, this.size/2, this.size/2)
			c.rect(this.x, this.y, this.size/2, this.size/2)
			c.stroke()
			c.closePath()
		} else {
			c.beginPath()
			c.fillStyle = '#000000'
			c.fillRect(this.x, this.y, this.size/2, this.size/2)
			c.stroke()
			c.closePath()

		}
	}
	this.reveal = function() {
		if(this.is_bomb) {
			c.beginPath()

			c.fillStyle = '#000000'
			c.strokeStyle = '#000000'
			c.moveTo(this.x, this.y)
			c.lineTo(this.x + this.size/2 , this.y + this.size/2)
			c.stroke()
			c.closePath()
			this.nearBombs = 0
		}
		if(!this.is_shown && !this.is_bomb) {
			this.check()
		
		}

		this.is_shown = true
		
		// c.stroke()
	}
	this.check = function(){

		if (this.is_bomb && !this.is_marked) {
			c.beginPath()
			c.moveTo(0 , 0)
			c.font = '100px calibri'
			c.fillStyle = '#000000'
			c.strokeStyle = '#000000'
			c.fillRect(300,300, 1000, 300)
			c.fillStyle = '#ffffff'
			c.fillText("you LOSE!!!", 300, 500)
			c.stroke()
			c.closePath()

			createField()
		}

		if(!this.is_shown && !this.is_bomb) {
			this.is_shown = true
	
			if(this.nearBombs > 0) {
				this.draw()
				c.beginPath()
				c.font = '20px calibri'
				c.fillStyle = '#000000'
				c.fillText(this.nearBombs, this.x , this.y + this.size/2)
				c.stroke()
				c.closePath()	
			} 

			//if no bombs it will recursivly check nearby fields
			else if(this.nearBombs === 0) {
				// console.trace(balls[iX+1][iY+1])
				this.draw()
				if(balls[iX-1]){
					if (!balls[iX-1].is_shown) {
						if(balls[iX-1][iY-1]) balls[iX-1][iY-1].reveal()
						if(balls[iX-1][iY]) balls[iX-1][iY].reveal()
						if(balls[iX-1][iY+1]) balls[iX-1][iY+1].reveal()
					}
				}
				if(balls[iX]){
					if (!balls[iX].is_shown) {
						if(balls[iX][iY-1])balls[iX][iY-1].reveal()
						// balls[iX][iY].reveal()
						if(balls[iX][iY+1]) balls[iX][iY+1].reveal()
					}
				}
				if(balls[iX+1]){
					if (!balls[iX+1].is_shown) {
						if(balls[iX+1][iY-1]) balls[iX+1][iY-1].reveal()
						if(balls[iX+1][iY]) balls[iX+1][iY].reveal()
						if(balls[iX+1][iY+1]) balls[iX+1][iY+1].reveal()
					}
				}
			}	
		}
	}
}


// creates a 2d array of Pience object and places bombs


var balls = []
var length = config.size



function createField() {
	firstPress = true
	c = canvas.getContext('2d')
	c.beginPath()
	c.fillStyle = '#000000'
	c.strokeStyle = '#ffffff'
	c.fillRect(0,0,innerWidth,innerHeight)
	c.closePath()

	for (let index = 0; index < length; index++) {
		balls[index] = []
		
		for (let i2 = 0; i2 <= length-1; i2++) {
			// places bommbs
			var bomb = false
			let chance = Math.pow(config.size, 2)
			ranx = Math.floor(Math.random() * config.size)  
			rany = Math.floor(Math.random() * config.size)  
		
			if (i2 == ranx) {
				bomb = true
			}
			

			var width = innerHeight / length *2 
			var x = width / 2 * index
			var y = i2 * width /2
			
			balls[index].push(new Piece(x, y, width, bomb, 0, index, i2))
		}
	}
	
	
	// counts the number of ajacent bombs for every piece
	c.strokeStyle = '#000000'
	for (let i = 0; i < balls.length; i++) {
		for (let n = 0; n < balls.length; n++) {
			if (balls[i][n].is_bomb) {
				if(balls[i-1]) {
					if(balls[i-1][n-1]) {balls[i-1][n-1].addBomb()}
					if(balls[i-1][n]) {balls[i-1][n].addBomb()}
					if(balls[i-1][n+1]) {balls[i-1][n+1].addBomb()}
				}
				if(balls[i]) {
					if(balls[i][n-1]) {balls[i][n-1].addBomb()}
					if(balls[i][n+1]) {balls[i][n+1].addBomb()}
				}
				if(balls[i+1]) {
					if(balls[i+1][n-1]) {balls[i+1][n-1].addBomb()}
					if(balls[i+1][n]) {balls[i+1][n].addBomb()}
					if(balls[i+1][n+1]) {balls[i+1][n+1].addBomb()}
				}
			}
		}
	}
}


function clicky(x, y) {
	for (let i = 0; i < balls.length; i++) {
		ballline = balls[i]


		for (let n = 0; n < balls.length; n++) {
			ball = ballline[n]
			bx = ball.x
			by = ball.y

			//checks x position of the mouseklick
			if(bx <= x-6 && bx + ball.size/2 > x){	
				//checks y of mouseclick
				if(by <= y-6 && by + ball.size/2 > y){

					// if you land on a bomb on first press gets reset
					if((ball.nearBombs > 0 || ball.is_bomb) && firstPress) {

						
						createField()
						firstPress = true
						console.count('board reset');
						
						clicky(x, y)
					} else{
						firstPress = false
						ball.check()
					}
					
				}
			}
		}
	}
}

function rightClick(x, y) {
	
	for (let i = 0; i < balls.length; i++) {
		ballline = balls[i]


		for (let n = 0; n < balls.length; n++) {
			ball = ballline[n]
			bx = ball.x
			by = ball.y

			//checks x position of the mouseklick
			if(bx-6 <= x && bx + ball.size/2-6 > x){	
				//checks y of mouseclick
				if(by-6 <= y && by + ball.size/2-6 > y){

					ball.mark()
					
				}
			}
		}
	}
}

createField()



for (let i = 0; i < balls.length; i++) {
	const el = balls[i];
	for (let n = 0; n < el.length; n++) {
		el[n].draw()
	}
}




// onclick handler
var firstPress = true
document.getElementById('main').onclick = el => clicky(el.x, el.y)
// document.getElementById('main').onclick = el => clicky(el.x, el.y)
window.oncontextmenu = function(e)
{
	rightClick(e.x, e.y)
	e.preventDefault()
    return false;     // cancel default menu
}
