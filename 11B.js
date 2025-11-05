function addNumbers(a: number, b: number): number { 
return a + b; 
} 
// Function to greet a user 
function greetUser(name: string): string { 
return `Hello, ${name}! Welcome to TypeScript.`; 
} 
// Function that returns nothing (void) 
function displayMessage(message: string): void { 
console.log("Message:", message); 
} 
// Function that never returns (throws error) 
function throwError(message: string): never { 
throw new Error(message); 
} 
// Using the functions 
let sum: number = addNumbers(10, 20); 
console.log("Sum of 10 and 20:", sum); 
let greeting: string = greetUser("Akira"); 
console.log(greeting); 
displayMessage("This is a void function demonstration."); 
// Uncomment below to see the never function in action 
// throwError("This function never returns!"); 
