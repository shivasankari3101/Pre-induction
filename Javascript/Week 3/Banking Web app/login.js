//User authentication
let checkUser = (email, password) => {
    //Checks if the user exists with the given credentials
    return getUsersArray().find( user => (email.toLowerCase() === user.email) && (password === user.password));
}

//Get login credentials and verify
let verifyUser = (e) => {
    //The default page refresh is prevented
    e.preventDefault();

    //The details entered in the login form are stored in variables
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;

    //The function checks if the user exists
    let user = checkUser(email, password);

    //The user will be logged in if the credentials are right
    if( user ){
        alert("Login successul!");
        showUser(user);
    }
    else{
        alert("Email or password is incorrect");
        document.getElementsByClassName("emailValidator")[1].classList.remove("correct");

    }

    //The login form is cleared
    document.getElementById("loginForm").reset();
}


//Log out from the current account
let logout = (e) =>{
    e.preventDefault();

    //The user details are removed
    let userDetails = document.getElementsByClassName("userDetails");

    for(let element of userDetails){
        element.innerHTML = "";
    }

    //Redirected to the login page
    document.getElementById("reg_login").style.display = "flex";
    document.getElementById("user_page").style.display = "none";

    //Show the right button(LOgIn or Logout)
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
    document.getElementsByClassName("emailValidator")[1].classList.remove("correct");


  
}
