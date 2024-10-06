
// For Loops: Flags, Booleans, Array Length, and Breaks (5 Examples)

// **Example 1: Find the first even number in an array**
js
let num1 = [1, 3, 5, 8, 9, 10];
let found1 = false;

for (let i = 0; i < num1.length; i++) {
  if (num1[i] % 2 === 0) {
    found = true;
    console.log("First even number is:", num1[i]);
    break;  // Stop once the first even number is found
  }
}

if (!found) {
  console.log("No even numbers found.");
}


// **Example 2: Loop with a Boolean flag to check if number 50 exists**
js
let num2 = [10, 25, 37, 50, 67];
let isFiftyFound = false;

for (let i = 0; i < num2.length; i++) {
  if (num2[i] === 50) {
    isFiftyFound = true;
    console.log("Number 50 found!");
    break;
  }
}

if (!isFiftyFound) {
  console.log("50 not found in the array.");
}


// **Example 3: Sum numbers and stop when the sum exceeds 15**
js
let numbers = [3, 5, 7, 2, 8];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (sum > 15) {
    console.log("Sum exceeded 15, stopping at:", sum);
    break;
  }
}
// Output: Sum exceeded 15, stopping at: 17


// Example 4: Print only odd numbers from an array using continue
js
let number = [4, 7, 9, 12, 15];

for (let i = 0; i < number.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log("Odd number:", number[i]);
}
// Output: 7, 9, 15


// Example 5: Find a word in an array of strings and break

let words = ["apple", "banana", "grape", "mango"];
let found = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "grape") {
    found = true;
    console.log("Found grape at index", i);
    break;
  }
}

if (!found) {
  console.log("Grape not found.");
}
// Output: Found grape at index 2
