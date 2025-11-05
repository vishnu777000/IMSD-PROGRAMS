//mathOperations.js 
// Function to add two numbers 
function add(a, b) { 
return a + b; 
} 
// Function to subtract two numbers 
function subtract(a, b) { 
return a - b; 
} 
// Function to multiply two numbers 
function multiply(a, b) { 
return a * b; 
} 
// Function to divide two numbers 
function divide(a, b) { 
if (b === 0) { 
return 'Division by zero not allowed'; 
} 
return a / b; 
} 
// Exporting the functions to make them accessible to other files 
module.exports = { 
add, 
subtract, 
multiply, 
divide 
}; 
//App.js: 
// Import the custom module 
const math = require('./mathOperations'); 
// Display workflow of modularization 
console.log("=== Node.js Modularization Example ==="); 
// Use the functions from the imported module 
let a = 20, b = 5; 
console.log('Addition of '+a+' and '+b+' = '+math.add(a, b)); 
console.log('Subtraction of '+a+' and '+b+' = '+math.subtract(a, b)); 
console.log('Multiplication of '+a+' and '+b+' = '+math.multiply(a, b)); 
console.log('Division of '+a+' and '+b+' = '+math.divide(a, b)); 
console.log("All operations performed using user-defined module successfully!"); 
