document.writeln("<h1>Tuple in TypeScript</h1>");

// Tuple in TypeScript

// ===> Example 1

let person: [String, number] = ["Himanshu Sharma", 22];

console.log(person[0]);
console.log(person[1]);

// ===> Example 2

let employee: [number, string, boolean] = [101, "John", true];

console.log(`ID: ${employee[0]}, Name: ${employee[1]}, Active: ${employee[2]}`);

// ===> Example 3

function getCoordinates(): [number, number] {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(`X: ${x}, Y: ${y}`);

