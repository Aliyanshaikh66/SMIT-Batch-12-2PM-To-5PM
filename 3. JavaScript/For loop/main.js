
// For Loop
// Example: Printing even numbers between 1 and 10.


for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Explanation: The loop starts at 2 and increments by 2 each time, printing only the even numbers from 2 to 10.


// While Loop
// Example: Reversing a number (e.g., reversing 1234 to 4321).

let num = 1234;
let reversed = 0;

while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reversed); // Output: 4321


// Explanation: This loop extracts the last digit of the number, adds it to the reversed number, and removes the last digit from the original number until it becomes 0.


// Do-While Loop
// Example: Asking the user for input until they enter a specific value (using `prompt` for illustration).

let input;

do {
    input = prompt("Enter 'yes' to stop:");
} while (input !== "yes");

console.log("You entered 'yes', loop stopped.");


// Explanation: The loop asks for input until the user types "yes". The `do-while` loop ensures that the prompt is shown at least once.


// For...of Loop
// Example: Looping through a string and printing each character.


let word = "JavaScript";

for (let char of word) {
    console.log(char);
}


// Explanation: The `for...of` loop iterates through each character of the string "JavaScript" and prints each one.


// For...in Loop (Object)
// Example: Looping through the properties of an object.


let student = {
    name: "Ali",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}


// Explanation: The `for...in` loop iterates over the keys of the `student` object and prints each key-value pair.

// Break and Continue
// Example: Finding the first number divisible by 7 between 1 and 100.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("First number divisible by 7 is:", i);
        break; // Exit the loop after finding the first divisible number
    }
}


// Explanation: The `break` statement is used to exit the loop as soon




// For Loops (5 Examples)

Example 1: Count from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// Example 2: Print even numbers from 0 to 20

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


// Example 3: Print elements of an array

let cities = ["Karachi", "Lahore", "Islamabad"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
// Output: Karachi, Lahore, Islamabad


// Example 4: Sum of numbers from 1 to 5

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); 
// Output: 15 (1 + 2 + 3 + 4 + 5)


// Example 5: Multiply each number by 2 and print

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
// Output: 2, 4, 6, 8, 10


