// Users array that contain the information of all the users
let users = [];

//Array of users is stored in local storage as string
if( !localStorage.getItem("users") ){
    storeUsersArray(users);
}

//Create an "user" object
let User = function({
    name,
    email,
    dob,
    initial,
    password
}){
    //Date object is created with the given date of birth
    let date = new Date(dob);
    let age = Math.floor((new Date() - new Date(dob))/(1000*60*60*24*365))

    //A new object is created for the registered user
    let newUser = {
        name,
        email : email.toLowerCase(),
        dob: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
        age,
        password,
        balance: +initial,
        savings1 : {
            balance : 0
        },
        savings2 : {
            balance : 0
        }
    }

    return newUser;
}

// Register the user
const register = document.getElementById("register");
let registerUser = e =>{
    //The default page refresh is prevented
    e.preventDefault();

    //An user object that stores the details entered in the register form
    let user = {};
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.dob = document.getElementById("dob").value;
    user.initial = document.getElementById("initial").value;
    user.password = document.getElementById("password").value;

    //Check if the user email already exists
    let checkUser = getUsersArray().find(user => user.email === user.email.toLowerCase());
    
    if(!checkUser){
        //An object is created based on the details entered in the register form
        let newUser = new User(user);    

        //The array is retrieved from the local storage
        let usersArray = getUsersArray();

        //New object is added to the users array
        usersArray.push(newUser);

        //Modified array is stored in the local storage again
        storeUsersArray(usersArray);
        

        // addUser(newUser);
        alert("Registered successfully!");

        //Make the constraints red
        let constraints = document.querySelectorAll(".validator");
        for(let constraint of constraints){
            constraint.style.color = "red";
        }

        //The register form is cleared
        document.getElementById("registerForm").reset();

        //Redirect to login page
        showForm(document.getElementById("login"));
    }
    else{
        alert("The user already exists!");
        
        //The register form is cleared
        document.getElementById("registerForm").reset();
    }

   
}

