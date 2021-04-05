/*validate code starter lines have been pasted into replit*/

function validate() {
	var username = document.getElementById("username")
		.value;
	var password = document.getElementById("password")
		.value;

	if (username == "Lewis" && password == "1234") {
		alert("Login works");
		window.open("https://swiftduck3.qoom.space/OneHack/map.html", "_blank");
	} 
	
	else {
		alert("login failed");
		window.open("https://swiftduck3.qoom.space/OneHack/index.html", "_blank");
	}

}