num = Math.round(Math.random() * 11);

image();

function image(){
	document.getElementById("image").src = "image" + num + ".jpg";
};