var num = Math.round(Math.random() * 7);
var msg = new SpeechSynthesisUtterance('Welcome to the Studio Arts Directory');

image();
// window.speechSynthesis.speak(msg);

function image(){
	document.getElementById("image").src = "image" + num + ".jpg";
};