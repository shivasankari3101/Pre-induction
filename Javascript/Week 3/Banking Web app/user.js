//Show the details of the logged in user and show the menu
const showUser = (user) =>{

    //The form is hidden and the user page is made visible with the logged in user details
    document.getElementById("reg_login").style.display = "none";
    document.getElementById("user_page").style.display = "flex";

    //Show the right button(LOgIn or Logout)
    document.getElementById("logInButton").style.display = "none";
    document.getElementById("logout").style.display = "block";

    //Display the user name
    document.getElementById("username").innerHTML = `Hi! ${user.name}`;

    //The user details that are entered while registering are displayed 
    let userDetails = document.getElementsByClassName("userDetails");
    userDetails[0].innerHTML = user.name;
    userDetails[1].innerHTML = user.email;
    userDetails[2].innerHTML = user.dob;
    userDetails[3].innerHTML = user.calcAge();
    userDetails[4].innerHTML = user.balance;
    userDetails[5].innerHTML = user.savings1.balance;
    userDetails[6].innerHTML = user.savings2.balance;
}

//Check the account for deposit/withdraw
const checkAccount = (elements) =>{
    let val;
    elements.forEach(element => {
        if(element.checked) 
            val = element.value;
    })
    return val;
}


//Deposit amount to the current account
const deposit_amt = (e) =>{
    //The default page refresh is prevented
    e.preventDefault();

    //The current user is identified by the email
    let currentUser = document.getElementById("currentUser").innerHTML;

    //The deposit amount is accessed and is converted to Number
    let deposit_amount = +document.getElementById("deposit_amt").value;

    //The user of the email is found
    let user = users.find( user => (currentUser === user.email));

    //The account to be deposited is identified
    let account = checkAccount(document.getElementsByName("deposit_account"));

    //The user details
    let userDetails = document.getElementsByClassName("userDetails");

    //The balance is changed based on the deposit amount
    switch(account){
        case "current": {
            user.balance += deposit_amount;
            userDetails[4].innerHTML = user.balance;
            break;
        }
        case "savings1": {
            user.savings1.balance += deposit_amount;
            userDetails[5].innerHTML = user.savings1.balance;
            break;
        }
        case "savings2":{
            user.savings2.balance += deposit_amount;
            userDetails[6].innerHTML = user.savings2.balance;
            break;
        }
    }
    
    

    //Cleared the deposit form
    document.getElementById("deposit").reset();
}


//Withdraw amount from the current account
const withdraw_amt = (e) =>{
    //The default page refresh is prevented
    e.preventDefault();

    //The current user is identified by the email
    let currentUser = document.getElementById("currentUser").innerHTML;
    let user = users.find( user => (currentUser === user.email));

    //The withdraw amount is accessed and is converted to Number
    let withdraw_amount = +document.getElementById("withdraw_amt").value; 
    
    //The account to be withdrawn from is identified
    let account = checkAccount(document.getElementsByName("withdraw_account"));

    //The user details
    let userDetails = document.getElementsByClassName("userDetails");

    //The balance is changed based on the withdraw amount
    switch(account){
        case "current": {
            user.balance >=withdraw_amount ? user.balance -= withdraw_amount : alert("No sufficient balance in current acccount");
            userDetails[4].innerHTML = user.balance;
            break;
        }
        case "savings1": {
            user.savings1.balance >= withdraw_amount ? user.savings1.balance -= withdraw_amount : alert("No sufficient balance in savings 1 acccount");
            userDetails[5].innerHTML = user.savings1.balance;
            break;
        }
        case "savings2":{
            user.savings2.balance >= withdraw_amount ? user.savings2.balance -= withdraw_amount : alert("No sufficient balance in savings 2 acccount");
            userDetails[6].innerHTML = user.savings2.balance;
            break;
        }
    }

    //Cleared the deposit form
    document.getElementById("withdraw").reset();
}




