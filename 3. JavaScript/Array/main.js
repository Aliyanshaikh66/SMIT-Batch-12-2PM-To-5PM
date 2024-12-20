// // Simple Array

// let fruit = ["Apple", "Banana", "Orange"];
// console.log(fruit[0]); // Output: "Apple" (first element)
// console.log(fruit[2]); // Output: "Orange" (third element)

// // Arrays: Adding and Removing Elements

// // You can add or remove elements from an array using methods like push(), pop(), unshift(), and shift().

// // push() adds an element to the end of the array.
// // pop() removes an element from the end of the array.
// // unshift() adds an element to the beginning of the array.
// // shift() removes an element from the beginning of the array.

// let fruits = ["Apple", "Banana"];
// fruits.unshift("orange"); // Adds "Orange" to the end
// console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// fruits.pop(); // Removes "Orange" from the end
// console.log(fruits); // Output: ["Apple", "Banana"]

// fruits.unshift("Grapes"); // Adds "Grapes" to the beginning
// console.log(fruits); // Output: ["Grapes", "Apple", "Banana"]

// fruits.shift(); // Removes "Grapes" from the beginning
// console.log(fruits); // Output: ["Apple", "Banana"]

// // Arrays: Removing, Inserting, and Extracting Elements

// // The splice() method allows you to remove, insert, or extract elements at any position in the array.

// // Remove elements: splice(index, count)
// // Insert elements: splice(index, 0, element)
// // Replace elements: splice(index, count, element)

// let fruites = ["Apple", "Banana", "Orange",];
// fruites.splice(2,0); // Removes 1 element at index 1 ("Banana")
// console.log(fruites); // Output: ["Apple", "Orange"]

// // Inserting Function

// fruites.splice(1, 0, "Grapes"); // Inserts "Grapes" at index 1
// console.log(fruites); // Output: ["Apple", "Grapes", "Banana, "Orange"]

// // updateing Function

// fruites.splice(1, 1, "Mango"); // Replaces "Grapes" with "Mango"
// console.log(fruites); // Output: ["Apple", "Mango", "Orange"]

// splice : index,length

// var fruits = ["Apple","Mango","Grapes","Kiwi"]

// console.log(fruits);
// fruits.splice(2,0,"orange","papaya");

// console.log(fruits);

// slice : index,length

// var fruits = ["Apple","Mango","Grapes","Kiwi"]

// console.log(fruits.slice(0,2));

// var arr = new Array("Apple","Mango","Grapes","Kiwi")
// console.log(arr);

// sort();
// var nums = ["1","7","3","6","9"]
// console.log(nums);
// nums.sort()
// console.log(nums);

// join():  array method

// var names = ["ali","raza","khan","sahab"]
// console.log(names.join(" "));

// split : string method
// var str = "aliyan sahab sir"

// console.log(str.split(" "));

// var names = ["ali","raza","khan","sahab"]
// console.log(names.reverse());

// init - cond - increment

// for(var i = 1; i <= 10; i++){
//     console.log(i)
// }

// var names = ["ali","raza","khan","sahab"]

// for(var i = 0; i < names.length; i++){
//     console.log(names[i] + " " +i);
// }

// for(var i = 0; i < 10; i++){
//     console.log(i);
//     if(i === 5){
//         break;
//     }
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++)
//     fullNames.push(firstNames[i] + lastNames[j]);
// }

// console.log(fullNames);

// let fruites = ["Apple", "Banana", "Orange",];
// fruites.splice(2,0); // Removes 1 element at index 1 ("Banana")
// console.log(fruites); // Output: ["Apple", "Orange"]

// Inserting Function

// fruites.splice(1, 0, "Grapes"); // Inserts "Grapes" at index 1
// console.log(fruites); // Output: ["Apple", "Grapes", "Banana, "Orange"]

// updateing Function

// fruites.splice(1, 1, "Mango"); // Replaces "Grapes" with "Mango"
// console.log(fruites); // Output: ["Apple", "Mango", "Orange"]

// var cites =[Karachi , lahore , Islamabad];
// var cities = prompt("Enter your city");
// 2 cityToCheck = cityToCheck.toLowerCase();
// 3 var cites =[Karachi , lahore , Islamabad];
// 4 for (var i = 0; i <= 4; i++);  
// {
// 5   if (cityToCheck === cleanestCities[i]) {
// 6     alert("It's one of the cleanest cities");
// 7   }
// }


// var fruit = ["apple" , "Grapes" , "Mango"]
// var fruit = ["0" , "1" , "2"]
// var fruit = ["1" , "2" , "3"]

var student = ["FAIZAN" , "MOOSA" , "ahmed" ];

var firstChar = student.slice(0,2);
var otherChars = student.slice();
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toUpperCase();
var cappedCity = firstChar + otherChars;

console.log(cappedCity);