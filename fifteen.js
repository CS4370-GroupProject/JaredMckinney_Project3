var piece; 
var yCord;
var xCord;

window.onload = function(){

	var board = document.getElementById('board');
	piece = board.getElementsByTagName('div'); 

	for (var i=0; i<piece.length; i++){
		piece[i].className = 'piece'; 
		piece[i].style.left = (i%4*100)+'px'; 
		piece[i].style.top = (parseInt(i/4)*100) + 'px'; 
		piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + piece[i].style.top; 
	}

	var shuffle = document.getElementById('shuffle'); 
	xCord = '300px'; 
	yCord = '300px';
	shuffle.onclick = function(){

		for (var i=0; i<300; i++){

			var random = parseInt(Math.random()* 100) %4;
			if (random == 0){
				var temp = up(xCord, yCord); 
				if ( temp != -1){
					swap(temp);
				}
			}

			if (random == 1){
				var temp = down(xCord, yCord);
				if ( temp != -1){
					swap(temp);
				}
			}

			if (random == 2){
				var temp = left(xCord, yCord);
				if ( temp != -1){
					swap(temp);
				}
			}

			if (random == 3){
		    	var temp = right(xCord, yCord);
				if (temp != -1){
					swap(temp);
				}
			}
		}
	};
};

function left(x, y){

	var cordX = parseInt(x);
	var cordY = parseInt(y);

	if (cordX > 0){
		for (var i = 0; i < piece.length; i++){
			if(parseInt(piece[i].style.left) + 100 == cordX && parseInt(piece[i].style.top) == cordY){
				return i;
			} 
		}
	}
	else{
		return -1;
	}
}

function right(x, y){

	var cordX = parseInt(x);
	var cordY = parseInt(y);

	if (cordX < 300){
		for (var i =0; i<piece.length; i++){
			if (parseInt(piece[i].style.left) - 100 == cordX && parseInt(piece[i].style.top) == cordY){
				return i;
			}
		}
	}

	else{
		return -1;
	} 

}

function up(x, y){

	var cordX = parseInt(x);
	var cordY = parseInt(y);

	if (cordY > 0){
		for (var i=0; i<piece.length; i++){
			if(parseInt(piece[i].style.top) + 100 == cordY && parseInt(piece[i].style.left) == cordX){
				return i;
			}
		} 
	}
	else{
		return -1;
	}
}

function down(x, y){

	var cordX = parseInt(x);
	var cordY = parseInt(y);

	if (cordY < 300){
		for (var i=0; i<piece.length; i++){
			if (parseInt(piece[i].style.top) - 100 == cordY && parseInt(piece[i].style.left) == cordX){
				return i;
			}
		}
	}
	else{
		return -1;
	} 
}

function swap(position){
	var temp = piece[position].style.top;
	piece[position].style.top = yCord;
	yCord = temp;
	temp = piece[position].style.left;
	piece[position].style.left = xCord;
	xCord = temp;
}