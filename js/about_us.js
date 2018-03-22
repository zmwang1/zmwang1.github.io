	
var about_us_one = document.getElementById("about_us_one");
var about_us_two = document.getElementById("about_us_two");
var intro = document.getElementsByClassName("intro")[0];
var development_history = document.getElementsByClassName("development_history")[0];
var contenter = document.getElementsByClassName("contenter")[0];

about_us_one.onclick = function(){
	this.style.color = "white";
	this.style.backgroundColor = "#0F74E3";
	about_us_two.style.color = "#404140";
	about_us_two.style.backgroundColor = "#F2F1EF";
	development_history.style.display = "none";
	intro.style.display = "block";
	contenter.style.height = "850px";
}

about_us_two.onclick = function(){
	this.style.color = "white";
	this.style.backgroundColor = "#0F74E3";
	about_us_one.style.color = "#404140";
	about_us_one.style.backgroundColor = "#F2F1EF";
	intro.style.display = "none";
	development_history.style.display = "block";
	contenter.style.height = "1150px";
}



