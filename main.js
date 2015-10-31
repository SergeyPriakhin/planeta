$(function(){

	var image = new Image(),
		bg = document.getElementsByTagName('body'),
		canvas = document.getElementById('planeta'),
		ctx = canvas.getContext('2d');

	var w = canvas.width = 300,
        h = canvas.height  = 300;

		image.src  = 'img/planeta.jpg';
		// image.style.backgroundSize = "cover";
		console.log(image);

	var shadow = new Image();
		shadow.src = 'img/ttt.png';

		// рассчитываем угол вращения планеты
	var beta = 360 / 1200,
		beta = ( beta * Math.PI ) / 360,
		l = ( Math.sqrt( w * w + w * w )) / 2,
		gam = Math.PI - (( Math.PI - (beta * Math.PI) / 360) / 2) - ( Math.PI / 4),
		b = 2 * l * Math.sin( beta / 2 ),
		x = b * Math.sin(gam),
		y = b * Math.cos(gam),
		p1 = Math.cos(beta),
		p2 = Math.sin(beta);

	var newMoveWidth = 0,
		newMoveHeight  = 0;

	var  drawPlanet   = function() {
		 ctx.clearRect(0, 0, w, h);
		 ctx.drawImage(image, newMoveWidth, newMoveHeight, w, h, 0, 0, w, h);
		 ctx.transform(p1, p2, -p2, p1, x, -y);

		 ctx.drawImage(shadow, 0, 0, w, h);

		 if (newMoveWidth >= 600) newMoveWidth = 0; // если смещение достигло предела, начинаем сначала
		 else newMoveWidth = newMoveWidth + 0.5; // иначе двигаем карту дальше
	};

	image.onload = function() {
		setInterval(drawPlanet, 100); 
	}

	var element = $('.corable');
	var Z = 0, X = 0;
	// var x = e.offsetX == undefined ? e.layerX: e.offsetX;
	// var y = e.offsetY == undefined ? e.layerY: e.offsetY;

	$(document.body).on('keydown', function(e) {
		var keycode = (e.which)?e.which:e.keyCode;
	    switch (keycode) {
	        // код клавиши стрелки влево
	        case 37:
	            console.log('left arrow key pressed!');
	            $('.corable').css({
	            	'left' : --Z*4 + 'px'
	            }, 100);
	            break;


	        // код клавиши стрелки вправо
	        case 39:
	            console.log('right arrow key pressed!');
	            $('.corable').css({
	            	'left' : ++Z*4 + 'px'
	            });
	            break;

	        case 38:
	            console.log('top arrow key pressed!');
	            $('.corable').css({
	            	'top' : --X*4 + 'px'
	            });
	            break;

	        case 40:
	        	console.log('bottom arrow key pressed!');
		        $('.corable').css({
		        	'top' : ++X*4 + 'px'
		        });
		        break;
	    }
	});


});