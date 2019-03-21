//holds an array of all objects
var objects = []

var floor = new object(0, canvasHeight - 100, canvasWidth, 100, '#000000', true)
objects.push(floor)

objects.push(new object(500, 300, 300, 300, '#eeff00'))

var obj = new object(200, 260, 50, 100, '#ff00ff')
objects.push(obj)



var tickrate = 1

// for recuding the speed of the program
var index = tickrate


function animate() {

	requestAnimationFrame(animate)

	//clears the field to create animation

	c.clearRect(0, 0, innerWidth, innerHeight)
	c.fillStyle = '#eeeeee'
	c.fillRect(0, 0, canvasWidth, canvasHeight)

	objects.forEach(el => el.draw() )


	// hitting 
	obj.move()

	var el = objects[1]
	if(obj.detect(el).l ) {

		obj.x -= el.x
		controls.jumping = 12
	}

	if (obj.detect(floor).t) {
		obj.y = floor.y - obj.height
		controls.jumping = 12
	} else {
		obj.Vy += 1

	}







	// // checks hitting to floor
	// if (obj.detect(floor).t) {
	// 	// obj.y += obj.Vy
	// 	obj.Vy = 0
	// } else {
	// 	// obj.detection()
	// }





	if (index == 0) {

		index = tickrate
		controlHandler(controls)

	}

	index--
}

animate()
