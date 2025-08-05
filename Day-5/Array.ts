// ========= Array DataType in TypeScript ==========

document.writeln("<h1>Array DataType in TypeScript</h1>");

// using Square Brackets
let fruits1: String[] = ["Apple", "Mongo", "Orange", "Litche"];

for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}

// using Generic array type
let fruits2: Array<String> = ["Apple", "Mongo", "Orange", "Litche"];

for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}
