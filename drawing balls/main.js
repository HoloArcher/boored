var index = 0
document.onmousedown = kek


document.onmousemove = kek

document.onchange


function kek(e) {


	var posx = e.clientX
	var posy = e.clientY

	aBigSnake = document.createElement('div')
	aBigSnake.setAttribute('id', index++)
	aBigSnake.setAttribute('class', 'ball')
	aBigSnake.style.left = posx + "px"
	aBigSnake.style.top = posy + "px"

	document.getElementById('main').appendChild(aBigSnake)

}