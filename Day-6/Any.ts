document.writeln("<h1>Any in TypeScript</h1>");

// Any Data Types in TypeScript

// ===>>> 1. Dynamic Value Assignment

let data: any;

data = "Hello";
console.log(data); // "Hello"

data = 42;
console.log(data); // 42

data = true;
console.log(data); // true

// ===>>> 2. Storing Mixed-Type Array

let mixedArray: any[] = [1, "TypeScript", true, { name: "Himanshu" }];

console.log(mixedArray);
