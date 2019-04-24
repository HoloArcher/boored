// returns min max random integer

// will be expanded to do floats and stuff like that
function ran(min, max) {
	return Math.floor(Math.random() * max) + min
}





function kek(x, y, w, h) {
	c.beginPath()
	c.fillStyle = '#00ff00'
	c.strokeStyle = '#00ff00'
	c.rect(x, y, w, h)
	c.fill()
	c.stroke()
	c.closePath()
}

function sqr(x, y, w, h) {
	c.beginPath()
	// console.log('drawing')
	// c.fillStyle = '#00ff00'
	c.strokeStyle = '#000000'
	c.rect(x, y, w, h)

	c.stroke()
	c.closePath()
}