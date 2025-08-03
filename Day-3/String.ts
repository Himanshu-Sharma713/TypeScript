//String & Boolean Data Types in TypeScript

let fullName: String = "Himanshu Sharma";

let isTrue: boolean = true;

if (isTrue) {
  console.log(fullName);
}

// Dyanamic value

let str: String = `Hello, ${fullName}, How are you?`;

console.log(str);

let age: number = 22;

let fullInfo: String = `My Name is ${fullName}, age is ${age}...`;

console.log(fullInfo);
