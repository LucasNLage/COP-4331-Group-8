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
            window.location.href = "contacts.html";
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
        getContacts();
    } catch (err) {
    alert(err);
  }

}

function createUser() {
  var newUsername = document.getElementById("inputUsername").value;
  var newPassword = document.getElementById("inputPassword").value;

  var jsonPayload = '{"UserID" : "' + newUsername + '", "Password" : "' + newPassword + '"}';
  var url = urlBase + '/CreateUser';
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  try
  {
      xhr.onreadystatechange = function()
      {
        if(this.readyState == 4 && this.status == 200)
        {
          alert("Account created");
          window.name = newUsername;
          window.location.href = "contacts.html";
        }
      };
      xhr.send(jsonPayload);
  } catch (err) {
    alert(err);
  }

}

function getContacts() {
  var toBeDeleted ="";
  var jsonPayload = '{"UserID" : "' + window.name + '", "Password" : "' + "" + '"}';
  var url = urlBase + '/GetContacts';
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  try
  {

      xhr.send(jsonPayload); // sends to server, used for POST requests

      var jsonObject = JSON.parse(xhr.responseText);
      jsonObject = JSON.parse(jsonObject);

  }
  catch(err)
  {
      document.getElementById("loginResult").innerHTML = err.message;
      alert(err);
  }


  var html = '';
  for(var i in jsonObject)
  {
    html += '<tr id="'+i+'">';
    html += '<td>'+jsonObject[i]["ContactID"]+'</td>';
    html += '<td>'+jsonObject[i]["FirstName"]+'</td>';
    html += '<td>'+jsonObject[i]["LastName"]+'</td>';
    html += '<td>'+jsonObject[i]["PhoneNumber"]+'</td>';
    html += '<td>'+jsonObject[i]["Email"]+'</td>';
    html += '<td><button class="btn btn-primary" onclick="getButtonIndex()">Delete</button></td></tr>';
    html += '</tr>';
  }
  $('#contactsData > tbody').html(html);

}

function getButtonIndex()
{
    var ret;    
    $('td').click(function()
    {
        var row_index = $(this).parent().index();
        ret = row_index;
        console.log(ret);
    
        
    });
    console.log(ret);
    return ret;
    // return ret;
    
    ret = getButtonIndex();
}

function deleteContact() {

    var jsonPayload = '{"UserID" : "' + window.name + '", "Password" : "' + "" + '"}';
    var url = urlBase + '/GetContacts';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    try
    {

        xhr.send(jsonPayload); // sends to server, used for POST requests
        var jsonObject = JSON.parse(xhr.responseText);
        jsonObject = JSON.parse(jsonObject);
    }
    catch(err)
    {
        alert(err);
    }
  
  if(confirm("Are you sure you want to delete this contact?"))
  {
    // var i = r.parentNode.parentNode.rowIndex;
    
    // var del_FirstName = document.getElementById("First Name").value;
    
    var table = document.getElementById("contactsData");
    var tLength = table.tBodies.length;
    var tr = document.getElementById("contactsData").rows[tLength].cells.length;
    
    var j = "Table height " + (tLength+1) + "\nTable length "  + tr;


    // var i = getElementByClass("btn btn-primary").id;
    var i = getButtonIndex()

    var k = "Button number " + i;
    /*
    var del_FirstName = jsonObject[i]["FirstName"];
    var del_LastName = jsonObject[i]["LastName"];
    var del_PhoneNumber = jsonObject[i]["PhoneNumber"];
    var del_Email = jsonObject[i]["Email"];
    var s = "Yeet " + del_FirstName + " outta here!";
    */
    alert(i);
   
    
    // document.getElementById("contactsData").deleteRow(0);

    // var toBeDeleted ="";
    // var jsonPayload = '{ "UserID" : "' + window.name + '", "FirstName" : "' + del_FirstName + '", "LastName" : "' + del_LastName + '", "PhoneNumber" : "' + del_PhoneNumber + '", "Email" : "' + del_Email + '" }';
    /*
    var url = urlBase + '/DeleteContact';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    try
    {

      xhr.send(jsonPayload); // sends to server, used for POST requests

      var jsonObject = JSON.parse(xhr.responseText);
      jsonObject = JSON.parse(jsonObject);

    }
    catch(err)
    {
      // document.getElementById("loginResult").innerHTML = err.message;
      alert(err);
    }
    */
    // delete from DB
    // remove from table
    // force reload 
    getContacts();
  }
  // alert("delete clicked!");
  
  
}

function searchContacts() {

  var search = document.getElementById("Search").value;

  var contactList = document.getElementById("contactList");
  contactList.innerHTML = "";


  var jsonPayload = '{"UserID" : "' + window.name + '", "FirstName" : "' + search + '", "LastName" : "' + "" + '", "PhoneNumber" : "' + "" + '", "Email" : "' + "" + '", "ContactID" : "' + '' + '"}';
  var url = urlBase + '/SearchContacts';


  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
    xhr.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {

        var jsonObject = JSON.parse( xhr.responseText );

        jsonObject = JSON.parse(jsonObject);

        var i;
        for( i=0; i<jsonObject.length; i++ )
        {
          var opt = document.createElement("option");
          opt.text = jsonObject[i]["FirstName"] + " " +jsonObject[i]["LastName"];
          opt.value = "";
          contactList.options.add(opt);
        }
      }
    };
    xhr.send(jsonPayload);
  }
  catch(err)
  {
    alert(err);
  }
}
