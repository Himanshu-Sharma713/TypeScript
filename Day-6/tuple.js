document.writeln("<h1>Tuple in TypeScript</h1>");
// Tuple in TypeScript
// ===> Example 1
var person = ["Himanshu Sharma", 22];
console.log(person[0]);
console.log(person[1]);
// ===> Example 2
var employee = [101, "John", true];
console.log("ID: ".concat(employee[0], ", Name: ").concat(employee[1], ", Active: ").concat(employee[2]));
// ===> Example 3
function getCoordinates() {
    return [10, 20];
}
var _a = getCoordinates(), x = _a[0], y = _a[1];
console.log("X: ".concat(x, ", Y: ").concat(y));
