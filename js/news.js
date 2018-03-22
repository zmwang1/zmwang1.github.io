
var news_a_one = document.getElementById("news_a_one");
var news_a_two = document.getElementById("news_a_two");
var news = document.getElementsByClassName("news")[0];
var news_div = news.getElementsByTagName("div");
var news_all = document.getElementsByClassName("news_all")[0];
var news_create = document.getElementsByClassName("news_create")[0];
var news_create_ul = news_create.getElementsByTagName("ul")[0];
var news_build = document.getElementsByClassName("news_build")[0];
var news_build_ul = news_build.getElementsByTagName("ul")[0];
var contenter = document.getElementsByClassName("contenter")[0];
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
    		
    	for(var i = 0; i < jsonObj.news_one.length; i++) {
    			
			var news_create_li = document.createElement("li");
    		news_create_ul.appendChild(news_create_li);
    		var news_create_a = document.createElement("a");
    		news_create_li.appendChild(news_create_a);
    		var news_create_span = document.createElement("span");
    		news_create_li.appendChild(news_create_span);
    		var news_create_hr = document.createElement("hr");
    		news_create_ul.appendChild(news_create_hr);
        	var att_a = document.createAttribute('class');
        	att_a.nodeValue = 'create_a';
        	news_create_a.setAttributeNode(att_a);
        	var att_span = document.createAttribute('class');
        	att_span.nodeValue = 'create_span';
        	news_create_span.setAttributeNode(att_span);
        	var att_hr = document.createAttribute('class');
        	att_hr.nodeValue = 'create_hr';
        	news_create_hr.setAttributeNode(att_hr);
        	
        	var node_a = document.createTextNode(jsonObj.news_one[i].cont);
        	news_create_a.appendChild(node_a);
        	var node_span = document.createTextNode(jsonObj.news_one[i].date);
        	news_create_span.appendChild(node_span);
		}
    	
    	for(var i = 0; i < jsonObj.news_two.length; i++) {
    			
			var news_build_li = document.createElement("li");
    		news_build_ul.appendChild(news_build_li);
    		var news_build_a = document.createElement("a");
    		news_build_li.appendChild(news_build_a);
    		var news_build_span = document.createElement("span");
    		news_build_li.appendChild(news_build_span);
    		var news_build_hr = document.createElement("hr");
    		news_build_ul.appendChild(news_build_hr);
        	var att_a = document.createAttribute('class');
        	att_a.nodeValue = 'create_a';
        	news_build_a.setAttributeNode(att_a);
        	var att_span = document.createAttribute('class');
        	att_span.nodeValue = 'create_span';
        	news_build_span.setAttributeNode(att_span);
        	var att_hr = document.createAttribute('class');
        	att_hr.nodeValue = 'create_hr';
        	news_build_hr.setAttributeNode(att_hr);
        	
        	var node_a = document.createTextNode(jsonObj.news_two[i].cont);
        	news_build_a.appendChild(node_a);
        	var node_span = document.createTextNode(jsonObj.news_two[i].date);
        	news_build_span.appendChild(node_span);
		}
    	
    	news_a_one.onclick = news_div[0].onclick = function() {
    		news_all.style.display = "none";
    		news_create.style.display = "block";
    		news_build.style.display = "none";
    		contenter.style.height = "600px"
    	}
    	
    	news_a_two.onclick = news_div[1].onclick = function() {
    		news_all.style.display = "none";
    		news_create.style.display = "none";
    		news_build.style.display = "block";
    		contenter.style.height = "300px"
    	}
   }
	
}

xmlhttp.open("GET","news.json",true);
xmlhttp.send();
