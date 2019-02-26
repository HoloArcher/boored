$(document).ready(function () {


	var balls = {
		el: [],
		index: 0,
		posx: 0,
		posy: 0,
		changecolor: 0,
		color: "",

		addBall(name, size, xs, ys, changecolor, color, parent) {

			this.changecolor = changecolor
			if (color) {
				this.color = color
			} else {
				this.color = "#ffffff"
			}

			var l = document.createElement("div")
			l.setAttribute("id", name)

			l.style.borderRadius = "1%"
			l.style.width = size + "px";
			l.style.height = size + "px";
			l.style.backgroundColor = color;


			var r = Math.floor(Math.random() * 255) + 1
			document.getElementById(parent).appendChild(l)
			this.el.push({
				name: "#" + name,
				xs: xs,
				ys: ys,
				ind: this.index,
				rgb: [r, 0, 0],
				parent: parent
			})
			this.index++;

		},
		move(k) {


			ballname = k.name
			xs = k.xs
			ys = k.ys
			ballname = ballname



			var height = $("#" + k.parent)[0].offsetHeight;
			var width = $("#" + k.parent)[0].offsetWidth;

			var balldim = $(ballname)[0].offsetHeight;



			var x1 = $(ballname)[0].offsetLeft
			var x2 = $(ballname)[0].offsetTop



			if (x1 >= 0 && x2 >= 0 && x2 + balldim < height && x1 + balldim < width) {
				$(ballname).css({
					top: x2 + ys,
					left: x1 + xs
				})

			} else {


				if (x2 + balldim >= height || x2 <= 0) {
					balls.el[k.ind].ys = ys * -1
				}
				if (x1 + balldim > width || x1 <= 0) {
					balls.el[k.ind].xs = xs * -1

				}
				xs = k.xs
				ys = k.ys


				$(ballname).css({
					top: x2 + ys,
					left: x1 + xs
				})



			}
			asdf(x1,x2, ballname)


		

		},
		colorchange(k) {
			ballname = k.name
			xs = k.xs
			ys = k.ys

			var r = k.rgb[0]
			var b = k.rgb[1]
			var g = k.rgb[2]


			if (r > 0 && b == 0) {
				r--;
				g++;
			}
			if (g > 0 && r == 0) {
				g--;
				b++;
			}
			if (b > 0 && g == 0) {
				r++;
				b--;
			}


			k.rgb[0] = r
			k.rgb[1] = b
			k.rgb[2] = g

			$(ballname)[0].style.background = "rgb(" + r + "," + g + "," + b + ")"

		},
		followM(k) {


			ballname = k.name
			xs = k.xs
			ys = k.ys



			var k = $(ballname)[0].offsetWidth / 2
			var x1 = $(ballname)[0].offsetLeft
			var x2 = $(ballname)[0].offsetTop

			var t = 12

			if (x1 + k > this.posx) {
				x1 -= t
			} else {
				x1 += t
			}

			if (x2 + k > this.posy) {
				x2 -= t
			} else {
				x2 += t
			}


			$(ballname).css({
				top: x2,
				left: x1
			})


		},

		do() {
			for (n of this.el) {

				if (mousedownID == 1) {
					this.followM(n)
				} else {

					this.move(n)
					// this.changeForm(n)
				}
				if (this.changecolor) {
					this.colorchange(n)

				}
			}

		}

	}

	document.onmousemove = function (e) {
		balls.posx = e.clientX
		balls.posy = e.clientY
	}

	function ran(max, min) {
		return Math.floor(Math.random() * max) + min
	}



	// var ind3 = 0
	// while(ind3 < 1) {
	// 	balls.addBall("f" + ind3 ,500, ran(20,1), ran(20 ,1), false, "#f1f1f1", "kek")

	// 	var ind2 = 0
	// 	while(ind2 < 1) {

	// 		balls.addBall("balz" + ind2 + ind3, 160, ran(7,1), ran(7,1), false, "#e1e1e1", "f" + ind3)

	// 		var index = 0
	// 		while (index < 2) {
	// 			balls.addBall("ball" + index + ind2 + ind3 , ran(20, 10), ran(3, 1), ran(6, 1), true, "#a1a1a1", "balz" + ind2 + ind3)
	// 			index++
	// 		}

	// 		ind2++
	// 	}
	// 	ind3++
	// }

	var index = 0;
	while(index< 10) {	
		balls.addBall("ball" + index , ran(0, 0), ran(3, 1), ran(3, 1), true, "#a1a1a1", "kek")
		document.getElementById('ball' + index).onchange = asdf

		index++
	}
	// balls.addBall("ball", ran(30, 10), ran(10, 1), ran(10, 1), true, "#a1a1a1", "kek")


	var idunnoman = 0
	function asdf(posx,posy, name) {
		console.log(name)

		aBigSnake = document.createElement('div')
		
		aBigSnake.setAttribute('class', 'ball' )
		aBigSnake.setAttribute('id', 's' + idunnoman++)
		aBigSnake.style.left = posx + "px"
		aBigSnake.style.top = posy + "px"

		document.getElementById('kek').appendChild(aBigSnake)


	}

	setInterval(() => {
		balls.do()
	}, 10);







	var mousedownID = -1; //Global ID of mouse down interval
	function mousedown(event) {
		if (mousedownID == -1) //Prevent multimple loops! 
		{
			mousedownID = 1
		}

	}

	function mouseup(event) {
		if (mousedownID != -1) { //Only stop if exists

			mousedownID = -1;
		}

	}


	//Assign events
	document.addEventListener("mousedown", mousedown);
	document.addEventListener("mouseup", mouseup);
	//Also clear the interval when user leaves the window with mouse
	document.addEventListener("mouseout", mouseup);


	var h2 = document.createElement("h1")
	h2.setAttribute('id', 'title')
	document.getElementById('kek').appendChild(h2)

	// document.getElementById('title').innerHTML = "This is so sad."

});