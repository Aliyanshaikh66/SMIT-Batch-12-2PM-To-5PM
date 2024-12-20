// // Chapter No:20. For Loops: Nested (5 Examples)

// // **Example 1: Nested loop to print a 3x3 grid of numbers**

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }
// // Output:
// // 1 1, 1 2, 1 3
// // 2 1, 2 2, 2 3
// // 3 1, 3 2, 3 3

// // **Example 2: Multiplication table (from 1 to 5)**

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
// // Output: Multiplication table from 1 to 5

// // **Example 3: Nested loop to print a pattern**

// for (let i = 1; i <= 4; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += '* ';
//   }
//   console.log(row);
// }
// // Output:
// // *
// // * *
// // * * *
// // * * * *

// // **Example 4: Iterating through a 2D array**

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }
// // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9

// // **Example 5: Checking for common elements between two arrays**

// let array1 = [1, 2, 3, 4];
// let array2 = [3, 4, 5, 6];

// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {
//       console.log(`Common element: ${array1[i]}`);
//     }
//   }
// }
// // Output: Common element: 3, Common element: 4

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "lahore", "kpk", "islamabad"];
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//   alert(cleanestCities[i]);  
// }
// }
//  Assignment 1
// // var cityToCheck = "KaRaCHI";
// // var cityToCheck1 = "Lahore";
// // var firstChar = cityToCheck.slice(0, 1);
// // var otherChars = cityToCheck.slice(1);
// // firstChar = firstChar.toUpperCase();
// // otherChars = otherChars.toLowerCase();
// // var cappedCity = firstChar + otherChars;
// // console.log(cappedCity);

// Assignment 2
// // var month = prompt("Enter a month");
// // var charsInMonth = month.length;
// // if (charsInMonth > 5) {
// // monthAbbrev = month.slice(0, 5);
// // console.log(monthAbbrev);
// //  }

// Assignment 3
// // let str = "JavaScript Programming";

// // // Measuring string length
// // let length = str.length;
// // console.log(length);  // Output: 23
// Assignment 4
// // // Extracting parts of the string using slice
// // let part = str.slice(0, 10);  // Extracts from index 0 to 9 (10 characters)
// // console.log(part);  // Output: "JavaScript"
// Assignment 15
// // // Extracting using substring
// // let part2 = str.substring(4, 14);  // Extracts from index 4 to 13
// // console.log(part2);  // Output: "Script Pro"

// var text = "Aman"
// console.log(text);
//  for (var i = 0; i < text.length; i++) {
//  if (text.slice(i, i + 15) === "Aman") {
//  text = text.slice(0, i) + "Muhammad Aman" + text.slice(i + 15);
//  }
// }
// console.log(text);

// chapter 23 repeat

// var text = prompt("Enter your Email only gmail account");
// for (var i = 0; i < text.length; i++) {
//  if (text.slice(i) === "@gmail.com") {
//  console.log("You are successful login");
//  }
//  else {
//     console.log("invalid Email");
//     break;
// }
//  }

var text = prompt("Enter your Email (only Gmail accounts are allowed)");

if (text.slice(-10) === "@gmail.com") {
    console.log("You are successfully logged in");
} else {
    alert("Invalid Email")
    // console.log("Invalid Email");
}

// var text = "apple";
// var segments = text.split(""); 
// console.log(segments); 
// // Output: [a,p,p,l,e]

// const text = "Hello";
// const segmentLength = 1;
// const segments = [];

// for (let i = 0; i <= text.length - segmentLength; i++) {
//     segments.push(text.slice(i, i + segmentLength));
// }

// console.log(segments); // Output:  ['H', 'e', 'l', 'l', 'o']

// Switch Case Statemant




