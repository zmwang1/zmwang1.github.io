var serviced_one = document.getElementById("serviced_one");
var serviced_two = document.getElementById("serviced_two");
var serviced_cont = document.getElementsByClassName("serviced_cont")[0];
var guide = document.getElementsByClassName("guide")[0];
var contenter = document.getElementsByClassName("contenter")[0];

serviced_one.onclick = function(){
	this.style.color = "white";
	this.style.backgroundColor = "#0F74E3";
	serviced_two.style.color = "#404140";
	serviced_two.style.backgroundColor = "#F2F1EF";
	guide.style.display = "none";
	serviced_cont.style.display = "block";
	contenter.style.height = "500px";
}

serviced_two.onclick = function(){
	this.style.color = "white";
	this.style.backgroundColor = "#0F74E3";
	serviced_one.style.color = "#404140";
	serviced_one.style.backgroundColor = "#F2F1EF";
	serviced_cont.style.display = "none";
	guide.style.display = "block";
	contenter.style.height = "440px";
}