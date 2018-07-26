num = Math.round(Math.random() * 7);

image();

function image(){
	document.getElementById("image").src = "image" + num + ".jpg";
};