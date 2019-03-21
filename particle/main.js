//holds an array of all objects
var objects = []



objects.push(new square(ran(0,500), ran(0,500), ran(10,300), ran(10,300), '#ff00ff'))

var obj = new square(200, 260, 50, 100, '#ff00ff')
objects.push(obj)



var tickrate = 1	

// for recuding the speed of the program
var index = tickrate
function animate() {
	requestAnimationFrame(animate)

	//clears the field to create animation
	c.clearRect(0, 0, innerWidth, innerHeight) 
		c.fillStyle = '#eeeeee'
		c.fillRect(0,0, canvasWidth, canvasHeight)
		
		
		// hitting 
		if (Math.floor(obj.y+ obj.height+ 10) >= canvasHeight) {
			obj.y = canvasHeight - obj.height - 10
			controls.jumping = 12
		}
		
		
		for (n in objects) {
			var el = objects[n]
			
			el.move()
		}
		
		// looks for hit detection on obj
		obj.detection()
		
		//gravity
		
		obj.Vy += 1
		
		
		
		if (index == 0) {
			index = tickrate

		// reads changes of the buttons being pressed
		
		controlHandler(controls)
		// controlHandler(controls)

	}
	index--
}


animate()
