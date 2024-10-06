// For Loops
// A for loop allows you to repeat a block of code for a specified number of times. It’s commonly used to iterate over arrays.

// for (initialization; condition; increment) {
//     // Code to execute
// }

var num = prompt("Enter Your Number")
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let fruit = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]); // Prints each fruit
}
// Output: "Apple", "Banana", "Orange"

// Create an array of five numbers and use a for loop to print each number.


// For Loops: Flags, Booleans, Array Length, and Breaks
// You can use flags (Boolean values) to control loops and break to exit a loop early.

// Flag: A Boolean value (true/false) that controls whether an event occurred.
// Array length: The number of elements in an array (array.length).
// Break: Exits the loop when a certain condition is met.

<<<<<<< HEAD
let fruites = ["Apple", "Banana", "Orange"];
let found = false;

for (let i = 0; i < fruites.length; i++) {
    if (fruites[i] === "Banana") {
// =======
// let fruits = ["Apple", "Banana", "Orange"];
// let found = false;

for (let i = 1; i < fruits.length; i++) {
    if (fruits[i] === "Apple") {
// >>>>>>> feb649fe031e2854909f5240c95f339caa1f0837
        found = true;
        console.log("is found!");
        break; // Stops the loop once "Banana" is found
    }
        else {
        (fruits[i] === "Banana")
        found = true
        console.log("is found!");
        break; // Stops the loop once "Banana" is found   

}      
}

// Create an array of five numbers. Use a loop to find a specific number and stop the loop once it’s found.


// For Loops: Nested


// Nested loops are loops inside other loops, which can be useful when working with multi-dimensional arrays (arrays of arrays).

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]); // Prints each element of the 2D array
    }
}

// Output: 1 2 3 4 5 6 7 8 9


// Create a 2D array representing a 3x3 matrix of numbers. Use nested loops to print each element of the matrix.
// var city = prompt ("Enter a City Name"); 

// var Cities = ["karachi" , "Lahore" , "Islamabad" , "larkana"]
 
var matchFound = "no";
 for (var i = 0; i <= 4; i++){
    if (Cities[0] === city) {
      matchFound = "yes";
      alert("The City of Light");
    }
    else if (Cities[1] === city) {
        matchFound = "yes";
        alert("Lahore");
      }
      else if (Cities[2] === city) {
        matchFound = "yes";
        alert("Islamabad");
      }
      else if (Cities[3] === city) {
        matchFound = "yes";
        alert("Sindh");
      }

}
//   if (matchFound === "no") {
//     alert("It's not on the list");
//  }



//  syntex loop


for (let i = 0; i < 3; i++){ 
    console. log("Hello, world!") 
} 