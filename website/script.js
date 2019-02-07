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


function switchLogin()
{
    // document.getElementById("loginBtn").style.visibility = "collapse"; 
    removeElement("loginBtn");
    // document.getElementById("createAcc").innerHTML = "Create account"
    removeElement("firstTime");
    document.getElementById("formHeader").innerHTML = "Create account";
    
    addElement("loginContainer", "button", "createAcc", "Create your account!");
    document.getElementById("createAcc").className = "btn btn-lg btn-primary btn-block";
    
    document.getElementById("createAcc").addEventListener("click", function(){ createAccount() });
}

function createAccount()
{
    alert("Account created");
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
function removeElement(elementId)
{
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
