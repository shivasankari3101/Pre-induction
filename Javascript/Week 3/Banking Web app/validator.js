//Check if any input field is empty
const checkEmpty = (inputs) =>{
    let flag = false;
    for(let input of inputs){
        if(input.value === ""){
            flag = true;
            break;
        }
    }
    return flag;
}


//Form validation for Login form
const validateSignIn = (e) =>{

    //Get details about the target of the event
    const element = e.target.getAttribute("id");
    const input = e.target.value;

    //Constraint
    const emailValidator = document.querySelectorAll(".emailValidator")[1];

    //Email validation
    if(element === "login_email"){
        //Regular expression - [any string]@[any string].[any string]
        const emailPattern = /[^\s@]+@([^\s@]+\.)+[^\s@]+$/;

        //Email validation
        ( !emailPattern.test(input) ) ? emailValidator.classList.remove("correct") : emailValidator.classList.add("correct");
    }

    //To enable the submit button if all the inputs are perfect
    const warnings = document.querySelectorAll("#warningSignIn .correct");
    const inputs = document.querySelectorAll("#login .loginInput");
    const button = document.querySelector("#loginSubmit");
    (warnings.length) && !checkEmpty(inputs) ? button.disabled = false : button.disabled = true;
}


//Form validation for SignUp form
const validateSignUp = (e) => {
    //Get details about the target of the event
    const element = e.target.getAttribute("id");
    const input = e.target.value;

    //Constraints
    const nameValidator = document.querySelectorAll(".nameValidator")[0];
    const emailValidator = document.querySelectorAll(".emailValidator")[0];
    const dobValidator = document.querySelectorAll(".dobValidator")[0];
    const amtValidator = document.querySelectorAll(".amtValidator")[0];
    const passwordValidators = document.querySelectorAll(".passwordValidator");

    //Validation for each field
    switch(element){
        case "name" : {
            ( input.length <= 15 ) && ( input.length )  ? nameValidator.classList.add("correct") : nameValidator.classList.remove("correct");
            break;
        }

        case "email": {
            //Regular expression - [any string]@[any string].[any string]
            const emailPattern = /[^\s@]+@([^\s@]+\.)+[^\s@]+$/;

             //Email validation
            ( !emailPattern.test(input) ) ? emailValidator.classList.remove("correct") : emailValidator.classList.add("correct");
            
            break;
        }

        case "dob" :{
            //Check if the minimum age is 2
            const age = Math.floor((new Date() - new Date(input))/(1000*60*60*24*365));
            age >=2 ? dobValidator.classList.add("correct") : dobValidator.classList.remove("correct");
            break;
        }

        case "initial":{
            //Check if the initial deposit is greater than 500
            (input >= 500) ?  amtValidator.classList.add("correct") : amtValidator.classList.remove("correct");
            break;
        }

        case "password":{
            //Password should contain atleast one Uppercase letter, one digit, one Special character and length 8

            //8 characters
            ( (/.{8,}/).test(input) ) ? passwordValidators[0].classList.add("correct") : passwordValidators[0].classList.remove("correct");

            //Atleast one uppercase letter
            ( (/([A-Z])/).test(input) ) ? passwordValidators[1].classList.add("correct") : passwordValidators[1].classList.remove("correct");

             //Atleast one digit
             ( (/\d/).test(input) ) ? passwordValidators[2].classList.add("correct") : passwordValidators[2].classList.remove("correct");

             //Atleast one special character
             ( (/[\[\]\{\}\(\)\\\^\$\.\|\?\*\+!@#%&\-:";'\<\>]/).test(input) ) ? passwordValidators[3].classList.add("correct") : passwordValidators[3].classList.remove("correct");

             break;
        }
        
    }

    //To enable the submit button if all the inputs are perfect
    const warnings = document.querySelectorAll("#warningSignUp .correct");
    const inputs = document.querySelectorAll("#register .signUpInput");
    const button = document.querySelector("#signInSubmit");
    (warnings.length === 8 && !checkEmpty(inputs) ) ? button.disabled = false : button.disabled = true;

}


//Show password
const showPassword = (ele) =>{
    const password = ele.previousElementSibling;
    ele.classList.toggle("fa-eye");
    password.type = ( password.type === "password" ) ? "text" : "password";
}


//Validate deposit and withdraw form
const validateDeposit = () =>{
    let depositInput = document.getElementById("deposit_amt").value;
    let acccount = checkAccount(document.getElementsByName("deposit_account"));

    let depositSubmit = document.getElementById("depositSubmit");
    (depositInput !== "" && acccount !== null) ? depositSubmit.disabled = false : depositSubmit.disabled = true;
}

//Validate deposit and withdraw form
const validateWithdraw = () =>{
    let withdrawInput = document.getElementById("withdraw_amt").value;
    let acccount = checkAccount(document.getElementsByName("withdraw_account"));

    let withdrawSubmit = document.getElementById("withdrawSubmit");
    (withdrawInput !== "" && acccount !== null) ? withdrawSubmit.disabled = false : withdrawSubmit.disabled = true;
}




