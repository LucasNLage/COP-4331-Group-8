var urlBase = 'https://managebandageapi.azurewebsites.net';

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

         if( xhr.responseText !== "true")
         {
             document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
             alert("login failed");
             return;
         } else if(xhr.responseText == "true") {
            alert("login successful");
            window.location.href = "https://managebandage.azurewebsites.net/contacts.html"
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

