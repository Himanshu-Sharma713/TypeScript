// 1. STRING
let fname: string = "Himanshu";
let lname: string = "Sharma";

// 2. NUMBER (int, float, etc.)
let age: number = 25;
let price: number = 99.99;

// 3. BOOLEAN
let isStudent: boolean = true;

// 4. ARRAY
let scores: number[] = [90, 85, 70];
let names: string[] = ["Alice", "Bob", "Charlie"];

// 5. TUPLE (fixed length, fixed types)
let person: [string, number] = ["Himanshu", 25];

// 6. ENUM (for fixed sets of named values)
enum Role {
  Admin,
  User,
  Guest
}
let userRole: Role = Role.Admin;

// 7. ANY (can be any type — avoid if possible)
let anything: any = "Hello";
anything = 123;

// 8. UNKNOWN (like `any` but safer)
let input: unknown = "Test";

// 9. NULL and UNDEFINED
let empty: null = null;
let notAssigned: undefined = undefined;

// 10. VOID (no return value)
function logMessage(): void {
  console.log("This function returns nothing.");
}

// 11. NEVER (function never returns)
function throwError(message: string): never {
  throw new Error(message);
}

// 12. OBJECT
let user: { name: string; age: number } = {
  name: "Himanshu",
  age: 25
};

// 13. UNION TYPE (multiple possible types)
let id: string | number;
id = "123";
id = 123;

// 14. TYPE ALIASES
type User = {
  username: string;
  password: string;
};
let newUser: User = { username: "himanshu", password: "secret" };

// 15. INTERFACE
interface Product {
  name: string;
  price: number;
}
let item: Product = {
  name: "Laptop",
  price: 75000
};
