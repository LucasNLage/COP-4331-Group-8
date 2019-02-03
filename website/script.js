//var urlBase = 'http://COP4331.com/WISAAPI';^%
var urlBase = 'https://managebandageapi.azurewebsites.net';
var extension = "aspx";

var id = 0;

function doLogin()
{
	id = 0;


	var login = document.getElementById("inputUsername").value; //  .value gets input from "email" textbox
	var password = document.getElementById("inputPassword").value; //  .value gets input from password textbox

	document.getElementById("loginResult").innerHTML = "";



	var jsonPayload = '{"UserID" : "' + login + '", "Password" : "' + password + '"}';
	var url = urlBase + '/UserLogin';
	//alert(url);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false); // synchronous causes network error, gonna leave as asynchronous
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

	try
	{
		xhr.send(jsonPayload); // sends to server, used for POST requests
		//var jsonObject = JSON.parse( xhr.responseText ); // xhr.responseText is a string, JSON object -> JS object
		//alert();
	 	if( xhr.responseText !== "true")
	 	{
	 		document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
	 		alert("login failed");
	 		return;
	 	} else if(xhr.responseText == "true") {
			alert("login successful");
			window.location.href = "https://managebandage.azurewebsites.net/contacts.html"
		}

	// 	document.getElementById("inputEmail").value = ""; // resets text boxes
	// 	document.getElementById("inputPassword").value = "";
	//
	// // change to next html page on successful login
	// window.location.href = "C:\\Users\\Selena\\Desktop\\manage_bandage\\COP-4331-Group-8\\website\\contacts.html"; // fix


	}
	catch(err)
	{
		document.getElementById("loginResult").innerHTML = err.message;
		alert(err);
	}

}
