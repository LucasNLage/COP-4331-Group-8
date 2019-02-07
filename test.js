//var urlBase = 'http://COP4331.com/WISAAPI';^%
var urlBase = 'https://managebandageapi.azurewebsites.net';
var extension = "aspx";

var id = 0;
//var firstName = "";
//var lastName = "";

function doLogin()
{
	id = 0;
	//firstName = "";
	//lastName = "";

	var login = document.getElementById("inputUsername").value; //  .value gets input from "email" textbox
	
	alert(login);
	
	var password = document.getElementById("inputPassword").value; //  .value gets input from password textbox

	alert(password);
	
	document.getElementById("loginResult").innerHTML = "";



	var jsonPayload = '{"UserID" : "' + login + '", "Password" : "' + password + '"}';
	var url = urlBase + '/UserLogin';
	
	alert( jsonPayload );
	alert( url );

	var xhr = new XMLHttpRequest();
	//xhr.open("GET", url, false); // POST Request type, asynchronous
	//xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

	try
	{
		// xhr.onreadystatechange = function() {
		// 	if(xhr.readyState == 4 && xhr.status == 200)
		// 		callback(xhr.responseText);
		// }

		xhr.open("POST", "https://managebandageapi.azurewebsites.net/UserLogin", false);
		xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		xhr.send(jsonPayload); // sends to server, used for POST requests
		// -----> error here
		var jsonObject = JSON.parse( xhr.responseText ); // xhr.responseText is a string, JSON object -> JS object

	 	if( jsonObject === "true")
	 	{
	 		document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
	 		alert("login failed");
	 		return;
	 	}
	//
	// 	//firstName = jsonObject.firstName;
	// 	//lastName = jsonObject.lastName;
	//
	// 	//document.getElementById("userName").innerHTML = firstName + " " + lastName;
	//
	// 	document.getElementById("inputEmail").value = ""; // resets text boxes
	// 	document.getElementById("inputPassword").value = "";
	//
	//
	// // change to next html page on successful login
	 window.location.href = "C:\\Users\\Selena\\Desktop\\manage_bandage\\COP-4331-Group-8\\website\\contacts.html"; // fix
	 alert("login successful");

	}
	catch(err)
	{
	//	document.getElementById("loginResult").innerHTML = err.message;
		alert(err);
	}



}

// function doLogout()
// {
// 	id = 0;
// 	//firstName = "";
// //	lastName = "";
//
// //	hideOrShow( "loggedInDiv", false);
// //	hideOrShow( "accessUIDiv", false);
// //	hideOrShow( "loginDiv", true);
//
// 	// need to add logout button to contact css page
// 	// on logout click go back to login page
// 	window.location.href = "http://.../index"; // fix
// }
//
// /*function hideOrShow( elementId, showState )
// {
// 	var vis = "visible";
// 	var dis = "block";
// 	if( !showState )
// 	{
// 		vis = "hidden";
// 		dis = "none";
// 	}
//
// 	document.getElementById( elementId ).style.visibility = vis;
// 	document.getElementById( elementId ).style.display = dis;
// }*/
//
// function addContact() {
// 	// change to what our html has
// 	var newFirstName = document.getElementById("First Name").value;
// 	document.getElementById("firstNameAddResult").innerHTML = ""; // need to add to html
// 	var newLastName = document.getElementById("Last Name").value;
// 	document.getElementById("lastNameAddResult").innerHTML = "";  // need to add to html
// 	var newPhoneNumber = document.getElementById("Phone Number").value;
// 	document.getElementById("phoneNumberAddResult").innerHTML = "";  // need to add to html
// 	var newEmail = document.getElementById("Email Address").value;
// 	document.getElementById("emailAddResult").innerHTML = "";  // need to add to html
//
// 	// change to match database/API
// 	var jsonPayload = '{"users_id" : "' + id + '", "firstName" : ' + newFirstName + '", "lastName" : ' + newLastName + '", "newPhoneNumber" : ' + newEmail + '"}';
// 	var url = urlBase + '/AddContact.' + extension;
//
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", url, true);
// 	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//
// 	try
// 	{
// 		xhr.onreadystatechange = function()
// 		{
// 			if (this.readyState == 4 && this.status == 200)
// 			{
// 				document.getElementById("contactAddResult").innerHTML = "Contact has been added";
// 			}
// 		};
// 		xhr.send(jsonPayload);
// 	}
// 	catch(err)
// 	{
// 		document.getElementById("contactAddResult").innerHTML = err.message;
// 	}
//
// }
//
//
// function searchContact() {
// 	var srch = document.getElementById("Search").value;
// 	document.getElementById("contactSearchResult").innerHTML = ""; // needs to be added to html
//
// 	var contactList = document.getElementById("contactList"); // needs to be added to html
// 	contactList.innerHTML = "";
//
// 	var jsonPayload = '{"search" : "' + srch + '"}';
// 	var url = urlBase + '/SearchColors.' + extension;
//
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", url, true);
//
// 	try
// 	{
// 		xhr.onreadystatechange = function() {
// 			if(this.readyState == 4 && this.status == 200) {
// 				//hideOrShow("contactList", true);           // modify hideOrShow just for contactList maybe
//
// 				document.getElementById("contactSearchResult").innerHTML = "Contact has been retrieved"; // needs to be added to html
// 				var jsonObject = JSON.parse( xhr.responseText );
//
// 				var i;
// 				for( i=0; i<jsonObject.results.length; i++ ) {
// 					var opt = document.createElement("option"); // drop down options selection of contact results?
// 					opt.text = jsonObject.results[i];
// 					opt.value = "";
// 					contactList.options.add(opt);
// 				}
// 			}
// 			xhr.send(jsonPayload);
// 		} catch(err) {
// 				document.getElementById("contactSearchResult").innerHTML = err.message;
// 		}
//
// }
//
// function addUser() { // add user button needs to be added to html, resuse login text fields
// 	var newUser = document.getElementById("createUserName").value;
// 	document.getElementById("createUserNameResult").innerHTML = ""; // need to add to html
//
// 	var newPassword = document.getElementById("createPassword").value;
// 	document.getElementById("createPasswordResult").innerHTML = ""; // need to add to html
//
// }
