var template = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
]



var map = {
	height: template.length,
	width: template[0].length,

}

function draw() {

	for (let xy = 0; xy < template.length; xy++) {
		const el1 = template[xy];


		for (let x = 0; x < template.length; x++) {

			if (el1[x] === 1) {

				var width = canvas.height / template[0].length - 1

				var xdraw = 1 + x * width

				// console.log(xdraw)
				var ydraw = 1 + xy * width



				objects.push(new object(xdraw, ydraw, width, width, '#000000'))
				// sqr(xdraw, ydraw, width ,width)
			}
		}
	}

}

draw()