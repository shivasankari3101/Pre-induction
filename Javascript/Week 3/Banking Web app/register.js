// Users array that contain the information of all the users
let users = [];


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

    //A new object is created for the registered user
    let newUser = {
        name,
        email,
        dob: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
        calcAge(){
            this.age = Math.floor((new Date() - new Date(dob))/(1000*60*60*24*365));
            return this.age;
        },
        password,
        balance: +initial
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

    //An object is created based on the details entered in the register form
    let newUser = new User(user);

    //The object created for the new user is added to the users array
    users.push(newUser);
    alert("Registered successfully!");

    //The register form is cleared
    document.getElementById("register").reset();
}

