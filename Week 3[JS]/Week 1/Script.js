/*
 * 
 * Question 1
 * 
 * Write a JavaScript program to split the values of two given arrays into two groups.If an element in the filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

Input:
[1, 2, 3, 4], [true, true, false, true]
[1, 2, 3, 4], [true, true, true, true]
[1, 2, 3, 4], [false, false, false, false]

Output:
[[1, 2, 4], [3]]
[[1, 2, 3, 4], []]
[[], [1, 2, 3, 4]]

*/

//Array 
const arr = [1, 2, 3, 4];

//Filters
const filters = [];
filters[0] = [true, true, false, true];
filters[1] = [true, true, true, true];
filters[2] = [false, false, false, false];

//Function that filters the array
const filter = (arr, filter) => {
    const out = [];
    const truth = [];
    const falsy = [];

    arr.forEach(function (item) {
        item ? truth.push(item) : falsy.push(item);
    })

    out.push(truth, falsy);
    return out;

}

//Output
console.log("Output for Qn-1:");

filters.forEach(function (item,index) {
    const output = filter(arr, item);
    console.log(`After applying filter${index + 1} : [[${output.join("],[")}]]`);
})


/*
 * 
 * Question 2
 * 
 * Given two strings, write a program to decapitalize the first letter of the second string and join the two strings.

 Input:
    W3 Schools
    Red Orange
    Black

 Output:
    W3schools
    Redorange
    Black

*/

//String inputs
const inputs = [];
inputs[0] = "W3 Schools";
inputs[1] = "Red Orange";
inputs[2] = "Black";


//Function to decapitalize
const decapitalize = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}


//Output 
console.log("\nOutput for Qn-2:")

//split() function of string is used to split the string based the delimitter and returns as array
inputs.forEach(function(input){
  //Each string is split into an array based on the delimitter " "
  const string_arr = input.split(" ");
  let result ="";
  string_arr.forEach(function(item,index){
     result += index>0 ? decapitalize(item): item;
  })

  console.log(result);
}) 

/*
 * 
 * Question 3
 * 
 * Write a JavaScript program to get a random integer in the specified range.
Input (Range):
    (0, 5)
    (2, 5)
    (5, -5)
    (-2, -7)
Output:
     1
     3
    -1
    -4
*/

//Ranges
const ranges = [[0, 5], [2, 5], [5, -5], [-2, -7]];

//Function to generate random number
const random = (lower, upper) => {
    const rand = Math.random() * (upper - lower) + lower;
    return Math.round(rand);
}

//Output
console.log("\nOutput for Qn-3:")

ranges.forEach(function (item) {
    const num1 = item[0];
    const num2 = item[1];

    let out = (num1 <= num2) ? random(num1, num2) : random(num2, num1);
    console.log(out);
})


/*
*
* Question 4
* 
* Code for array findBy, filterBy, sortBy inbuilt functions. Come up with your own custom
prototype function.
*/


