
var canvas = document.querySelector('canvas');
const innerWidth = document.getElementById('main').width
const innerWHeight = document.getElementById('main').width
canvas.width = innerWidth
canvas.height = innerWHeight
var c = canvas.getContext('2d')


var Piece = function(x, y, is_bomb, size,is_shown) {
	this.x = x
	this.y = y
	this.size = size
	this.is_bomb = is_bomb
	this.is_shown = is_shown
	this.is_marked = false

	this.draw = function() {
		c.beginPath()
		c.strokeStyle = '#ffffff'
		c.fillStyle = '#000000'
		c.moveTo(this.x,this.y)
		c.fillRect(this.x, this.y, this.size, this.size)
		c.rect(this.x, this.y, this.size, this.size)
		c.stroke()
		c.closePath()
	}
	
	this.mark = function() {
		if( !this.is_marked) {
			c.beginPath()
			c.strokeStyle = '#ffffff'
			c.moveTo(this.x,this.y)
			c.lineTo(this.x + this.size, this.y + this.size)
			c.stroke()
			c.closePath()
		}
	}
}


const config = {
	length: 10,
	debug: true,
	lineSpacing: 1
}
var field = []



function createField() {

	c.beginPath()
	c.clearRect(0,0,innerWidth,innerHeight)
	c.closePath()
	
	
	for (let i = 0; i < config.length; i++) {
		var is_bomb = false
		const el = [i];
		var len = innerWidth/config.length
		for (let i2 = 0; i2 < config.length; i2++) {
			var len2 = innerHeight/config.length

			if((Math.floor(Math.random() * 10) == 1) ) {
				is_bomb = true
			}
			var is_shown = false
			if(config.debug) {is_shown = true}
				
				field.push(new Piece(len*i, len*i2, is_bomb, len - config.lineSpacing, is_shown))
		}
	}


	field.forEach(el => {
		el.draw()
	});

}

function leftClick(x, y) {
	console.log('kdk');
	
	field.forEach(el => {
		// to center the field you have to add the difference between the left and he field
		var xdiff =(window.innerWidth + (field.length * config.lineSpacing)- canvas.width)/2
		var ydiff = (window.innerHeight + (field.length * config.lineSpacing) - canvas.height)/4
		console.log(xdiff);

		// locks for the field you are pressing on my using the x and y of the object and your mouse x, y position
		if((el['x'] < x - xdiff  && el['x'] + el['size'] > x - xdiff ) && (el['y'] < y - ydiff  && el['y'] + el['size'] > y -ydiff )) {

			
			el.mark()
			

		}
	});



}



document.getElementById('main').onclick = el => leftClick(el.clientX, el.clientY)

createField()