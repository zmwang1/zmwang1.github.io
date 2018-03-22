
var product = document.getElementsByClassName("product")[0];
var product_kid = document.getElementsByClassName("product_kid")[0];
var prev = document.getElementsByClassName("left_one")[0];
var next = document.getElementsByClassName("right_one")[0];
var new_len = product_kid.getElementsByTagName("li").length;

var j = 0;
var time;
move();
function animate(offset) {
	product_kid.style.left =  parseInt(product_kid.style.left) + offset + "px";
	if(parseInt(product_kid.style.left) > 6) {
		product_kid.style.left = -2324 + "px";
	}
	if(parseInt(product_kid.style.left) < -2324) {
		product_kid.style.left = 6 + "px";
	}
}

prev.onclick = function(){
	clearInterval(time);
	animate(258);
}

next.onclick = function(){
	clearInterval(time);
	animate(-258);
}

prev.onmouseout = function(){
	clearInterval(time);
	move();
}

next.onmouseout = function(){
	clearInterval(time);
	move();
}


function move(){
	time = setInterval(function(){
		j++;
		if(j < new_len - 6) {
			product_kid.style.left = parseInt(product_kid.style.left) - 258 + "px";
		}else{
			product_kid.style.left = -780 + "px";
			j = 0;
		}
	},2000);
}
	

