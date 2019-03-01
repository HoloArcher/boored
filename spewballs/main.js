var windowWidth = document.getElementById('kek').clientWidth
var windowHeight = document.getElementById('kek').clientHeight


function ran(max, min) {return Math.floor(Math.random() * max) + min}

function range(max) {var ar = [];var index = 0;while(index < max) {ar.push(index); index++ }return ar}

var balls = {
	ballNumber: 0,// Number of balls in the array
	balls: [], // Array with ball objects 
	fatherEl: 'kek', // Element with the elements in them
	addball(xpos, ypos, width, height, xspeed, yspeed, col) {// Adds a ball to an array to the parent element and and to the number of balls
		var ball = {
			id: "ball" + this.ballNumber,
			width: 1 || width,
			height: 1 || height,
			xspeed: 0 ||xspeed,
			yspeed: 0 || yspeed,
			xpos: 0 || xpos,
			ypos: 0 || ypos,
			col: 0 || col,
			// sets the ball position 
			ballPosition() {
				var ball = document.getElementById(this.id)
				ball.style.left = this.xpos + 'px'
				ball.style.top = this.ypos + 'px'
			},

			moveBall(pX, pY) {
				
				this.ypos =  pY
				this.xpos = pX

				this.ballPosition()
			}

		}

		var newball = document.createElement('div')
		newball.setAttribute('id', ball.id)
		newball.setAttribute('class', 'ball')	
		newball.style.col = "#" + this.col	
		document.getElementById('kek').appendChild(newball)

		// pushes ball into array 
		this.balls.push(ball)
		// adds one to the number of balls in the array index
		this.ballNumber += 1
		
		this.__drawBall__()
	},
	__drawBall__() {
		for (let n in this.balls) {
			let el = this.balls[n]
			el.ballPosition()
		}
	},

}


var length = 100
for (n in range(length)){
	balls.addball(300, 500)
}



const g = 8
function kek(ball) {
	ball.ypos -= g
}


setInterval(() => {

	for (n in balls.balls) {
		console.log(balls.balls[n]);
		
		kek(balls.balls[n])
	}

},100);

	