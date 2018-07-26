var num = 0;

var college = "";
var domain = "";
var mfa = 0;
var year = 0;

var firstName = "";
var lastName = "";
var website = "";
var city = "";
var school = "";

for(var i = 0; i <50; i++){
	createContent();
	addContent();
};

function createContent() {
	num = Math.round(Math.random());
	numNotRound = Math.random();

	college = "";
	domain = "";
	mfa = 0;
	year = 1990 + Math.round(Math.random()*28);

	if(num < .5){
		mfa = "MFA";
	} else {
		mfa = "BFA";
	};

	if(num < .5){
		college = "College";
	} else {
		college = "University";
	};

	if(numNotRound <= .1 && numNotRound >= 0){
		domain = "org";
	} else if(numNotRound <= .2 && numNotRound >= .1){
		domain = "net";
	} else {
		domain = "com";
	};

	firstName = faker.name.firstName();
	lastName = faker.name.lastName();
	website = "http://www." + firstName.toLowerCase() + lastName.toLowerCase() + "." + domain + "/";
	city = faker.address.city() + ", " + faker.address.stateAbbr();
	school = faker.name.lastName() + " " + college + ", " + mfa + " " + year;
};

// document.getElementById("fake").innerHTML = "<strong>" + firstName + " " + lastName + "</strong> &ndash; " + city + " &ndash; " + school + " " + " &ndash; <a href='#'>" + website + "</a>";

function addContent() {
	var newText = 
		"<div class='addedContent'><span class='addedName'>" 
		+ firstName + " " 
		+ lastName 
		+ "</span> &ndash; " 
		+ city + " &ndash; " 
		+ school + " " 
		+ " &ndash; <a href='"
		+ "#"
		// + "'" + website + "' target='new'"
		+ "'>" 
		+ website 
		+ "</a></div>";
	$("#container2").prepend(newText);
};