//Retrieve the array of users
const getUsersArray = () => JSON.parse(localStorage.getItem("users"));

//Store the json-converted array in localstorage
const storeUsersArray = (array) => localStorage.setItem("users", JSON.stringify(array));;