function object(x, y, width, height, color, collide) {
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

	this.detect = function (obj) {
		// console.log(obj)


		// for (let n in objects) {
		// 	var temp = (checkObj) ? checkObj: n
		// 	var el = objects[temp]
		// 	if (el == this) {


		// 	} else {



		// 		var extra = (this.x > el.x && this.x+ this.width < el.x + el.width)? Math.abs(this.width - Math.abs(canvasWidth - this.x -this.width - (canvasWidth - el.x))): 0
		// 		var ss = (this.x + this.width > el.width + el.x) ? Math.abs(canvasWidth - el.x - el.width - (canvasWidth - this.x)): Math.abs(canvasWidth - this.x -this.width - (canvasWidth - el.x )  ) - extra
		// 		var drawX = (el.x> this.x) ? el.x : this.x


		// Y axis checker if it overlaps



		// 		var eytra = (this.y > el.y && this.y+ this.height < el.y + el.height)? Math.abs(this.height - Math.abs(canvasHeight - this.y -this.height - (canvasHeight - el.y))): 0
		// 		var ww = (this.y + this.height > el.height + el.y) ? Math.abs(canvasHeight - el.y - el.height - (canvasHeight - this.y)): Math.abs(canvasHeight - this.y -this.height - (canvasHeight - el.y )  ) - eytra
		// 		var drawy = (el.y> this.y) ? el.y : this.y



		// Left side collition
		var left = this.x + this.width < el.x
		var right = this.x > el.x + el.width

		var top = this.y + this.width < el.y
		var bottom = this.y > el.y + el.width 

 
		var topCondition = top 
		// var topCondition = false
		var leftCondition = left
		var rightCondition = right
		var bottomCondition = bottom

		var returnObj = {
			l: leftCondition,
			r: rightCondition,
			t: topCondition,
			b: bottomCondition,
		}

		return returnObj

		// 		// var drawX = el.x
		// 		// console.log((conditionx1 || conditionx2) && (conditiony1 || conditiony2))
		// 		if ((conditionx1 || conditionx2) && (conditiony1 || conditiony2))  {

		// 			c.beginPath()
		// 			c.fillStyle = '#00ff00'
		// 			c.strokeStyle = '#00ff00'
		// 			c.rect(drawX, drawy, ss, ww)
		// 			c.fill()
		// 			c.stroke()
		// 			c.closePath()
		// 			this.color = '#ff0000'
		// 			return true
		// 		} else {
		// 			this.color = this.OGcolor
		// 		}

		// 	}
		// }


	}

	this.move = function (x, y) {
		this.x += x
		this.y += y
	}

	this.move = function () {
		// adds the velocity to the position
		this.x += this.Vx
		this.y += this.Vy


		// reduced velocity by 10%
		this.Vx *= 0.925
		this.Vy *= 0.9

		// this.draw()
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
			} else if (ySide) {
				this.Vy *= -1

				this.is_touching = true

				// this.y += this.Vy/10
			} else {
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
