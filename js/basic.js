window.onload = function(){
	var search_img = document.getElementsByClassName("search_img")[0];
	var click = document.getElementsByClassName("show")[0];
	search_img.onmouseover = function(){
		click.style.display = "block";
	};
	search_img.onmouseout = function(){
		click.style.display = "none"
	}
	
	var banner = document.getElementsByClassName("banner")[0];
	var banner_ul = banner.getElementsByTagName("ul")[0];
	var width = banner_ul.getElementsByTagName("li")[0].offsetWidth;
	var len = banner_ul.getElementsByTagName("li").length;
	var banner_index = document.getElementsByClassName("banner_index")[0];
	var indexs = banner_index.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var index = 0;
	var timer;
	indexs[index].style.backgroundColor = "white";
	
	play();
	
	for(i = 0; i < indexs.length; i++) {
		indexs[i].onmouseover = function(){
			clearInterval(timer);
			var mouse_on = parseInt(this.getAttribute("index"));
			var offset = mouse_on - index;
			banner_ul.style.left = parseInt(banner_ul.style.left) - (offset * width) + "px";
			index = mouse_on;
			for(k = 0; k < 3; k++) {
				if(indexs[k].style.backgroundColor = "while") {
					indexs[k].style.backgroundColor = "#ccc";
				}	
			}
			this.style.backgroundColor = "white";
		}
		indexs[i].onmouseout = function(){
			play();
		}
	}
	
	
	function play(){
		timer = setInterval(function(){
		
			/*if(i == 0) {
				indexs[i + 1].style.backgroundColor = "#ccc";
				indexs[i + 2].style.backgroundColor = "#ccc";
			}*/
			index++;
			if(index < len) {
				banner_ul.style.left = -(index * width) + "px";
				for(k = 0; k < 3; k++) {
					if(indexs[k].style.backgroundColor = "while") {
						indexs[k].style.backgroundColor = "#ccc";
					}	
				}
				indexs[index].style.backgroundColor = "white";
				/*if(i == 1) {
					indexs[i + 1].style.backgroundColor = "#ccc";
					indexs[i - 1].style.backgroundColor = "#ccc";
				}
				if(i == 2) {
					indexs[i - 2].style.backgroundColor = "#ccc";
					indexs[i - 1].style.backgroundColor = "#ccc";
				}*/
				
			}else{
				banner_ul.style.left = 0;
				index = 0;
				for(k = 0; k < 3; k++) {
					if(indexs[k].style.backgroundColor = "while") {
						indexs[k].style.backgroundColor = "#ccc";
					}	
				}
				indexs[index].style.backgroundColor = "white";
				/*if(i == 0) {
					indexs[i + 1].style.backgroundColor = "#ccc";
					indexs[i + 2].style.backgroundColor = "#ccc";
				}*/
			}
		},2000);
	}

}