//Show the details of the logged in user and show the menu
let showUser = (user) =>{

    //The form is hidden and the user page is made visible with the logged in user details
    document.getElementById("reg_login").style.display = "none";
    document.getElementById("user_page").style.display = "flex";
    document.getElementById("username").innerHTML = `Hi! ${user.name}`;

    //The user details that are entered while registering are displayed 
    let userDetails = document.getElementsByClassName("userDetails");
    userDetails[0].innerHTML = user.name;
    userDetails[1].innerHTML = user.email;
    userDetails[2].innerHTML = user.dob;
    userDetails[3].innerHTML = user.calcAge();
    userDetails[4].innerHTML = user.balance;
}

//Deposit amount to the current account
let deposit_amt = (e) =>{
    //The default page refresh is prevented
    e.preventDefault();

    //The current user is identified by the email
    let currentUser = document.getElementById("currentUser").innerHTML;

    //The deposit amount is accessed and is converted to Number
    let deposit_amount = +document.getElementById("deposit_amt").value;

    //The user of the email is found
    let user = users.find( user => (currentUser === user.email));

    //The balance is changed based on the deposit amount
    user.balance += deposit_amount;
    alert("Deposited successully!")
    document.getElementById("bal_amt").innerHTML = user.balance;

    //Cleared the deposit form
    document.getElementById("deposit").reset();
}


//Withdraw amount from the current account
let withdraw_amt = (e) =>{
    //The default page refresh is prevented
    e.preventDefault();

    //The current user is identified by the email
    let currentUser = document.getElementById("currentUser").innerHTML;
    let user = users.find( user => (currentUser === user.email));

    //The withdraw amount is accessed and is converted to Number
    let withdraw_amount = +document.getElementById("withdraw_amt").value;  

    //The balance is changed based on the deposit amount
    if(user.balance >= withdraw_amount){
        user.balance -= withdraw_amount;
        alert("Withdrawn successully!");
    }else{
        alert("No sufficient balance");
    }
    document.getElementById("bal_amt").innerHTML = user.balance;

    //Cleared the deposit form
    document.getElementById("withdraw").reset();
}

