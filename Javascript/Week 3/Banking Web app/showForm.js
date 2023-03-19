//show forms
const showForm = (element) => {

    //get what form to display when the button is clicked using id attribute
    const action =  element.getAttribute("data-function");

    //get all the forms in one variable and made display:none to all
    const temp =document.querySelectorAll(".temp");
    temp.forEach((ele) => ele.style.display = "none");

    //diplay based on the action variable(which form to display)
    action === "login" ? temp[1].style.display = "block" : temp[2].style.display = "block";

    //display validation
    const validationSignIn = document.getElementById("warningSignIn");
    const validationSignUp = document.getElementById("warningSignUp");

    temp[1].style.display === "block" ? validationSignIn.style.display = "block" : validationSignIn.style.display = "none";  
    temp[2].style.display === "block" ? validationSignUp.style.display = "block" : validationSignUp.style.display = "none";
   

}