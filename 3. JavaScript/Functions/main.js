// 1-Simple Function

// function sayHello() {
// console.log("Hello,world!!");
// }
// sayHello();
// // Output: Hello, World!

//  2-Function with Parameters

// function greet()
// {name = prompt("Enter Your Name")
//     console.log("Hello, " + name + "!");
// }
// greet();
// Output: Hello, Aliyan!

// 3-Function with Return Value

// function add(a, b) {
//     return a * b;
// }
// let sum = add(5, 3);
// console.log(sum); // Output: 8

// 4-Function with Default Parameters

// function multiply(x, y = 15) {
//     return x * y;
// }
// // console.log(multiply());    // Output: 5
// console.log(multiply(5, 2)); // Output: 10

// //  5-Function with Rest Parameters

// function sumAll(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// //  Function Expression

// const subtract = function(a, b) {
//     return a - b;
// };
// console.log(subtract(10, 4)); // Output: 6

// //  Arrow Function

// const divide = (a, b) => a / b;
// console.log(divide(20, 4)); // Output: 5

// //  Function Returning an Object

// function createPerson(name, age) {
//     return {
//         name: name,
//         age: age
//     };
// }
// let person = createPerson("Aliyan", 25);
// console.log(person); // Output: { name: 'Aliyan', age: 25 }

// //  Recursive Function

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120

// //  Higher-Order Function

// function applyOperation(a, b, operation) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;
// console.log(applyOperation(5, 3, add)); // Output: 8











// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//     orderTot = merchTot;
//     }
//     else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//     }
//     else {
//     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     }
//     return orderTot;
//      }
//      console.log(calcTot(50));

// Local & Global Variable

// function addNumbers() {
//        var theSum = 2 + 2;
//        return theSum;
//      }

// function subNumbers() {
//            var theSum = 2 - 2;
//            return theSum;
//          }
//          console.log(addNumbers());