var contact_one = document.getElementById("contact_one");
var contact_two = document.getElementById("contact_two");
var contact_all = document.getElementsByClassName("contact_all")[0];
var leave_word = document.getElementsByClassName("leave_word")[0];
var contenter = document.getElementsByClassName("contenter")[0];

contact_one.onclick = function(){
	this.style.color = "white";
	this.style.backgroundColor = "#0F74E3";
	contact_two.style.color = "#404140";
	contact_two.style.backgroundColor = "#F2F1EF";
	leave_word.style.display = "none";
	contact_all.style.display = "block";
	contenter.style.height = "680px";
}

contact_two.onclick = function(){
	this.style.color = "white";
	this.style.backgroundColor = "#0F74E3";
	contact_one.style.color = "#404140";
	contact_one.style.backgroundColor = "#F2F1EF";
	contact_all.style.display = "none";
	leave_word.style.display = "block";
	contenter.style.height = "540px";
}