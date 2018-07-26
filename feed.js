var count = (Math.round(Math.random()*1000));
var stop = false;
var adminCount = 0;
var delay = 13500;
var num = 0;
var mfa = 0;
var year = 0;
var city = "";
var domain = "";
var college = "";
var firstName = "";
var lastName = "";
var website = "";
var school = "";
var msg = new SpeechSynthesisUtterance('');




var tid = setInterval(function(){
    createContent();
    addContent();
    readContent();
},delay);

for(var i = 0; i < 50; i++){
	createContent();
	addContent();
};

createContent();
addContent();
readContent();

window.addEventListener("keydown", function(e){
    if(e.keyCode === 27 && document.activeElement !== 'text') {
        alert("{ " + adminCount + " entries generated : " + (adminCount - 50) + " entries read }");
    }
});

window.addEventListener("keydown", function(e){
    if(e.keyCode === 13 && document.activeElement !== 'text') {
        stop = !stop;
        alert("stop = " + stop);
    }
});





function readContent() {
	msg = new SpeechSynthesisUtterance(count + "..");
	window.speechSynthesis.speak(msg);
	msg = new SpeechSynthesisUtterance(
		firstName + " " 
		+ lastName 
		+ ".. " 
		+ city + ".. " 
		+ school
		+ ".. "
		+ "Website, "
		// + "w w w dot"
		+ firstName + " " + lastName + " "
		+ "dot "
		+ domain + ".. "
		);
	window.speechSynthesis.speak(msg);
}

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
	city = faker.address.city() + " (" + faker.address.state() + ")"
	school = faker.name.lastName() + " " + college + ", " + mfa + " " + year;
	count++;
	adminCount++;
};

function addContent() {
	var newText = 
		"<div class='addedContent'><span class='addedName'>" 
		+ firstName + " " 
		+ lastName 
		+ "</span> &ndash; " 
		+ city + " &ndash; " 
		+ school + " " 
		// + " &ndash; <a href='"
		// + "#"
		+ " &ndash;<a target='new' class='addedLink' href="
		+ "'" + website + "'"
		+ "'>" 
		+ website 
		+ "</a></div>";
	$("#container2").prepend(newText);
};