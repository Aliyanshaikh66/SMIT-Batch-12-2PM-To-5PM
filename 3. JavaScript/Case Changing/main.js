// Here are the JavaScript examples for the concepts you want to cover:

// ### 1. **Changing Case**
// In JavaScript, you can change the case of a string using two main methods: 
// toUpperCase() for converting the string to uppercase.
// toLowerCase() for converting the string to lowercase.

//  Example: 01

let text = "Hello World";

// Convert to uppercase
let upperText = text.toUpperCase(); 
console.log(upperText);  // Output: "HELLO WORLD"

// Convert to lowercase
let lowerText = text.toLowerCase(); 
console.log(lowerText);  // Output: "hello world"


// Measuring String Length and Extracting Parts
// To measure the length of a string, use the `.length` property.
// To extract a part of a string, use methods like `slice()`, `substring()`, or `substr()`.

// Example: 02

let str = "JavaScript Programming";

// Measuring string length
let length = str.length;
console.log(length);  // Output: 23

// Extracting parts of the string using slice
let part = str.slice(0, 10);  // Extracts from index 0 to 9 (10 characters)
console.log(part);  // Output: "JavaScript"

// Extracting using substring
let part2 = str.substring(4, 14);  // Extracts from index 4 to 13
console.log(part2);  // Output: "Script Pro"


// Finding Segments (Substring)
// You can find a specific segment or substring using `indexOf()` or `lastIndexOf()`.
// These methods return the position of the first/last occurrence of the substring.

// Example: 03

let sentence = "Learning JavaScript is fun";

// Finding the position of a segment
let position = sentence.indexOf("JavaScript");  
console.log(position);  // Output: 9

// Finding the last occurrence of a segment
let lastPosition = sentence.lastIndexOf("is");
console.log(lastPosition);  // Output: 18






