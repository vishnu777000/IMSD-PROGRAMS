let age: number = 20; 
let userName: string = "Akira"; 
let isStudent: boolean = true; 
// Using null and undefined 
let emptyValue: null = null; 
let notAssigned: undefined = undefined; 
// Special Types 
// 1. any - can hold any type (not type-safe) 
let randomValue: any = "Hello"; 
randomValue = 42; // valid 
randomValue = true; // still valid 
// 2. unknown - similar to any, but requires type checking 
let uncertainValue: unknown = "This is a string"; 
if (typeof uncertainValue === "string") { 
console.log(uncertainValue.toUpperCase()); 
} 
// 3. void - function that does not return anything 
function greet(): void { 
console.log("Welcome to TypeScript!"); 
} 
// 4. never - function that never returns (throws error) 
function throwError(message: string): never { 
throw new Error(message); 
} 
// 5. tuple - fixed structure 
let userInfo: [string, number] = ["Akira", 20]; 
// 6. enum - named constants 
enum Colors { 
Red = 1, 
Green, 
Blue 
} 
let favoriteColor: Colors = Colors.Green; 
// Display results 
console.log("User Name:", userName); 
console.log("Age:", age); 
console.log("Is Student:", isStudent); 
console.log("Tuple (userInfo):", userInfo); 
console.log("Favorite Color:", favoriteColor); 
greet();
