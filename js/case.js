
var cases = document.getElementsByClassName("cases")[0];
var cases_all = document.getElementsByClassName("cases_all")[0];
var cases_all_div = cases.getElementsByTagName("div");
var cases_all_img = cases_all.getElementsByTagName("img");
var cases_all_li = cases_all.getElementsByTagName("ul")[0].getElementsByTagName("li");

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

		cases_all_div[0].onclick = function() {
			
			for(var j = 0; j < 12; j++) {
				cases_all_li[j].style.display = "block";
				var str = "img/" + jsonObj.case_show[0][j].addr;
				cases_all_img[j].setAttribute("src",str);
			}
			
		}
    		
    	cases_all_div[1].onclick = function() {
			
			for(var j = 0; j < 12; j++) {
				if(j <= 9) {
					cases_all_li[j].style.display = "block";
					var str = "img/" + jsonObj.case_show[1][j].addr;
					cases_all_img[j].setAttribute("src",str);
				}else{
					cases_all_li[j].style.display = "none";
				}
			}
			
		}
    	
    	cases_all_div[2].onclick = function() {
			
			for(var j = 0; j < 12; j++) {
				cases_all_li[j].style.display = "block";
				var str = "img/" + jsonObj.case_show[2][j].addr;
				cases_all_img[j].setAttribute("src",str);
			}
			
		}
    	
    	cases_all_div[3].onclick = function() {
			
			for(var j = 0; j < 12; j++) {
				cases_all_li[j].style.display = "block";
				var str = "img/" + jsonObj.case_show[3][j].addr;
				cases_all_img[j].setAttribute("src",str);
			}
			
		}
	}
}
xmlhttp.open("GET","cases.json",true);
xmlhttp.send();