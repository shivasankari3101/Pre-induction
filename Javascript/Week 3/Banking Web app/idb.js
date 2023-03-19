//A db is created
let openRequest = indexedDB.open("db", 1);

let db;

//On successfull DB creation
openRequest.onsuccess = () => console.log("DB created successfully!");

//When there is error in DB creation
openRequest.onerror = () => console.error("Error in DB creation!");

// create/upgrade the database without version checks
openRequest.onupgradeneeded = function() {
  db = openRequest.result;
  if (!db.objectStoreNames.contains("users")) { // if there's no "books" store
    db.createObjectStore("users", {keyPath: 'id'}); // create it
  }
};


const addUser = (user) =>{
    let transaction = db.transaction("users", "readwrite");

    let users = transaction.objectStore("users");

    let request = users.add(user);

    request.onsuccess = () => alert("Registered successfully!");
    request.onerror = () => alert("Error in registering");

}