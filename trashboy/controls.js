

var controls = {
	87: false, // w
	83: false, // s 
	65: false, // a
	68: false, // d
	32: false, // space
	jumping: 12


}


function controlHandler() {
	var speed = 'controlSpeed'

	for (let n in controls) {
		key = n
		// console.log(controls)

		if (controls[83]) {

			obj.Vy += config[speed];
		}

		if (controls[16]) {

			obj.Vy -= config[speed]/20;
			speed = 'runspeed'
		}

		if (controls[65]) {

			obj.Vx -= config[speed]
		}

		if (controls[68]) {

			obj.Vx += config[speed]
		}
		if (controls[32] ) {
			if (controls.jumping) {

			obj.Vy -= 1
			obj.Vy -= Math.pow(config['jumpspeed'], 2)
			controls.jumping -= 1
		} else {
			obj.Vy -= config[speed]/4;
		}

		}


	}

}

document.addEventListener('keydown', el => { 
	controls[el.keyCode] = true; 
	// console.log(el.keyCode)
	// animate()
	
})
document.addEventListener('keyup', el => { 
	controls[el.keyCode] = false; 
})
