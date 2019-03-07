var canvas = document.querySelector('canvas');

const innerWidth = document.body.clientWidth
const innerWHeight = document.body.clientHeight

canvas.width = innerWidth
canvas.height = innerWHeight




var c = canvas.getContext("2d")




function Ball(x, y, sx, sy, radius) {
	this.x = x;
	this.y = y;
	this.color = '#ffffff';
	this.sx = sx;
	this.sy = sy;

	this.radius = radius
	this.draw = function () {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = this.color
		c.fill()

		c.strokeStyle = this.color;
		c.stroke();
	}
	this.update = function (xspeed, yspeed) {


		if (innerWidth <= this.x + this.radius || (this.x - this.radius) <= 0) {
			this.sx *= -1
		}
		if (innerHeight <= this.y + this.radius || (this.y - this.radius) <= 0) {
			this.sy *= -1
		}
		this.x += this.sx
		this.y += this.sy



		this.draw()
	}
	this.connect = function (ball, col) {
		c.beginPath()
		c.moveTo(this.x, this.y)
		c.lineTo(ball.x, ball.y)
		c.strokeStyle = col
		c.stroke()

		this.draw()

	}

}


function ran(min, max) {
	return Math.floor(Math.random() * max) + min;
}


var balls = []
var kek = 0
var length = 100;
var tek = (innerHeight / 2 - 2)

var mid = (innerWidth / length)

var radius = ran(10, 30)
var x = () => {return ran(radius, innerWidth - radius) } 
var y = () => {return ran(radius, innerHeight - radius)}
var sx = () => {return ran(-15, 30)/2}
var sy = () => {return ran(-15, 30)/2}
var sx1	 = () => {return ran(-2, 4)/3}
var sy1 = () => {return ran(-2, 4)/3}



// for (let index = 0; index < length; index++) { 
// 	var fff = new Ball(x(), y(), sx1(), sy(), 5)
// 	balls.push(fff)
	
// }

for (let index = 0; index < length; index++) { 
	var sss = new Ball(x(), y(), sx1(), sy1(), 2)
	balls.push(sss)
	
}

for (let index = 0; index < length; index++) {
	var temp = new Ball(x(), y(), sx(), sy(), 1)
	balls.push(temp)
}




var dist = 50
// var af = 4

// var temp = new Ball(8, 9, 0, 0, 0)

function dudu(x, y) {
	temp.x = x
	temp.y = y

	c.clearRect(0, 0, innerWidth, innerHeight)



	balls.forEach(el => {
		af = 2


		balls.forEach(el2 => {

			if (Math.abs(el.x - x) < dist && Math.abs(el.y - y) < dist) {

				if (Math.abs(el.x - el2.x) < dist && Math.abs(el.y - el2.y) < dist ** af > 1) {

					el2.connect(el, '#fffffff')
					af--

				}
				else if (Math.abs(el.x - el2.x) < dist + 150 && Math.abs(el.y - el2.y) < dist + 150 ) {

					el2.connect(el, '#ffffff30')
					af--

				}

			}

		})
		

	})



}


var cx;
var cy;

function asdf(e) {
	// dudu(e.clientX, e.clientY)
	cx = e.clientX
	cy = e.clientY
}

document.body.addEventListener('mousemove', asdf)


function animate() {
	document.body.event
	requestAnimationFrame(animate)


	c.clearRect(0, 0, innerWidth, innerHeight)

	// balls.forEach(el => {

		// el.update()

	// })

	// for connecting every ball to ajecent if lcose engough

	balls.forEach(el => {
		
 
		el.update()
	// dudu(cx, cy)



		balls.forEach(el2 => {


			if(Math.abs(el.x - el2.x) < dist  && Math.abs(el.y - el2.y) < dist ) {			

				el.connect(el2, '#ffffff')
			}

			else if(Math.abs(el.x - el2.x) < dist*2  && Math.abs(el.y - el2.y) < dist*2 ) {			

				el.connect(el2, '#ffffff20')
			}

		})

 


	});

}



animate()