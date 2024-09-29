// Simple Array


let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Output: "Apple" (first element)
console.log(fruits[2]); // Output: "Orange" (third element)


// Arrays: Adding and Removing Elements

// You can add or remove elements from an array using methods like push(), pop(), unshift(), and shift().

// push() adds an element to the end of the array.
// pop() removes an element from the end of the array.
// unshift() adds an element to the beginning of the array.
// shift() removes an element from the beginning of the array.


let fruits = ["Apple", "Banana"];
fruits.push("Orange"); // Adds "Orange" to the end
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

fruits.pop(); // Removes "Orange" from the end
console.log(fruits); // Output: ["Apple", "Banana"]

fruits.unshift("Grapes"); // Adds "Grapes" to the beginning
console.log(fruits); // Output: ["Grapes", "Apple", "Banana"]

fruits.shift(); // Removes "Grapes" from the beginning
console.log(fruits); // Output: ["Apple", "Banana"]


// Arrays: Removing, Inserting, and Extracting Elements

// The splice() method allows you to remove, insert, or extract elements at any position in the array.

// Remove elements: splice(index, count)
// Insert elements: splice(index, 0, element)
// Replace elements: splice(index, count, element)


let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1); // Removes 1 element at index 1 ("Banana")
console.log(fruits); // Output: ["Apple", "Orange"]

fruits.splice(1, 0, "Grapes"); // Inserts "Grapes" at index 1
console.log(fruits); // Output: ["Apple", "Grapes", "Orange"]

fruits.splice(1, 1, "Mango"); // Replaces "Grapes" with "Mango"
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]
