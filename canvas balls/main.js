var canvas = document.querySelector('canvas');

const innerWidth = window.innerWidth
const innerWHeight = window.innerHeight
canvas.width = innerWidth
canvas.height = innerWHeight

var c = canvas.getContext('2d')

function Ball(x, y, sx, sy, radius) {
	this.x = x;
	this.y = y;
	this.color = '#ffffff';
	this.sx = sx;
	this.sy = sy;
	this.col = '#ffffff'

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

		// this.draw()
	}
	this.connect = function (ball, col) {
		c.beginPath()
		c.moveTo(this.x, this.y)
		c.lineTo(ball.x, ball.y)
		c.strokeStyle = '#ffffff'
		c.stroke()

		// this.draw()

	}
	this.col = function(col) {
		this.color = col
	}
	this.set = function(x,y){
		this.x = x
		this.y = y
		// this.draw()
	}

}


function ran(min, max) {
	return Math.floor(Math.random() * max) + min;
}

var balls = []
var kek = 0
var length = 1000;
var radius = ran(10, 30)
var x = () => {return ran(radius, innerWidth - radius) } 
var y = () => {return ran(radius, innerHeight - radius)}
var sx = () => {return ran(-15, 30)/2}
var sy = () => {return ran(-15, 30)/2}
var sx1	 = () => {return ran(-2, 4)/3}
var sy1 = () => {return ran(-2, 4)/3}

for (let index = 0; index < length; index++) {
	var temp = new Ball(x(), y(), sx(), sy(), 2)
	balls.push(temp)
}

var dist = 10

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
				if (Math.abs(el.x - el2.x) < dist + 150 && Math.abs(el.y - el2.y) < dist + 150 ) {

					el2.connect(el, '#ffffff30')
					// af--

				}

			}
			// if (Math.abs(el.x - el2.x) < dist + 400 && Math.abs(el.y - el2.y) < dist + 500 ) {

			// el2.connect(el, '#ffffff30')
			// // af--

			// }

		})
		

	})



}


function g(x) {
	return x/ Math.abs(x)

}
var cx;
var cy;

function asdf(e) {
	cx = e.clientX
	cy = e.clientY
}

document.body.addEventListener('mousemove', asdf)

var eek = 1

var xd = new Ball(1, innerHeight/2, 0, 0, 2)
function animate() {
	document.body.event
	// requestAnimationFrame(animate)
	c.clearRect(0, 0, innerWidth, innerHeight)

	for(let n = 0; n < balls.length; n+=1) {	
		const el = balls[n]

		// el.set(innerWidth/balls.length * n , innerHeight/2 )
		
		// el.set(innerWidth/balls.length * n, innerHeight )
		// el.set(innerWidth/balls.length * n, innerHeight )
		// el.update()

		
		// connect all balls in line

	

		// el.connect(xd)
		// xd.update()

		var sizy = 500

		var k = sizy/4
		// if(balls[n+1]) {
		// 	el.connect(balls[n+1])
		// } 

		var x = n

		var fun = Math.pow(-1, x ) * Math.sqrt( (k*k) +(-1 * Math.pow(g(x)*x - g(k)*k, 2) )) 

		// el.set(innerWidth/balls.length * n, innerHeight/3 * Math.sin(n/length/1000 * eek) + innerHeight/2 )
		el.set(sizy/balls.length * n*2, k +100+ fun )
		// el.set(innerWidth/balls.length * n, innerHeight/3 * Math.sin(n/length/100 * eek) + innerHeight/2 )

		// console.log(Math.pow(-1, n ) * Math.sqrt( (k*k) +(-1 * Math.pow(g(n) - g(k), 2) )) )
		// console.log();
		
		// console.log(g);
		
		
		// eek+= Math.PI


		el.draw()
	}


}



animate()