
var canvas = document.querySelector('canvas');
const canvasHtml = document.getElementById('main')
const canvasWidth = canvasHtml.clientWidth
const canvasHeight = canvasHtml.clientHeight

const c = canvas.getContext('2d')
canvas.width = canvasWidth
canvas.height = canvasHeight
const g = 3


function kek(x,y, w, h) {
	c.beginPath()
	c.fillStyle = '#00ff00'
	c.strokeStyle = '#00ff00'
	c.rect(x, y, w, h)
	c.fill()
	c.stroke()
	c.closePath()
}


var objects = [

]


var ballarray = []

function ran(min, max) {
	return Math.floor(Math.random() * max) + min
}


function square(x, y, width, height, color) {

	this.x = x
	this.y = y
	this.Vy = 0
	this.Vx = 0
	this.height = height
	this.width = width
	this.color = color
	this.OGcolor = color

	this.draw = function () {
		c.beginPath()
		c.fillStyle = this.color
		c.strokeStyle = this.color
		c.rect(this.x, this.y, this.width, this.height)
		c.fill()
		c.stroke()
		c.closePath()

	}

	this.move = function (x, y) {
		this.x += x
		this.y += y




	}



	this.detection = function () {
		for (let n in objects) {
			var el = objects[n]
			if (el == this) {

			} else {

				var condition = el.x < this.x + this.width && !(el.x < this.x)
				var condition2 = this.x < (el.x + el.width) && !(this.x < el.x)

				// var condition2 = el.y < this.y + this.height && !(el.y < this.y)
				// var condition2 = el.y < this.y + this.height && !(el.y < this.y)
				// var condition2 = canvasWidth - el.width

				var ss = (this.width - Math.abs(canvasWidth - el.x - (canvasWidth - this.x)) < (el.width - Math.abs(canvasWidth - this.x - (canvasWidth - el.x))) ) 
				? this.width - Math.abs(canvasWidth - el.x -  cmd
					(canvasWidth - this.x)) 
				: el.width- Math.abs(canvasWidth - this.x - (canvasWidth - el.x))

		
				var drawX = (el.x> this.x) ? el.x : this.x

				if (condition || condition2) {
					
					c.beginPath()
					c.fillStyle = '#00ff00'
					c.strokeStyle = '#00ff00'

					c.rect(drawX, 250, ss, 14)

					c.fill()
					c.stroke()
					c.closePath()
					this.color = '#ff0000'
				} else {
					this.color = this.OGcolor
				}
			}
		}

	}

	this.move = function() {

		this.x += this.Vx
		this.y += this.Vy

		this.Vx*= 0.9
		this.Vy *= 0.9


		this.draw()
	}


}

function ball(x, y, Vx, Vy, width, ttl) {
	this.x = x
	this.y = y
	this.Vx = Vx
	this.Vy = Vy
	this.is_touching = false
	this.color = '#000000'

	this.ttl = ttl
	this.radius = width
	this.balls = []

	this.do = function () {
		if (this.ttl > 1) {
			this.x += this.Vx
			this.y += this.Vy


			var xSide = canvasWidth <= this.x + (this.radius * 2) || (this.x - this.radius * 2 + 10) <= 0
			var ySide = canvasHeight <= this.y + (this.radius * 2) || (this.y - this.radius * 2 + 10) <= 0



			if (xSide) {
				this.is_touching = true
				this.Vx *= -1
				// this.x += this.Vx/10
			}
			else if (ySide) {
				this.Vy *= -1

				this.is_touching = true

				// this.y += this.Vy/10
			}
			else {
				this.is_touching = false
			}



			// drag
			// for decceleration
			// this.Vx -= this.Vx/20
			// this.Vy -= this.Vy/20
			this.detection()
			this.draw()
		}

	}

	this.draw = function () {
		c.beginPath()
		c.fillStyle = this.color
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
		c.fill()
		c.stroke()
		c.closePath()

	}


	this.detection = function () {
		for (let n in objects) {
			var el = objects[n]

			console.log(typeof el)
		}

	}

}


// var testball = new ball(400, 100, 12, 3, 30, 2)
// objects.push(testball)

var obsticle = new square(300, 300, 220, 12, '#000000')
objects.push(obsticle)

var obj = new square(200, 260, 122, 10, '#ff00ff')
objects.push(obj)





var num = 1
var keydown = false
var key = []

var controls = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false,
}

var index = num

function animate() {
	requestAnimationFrame(animate)

	if (index == 0) {
		c.clearRect(0, 0, innerWidth, innerHeight)
		// testball.do()
		index = num


		for (n in objects) {
			var el = objects[n]
			// el.draw()
			el.move()
			el.detection()
		}

		controlHandler(controls)

	}
	index--
}


// Event handler for arrwo keys
document.addEventListener('keydown', el => { controls[el.key] = true; keydown = true; })
document.addEventListener('keyup', el => { controls[el.key] = false })

var controlSpeed = 0.1
var moveObj = obj
function controlHandler() {

	for (let n in controls) {
		key = n
		// console.log(controls)

		if (controls['ArrowDown']) {

			obj.Vy += controlSpeed;
		}

		if (controls['ArrowUp']) {

			obj.Vy -= controlSpeed;
		}

		if (controls['ArrowLeft']) {

			obj.Vx -= controlSpeed
		}

		if (controls['ArrowRight']) {

			obj.Vx += controlSpeed
		}


	}

}


animate()
