
var product_good = document.getElementById("product_good");
var product_a = product_good.getElementsByTagName("a");
var product_show = document.getElementsByClassName("product_show")[0];
var product_img = product_show.getElementsByTagName("img");
var product_p = product_show.getElementsByTagName("p");
var product_li = product_show.getElementsByTagName("ul")[0].getElementsByTagName("li");

var xmlhttp;
if (window.XMLHttpRequest){
	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
}else{
	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function(){
	
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
    	var jsonObj = JSON.parse(xmlhttp.responseText);
    	//product_show.innerHTML = jsonObj.industrial_pipeline[0][0].addr;
    		product_a[0].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[0][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[0][j].value;
				}
			}
			product_a[1].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[1][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[1][j].value;
				}
			}
			product_a[2].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[2][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[2][j].value;
				}
			}
			product_a[3].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[3][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[3][j].value;
				}
			}
			product_a[4].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[4][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[4][j].value;
				}
			}
			product_a[5].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[5][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[5][j].value;
				}
			}
			product_a[6].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[6][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[6][j].value;
				}
			}
			product_a[7].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[7][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[7][j].value;
				}
			}
			product_a[8].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[8][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[8][j].value;
				}
			}
			product_a[9].onclick = function(){
				for(var j = 0; j < 12; j++) {
					if(j <= 9) {
						var str = "img/" + jsonObj.industrial_pipeline[9][j].addr;
				    	product_img[j].setAttribute("src",str);
				    	product_p[j].innerHTML = jsonObj.industrial_pipeline[9][j].value;
					}else{
			    		product_li[j].style.display = "none";
			    	}
				}
			}
			product_a[10].onclick = function(){
				for(var j = 0; j < 12; j++) {
					if(j <= 1) {
						var str = "img/" + jsonObj.industrial_pipeline[10][j].addr;
				    	product_img[j].setAttribute("src",str);
				    	product_p[j].innerHTML = jsonObj.industrial_pipeline[10][j].value;
					}else{
			    		product_li[j].style.display = "none";
			    	}
				}
			}
			product_a[11].onclick = function(){
				for(var j = 0; j < 12; j++) {
					if(j <= 1) {
						var str = "img/" + jsonObj.industrial_pipeline[11][j].addr;
				    	product_img[j].setAttribute("src",str);
				    	product_p[j].innerHTML = jsonObj.industrial_pipeline[11][j].value;
					}else{
			    		product_li[j].style.display = "none";
			    	}
				}
			}
			product_a[12].onclick = function(){
				for(var j = 0; j < 12; j++) {
					product_li[j].style.display = "block";
					var str = "img/" + jsonObj.industrial_pipeline[12][j].addr;
			    	product_img[j].setAttribute("src",str);
			    	product_p[j].innerHTML = jsonObj.industrial_pipeline[12][j].value;
				}
			}
    	
    	
	}
}
xmlhttp.open("GET","product.json",true);
xmlhttp.send();



