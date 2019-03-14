var canvas = document.querySelector('canvas');
const innerWidth = window.innerWidth
const innerWHeight = window.innerHeight
canvas.width = innerWidth
canvas.height = innerWHeight

var c = canvas.getContext('2d')

var length = 6
var field = []

function bit(x, y, ix, iy) {
	this.x = x
	this.y = y
	this.index_x = ix
	this.index_y = iy
	this.is_snake = false


	this.draw = function () {
		if ( this.is_snake == true) {
			c.fillStyle = '#000000'
			c.fillRect(this.x, this.y, innerHeight / length/2, innerHeight / length/2)
			c.stroke()
			c.closePath()
		} else {
			c.strokeStyle = '#000000'
			c.rect(this.x, this.y, innerHeight / length/2, innerHeight / length/2)
			c.stroke()
			c.closePath()
		}
	}

	this.move = {

	}
}

function createField() {
	for (let i = 0; i < length; i++) {
		var temp = []
		for (let i2 = 0; i2 < length; i2++) {
			let x = innerHeight/length*i/2
			let y = innerHeight/length*i2/2

			temp.push(new bit(x, y, i, i2,) ) 
		}
		field.push(temp)
	}
}




function animate() {
	requestAnimationFrame(animate)

}

// animate()
createField()

field.forEach(el => {
	// console.log(el)
	el.forEach(el2 => {

		if (el2.index_x === 1 && el2.index_y === 1) {
			el2.is_snake = true
		}

		el2.draw()

	})
})



