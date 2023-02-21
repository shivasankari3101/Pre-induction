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
    for (let i = 0; i < arr.length; i++) {
        if (filter[i]) {
            truth.push(arr[i]);
        }
        else {
            falsy.push(arr[i]);
        }
    }

    out.push(truth, falsy);
    return out;

}

//Output
console.log("Output for Qn-1:");
for (let i = 0; i < filters.length; i++) {
    const output = filter(arr, filters[i]);
    console.log(`After applying filter${i + 1} : [[${output.join("],[")}]]`);
}


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


//split() function of string is used to split the string based the delimitter and returns as array
const strings=[];
for (let i = 0; i < inputs.length; i++) {
    //Each string is split into an array based on the delimitter " "
    const string_arr = inputs[i].split(" ");
    strings.push(string_arr);
}

//Function to decapitalize
const decapitalize = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

//Output 
console.log("\nOutput for Qn-2:")
for (let i = 0; i < strings.length; i++) {
    /*Concatenation of first string and decapitalized second string using template literal */
    const out = `${strings[i][0]}${strings[i][1] ? decapitalize(strings[i][1]):" "}`;
    console.log(out);
}


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
for (let i = 0; i < ranges.length; i++) {
    let out;
    if (random(ranges[i][0] < ranges[i][1])) {
        out = random(ranges[i][0], ranges[i][1]);
    }
    else {
        out = random(ranges[i][1], ranges[i][0]);
    }
    console.log(out);
}


