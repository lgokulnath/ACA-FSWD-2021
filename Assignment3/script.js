console.log('Starting');

document.getElementById('token').focus();

// function to show the token 

let token_button = document.getElementById('token')
token_button.onclick =  async function  ()   {
    let url="http://localhost:12345/get_token";
    let response = await fetch(url);
    console.log(response);
    if(response.ok)  {
        let token = await response.text();
        let token_1 = String(token);
        let token_2 = token_1.substr(13);
        let token_final = token_2.replace('}', '');
        document.getElementById('b').innerHTML = String(token_final);
    }
    else {
        alert('HTTP-Error: ' + response.status);
    }
}

//function to register the user

let register = document.getElementById("Register")
register.onclick = async function () {
    var user = {
        "username" : String(document.getElementById("Name").value),
        "data" : String(document.getElementById("Data").value),
        "token" :  String(document.getElementById("Token").value),
    }
    let req = await fetch('http://localhost:12345/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
        });
    console.log(req);
    if(req.ok) {
        alert('Hi ' + user.username+'! You are successfully registered! Thanks.');
        document.getElementById("Name").value = '';
        document.getElementById("Data").value = '';
        document.getElementById("Token").value = '';
        document.getElementById('b').innerHTML = '';
    } 
    else {
        let result = await req.json();
       // alert(String(result.message));
        alert('Sorry! There is some error');
        
    }
}

//function to show data of registered user

let disp= document.getElementById("display_info");
disp.onclick =  async function (){
     var disp_token = {
         "token" : String(document.getElementById("token1").value)
     }
     let req1 = await fetch('http://localhost:12345/get_data' , {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(disp_token)
     })
     console.log(req1);
     if(req1.ok) {
      
        let x = await req1.text();
        document.getElementById('d').innerHTML = String(x);
     }

     else {
        document.getElementById('d').innerHTML = '';
         alert('Sorry! We could not find your data.');
     }
}