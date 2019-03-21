var canvas = document.querySelector('canvas');
const canvasHtml = document.getElementById('main')
// setting canvas height and width
const canvasWidth = canvasHtml.clientWidth
const canvasHeight = canvasHtml.clientHeight
const c = canvas.getContext('2d')
canvas.width = canvasWidth
canvas.height = canvasHeight




var config = {
	gravity: 5,
	controlSpeed: 0.1,
	runspeed: 0.35,
	jumpspeed: 0.2
}
