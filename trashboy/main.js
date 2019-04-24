//holds an array of all objects

// var floor = new object(0, canvasHeight - 100, canvasWidth, 100, '#000000', true)
// objects.push(floor)

// objects.push(new object(300, 480, 200, 20, '#eeff00'))

var obj = new object(200, 260, 50, 100, '#ff00ff')
// objects.push(obj)



var tickrate = 1

// for recuding the speed of the program
var index = tickrate


function animate() {

	requestAnimationFrame(animate)

	//clears the field to create animation
	c.clearRect(0, 0, innerWidth, innerHeight)

	objects.forEach(el => el.draw())


	// hitting 
	obj.draw()
	obj.move()


	for (el of objects) {
		// console.log(el);


		// var el = objects[1]
		// if(obj.detect(el).l && !obj.detect(el).t) {

		// 	obj.x = el.x - obj.width

		// 	controls.jumping = 12

		// }
		// if(obj.detect(el).t&& obj.detect(el).l && obj.detect(el). ) {
		// 	obj.y = el.y - obj.height
		// 	controls.jumping = 12
		// }




		// if (( obj.detect(el).l || obj.detect(el).r) && (obj.detect(el).t || obj.detect(el).b)) {

		// if ( (obj.detect(el).l || obj.detect(el).r) && (!obj.detect(el).t && !obj.detect(el).b)) {
		// 	obj.y = el.y - el.width
		// 	// controls.jumping = 12

		// // }
		console.clear()
		console.table(obj.detect(el));
		
		 if (obj.detect(el).t) {
			// console.clear()

			// obj.y = el.y - obj.height
			// obj.Vy = 0
			controls.jumping = 12
		} 

		else {
			// obj.Vy += 0.1
		}


		// if (obj.detect(el).t) {
		// 	obj.y = el.y - obj.height
		// 	controls.jumping = 12
		// } else {
		// 	obj.Vy += 0.1
		// }

	}



	if (index == 0) {

		index = tickrate
		controlHandler(controls)

	}

	index--
}

animate()
