

// Chapter No:20. For Loops: Nested (5 Examples)

// **Example 1: Nested loop to print a 3x3 grid of numbers**

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
// Output: 
// 1 1, 1 2, 1 3
// 2 1, 2 2, 2 3
// 3 1, 3 2, 3 3


// **Example 2: Multiplication table (from 1 to 5)**

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// Output: Multiplication table from 1 to 5

// **Example 3: Nested loop to print a pattern**

for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}
// Output:
// * 
// * * 
// * * * 
// * * * *


// **Example 4: Iterating through a 2D array**

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9


// **Example 5: Checking for common elements between two arrays**

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      console.log(`Common element: ${array1[i]}`);
    }
  }
}
// Output: Common element: 3, Common element: 4
