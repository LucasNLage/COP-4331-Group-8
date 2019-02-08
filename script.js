var urlBase = 'https://managebandageapi.azurewebsites.net';

var username = "";

function doLogin()
{

    var login = document.getElementById("inputUsername").value; //  .value gets input from "email" textbox
    var password = document.getElementById("inputPassword").value; //  .value gets input from password textbox

    document.getElementById("loginResult").innerHTML = "";

    var jsonPayload = '{"UserID" : "' + login + '", "Password" : "' + password + '"}';
    var url = urlBase + '/UserLogin';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false); // synchronous causes network error, gonna leave as asynchronous
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    try
    {

        xhr.send(jsonPayload); // sends to server, used for POST requests

        var jsonObject = JSON.parse(xhr.responseText);

         if(jsonObject == null)
         {
             document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
             alert("login failed");
             return;
         } else {
            window.name = login;
          //  alert(window.name);
            window.location.href = "file:///C:/Users/Selena/Desktop/COP-4331-Group-8/website/contacts.html";
        }

    //     document.getElementById("inputEmail").value = ""; // resets text boxes
    //     document.getElementById("inputPassword").value = "";

    }
    catch(err)
    {
        document.getElementById("loginResult").innerHTML = err.message;
        alert(err);
    }

}

function addContact()
{
  var newFirstName = document.getElementById("First Name").value;
  var newLastName = document.getElementById("Last Name").value;
  var newPhoneNumber = document.getElementById("Phone Number").value;
  var newEmail = document.getElementById("Email Address").value;

  var jsonPayload = '{ "UserID" : "' + window.name + '", "FirstName" : "' + newFirstName + '", "LastName" : "' + newLastName + '", "PhoneNumber" : "' + newPhoneNumber + '", "Email" : "' + newEmail + '" }';

   var url = urlBase + '/SaveContact';
   var xhr = new XMLHttpRequest();
   xhr.open("POST", url, false);
   alert("good");
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
      xhr.onreadystatechange = function()
      {
        if(this.readyState == 4 && this.status == 200)
        {
          alert("Contact added");
        }
      };
      xhr.send(jsonPayload);
  } catch (err) {
    alert(err);
  }

}

function createUser() {
  
}
