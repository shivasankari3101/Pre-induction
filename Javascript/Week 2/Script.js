/**
 * 
 * Question 1
 * 
 * Design a digital clock using setInterval();
 */

let now = new Date;
let clock_ele = document.getElementById("clock");

//This function formation the time as two digits
const format = (time) =>{
    return time < 10 ? `0${time}` : time;
}

//This function displays the time in preferred format
const clock = () => {
    clock_ele.innerHTML =`${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
}

//The time is displayed
clock();

//The time is updated for every second using setInterval()
setInterval(()=>{
    now = new Date();
    clock();
},1000);


/**
 * 
 * Question 2
 * 
 * Implement findby key & value in objects recursively.
 */

let stud = {
    name:"Ram",
    age:15,
    marks:{
        eng:78,
        tam:89,
        mat:56,
        sci:{
            "sci-1":67,
            "sci-2":45,
        }
    }
};

//This function finds the value for the given key in the given nested object
let findby = function (key , obj) {
    for(let prop in obj) {
        if(prop === key) {
            return obj[prop];
        }
        else if (typeof obj[prop] == "object") { 
            return findby(key, obj[prop]);
        }
    }
}

//Find the marks for sci-1 which is nested in the object
console.log("Output for Qn-2:");
console.log(`Marks obtained in sci-1: ${findby("sci-1", stud)}`);





/**
 * 
 * Question 3
 * 
 * Write a JavaScript program to remove the key-value pairs corresponding to the given keys from
an object.
    Input:
    Object: { a: 1, b: '2', c: 3 }
    Key to be removed: ['b']
    Object: { a: 1, b: '2', c: 3 }
    Key to be removed: ['c’']

    Output:
    {"a":1,"c":3}
    {"a":1,"b":2}
 */

    let obj = { a: 1, b: '2', c: 3 };

    console.log("\nOutput for Qn-3:");

    //This function removes the property by the key value
    const remove = (key) => {
        key in obj ? delete obj[key] : console.error("key not found");
        console.log(`The object after removing "${key}":`);
        console.log(obj);
    }

    remove('b');
    remove('c');
    remove('e');
    
    let arr = [
        {name:"Shiva", age:13},
        {name:"Sankari", age:14},
        {name:"Priya", age:22}
    ]

    //This function removes the property from the array of objects
    const remove1 = (key, value, arr) =>{
        const i = arr.findIndex(item=> key in item && item[key] === value);
        delete arr[i][key];    
        console.log(`The array after removing "${key}:${value}":`);
        console.log(arr);
    }

    //Remove age:14 from the array of objects
    remove1("age",14, arr);


/**
 * 
 * Question 4
 * 
 * Write a JavaScript program to filter out duplicate values in an array
 * 
    Input:
    [1, 2, 2, 3, 4, 4, 5]
    [6,6,8,8,9]
    [1,2,3,4]

    Output
    [1,3,5]
    [9]
    [1,2,3,4]
 */

  //Arrays
  let arr1 = [];
  arr1[0]= [1, 2, 2, 3, 4, 4, 5];
  arr1[1] = [6, 6, 8, 8, 9];
  arr1[3] = [1, 2, 3, 4];

  //Function to filter the duplicates
  const filter_dup = (arr) =>{
     let map= new Map();
     let new_arr =[];

     //A map is created to store the frequency of each element
     arr.forEach(function(current){
        (!map.has(current)) ? map.set(current, 1) : map.set(current, map.get(current)+ 1);
     });

     //The map elements with 1 are pushed to the array that is returned finally
     map.forEach((value,key)=>{
        (value == 1) ? new_arr.push(key) : {};
     })

     return new_arr;     
  }


  //Execution of filter function for each array
  console.log("\nOutput for Qn-4:");
  arr1.forEach(function(current){
    console.log("\nArray before removing duplicates:");
    console.log(current);
    console.log("\nArray after removing duplicates:")
    console.log(filter_dup(current));
  })