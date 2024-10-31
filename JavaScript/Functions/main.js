// Simple Function
 
 
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

//  Function with Parameters
 
 
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Aliyan"); // Output: Hello, Aliyan!

//  Function with Return Value
 
 
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log(sum); // Output: 8

//  Function with Default Parameters
 
 
function multiply(x, y = 1) {
    return x * y;
}
console.log(multiply(5));    // Output: 5
console.log(multiply(5, 2)); // Output: 10

//  Function with Rest Parameters
 
 
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//  Function Expression
 
 
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 4)); // Output: 6

//  Arrow Function
 
 
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // Output: 5

//  Function Returning an Object
 
 
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
let person = createPerson("Aliyan", 25);
console.log(person); // Output: { name: 'Aliyan', age: 25 }

//  Recursive Function
 
 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

//  Higher-Order Function
 
 
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
console.log(applyOperation(5, 3, add)); // Output: 8