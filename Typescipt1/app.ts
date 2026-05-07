// Basic TypeScript Types

// 1. String
const name: string = "John";
const message: string = `Hello, ${name}!`;

// 2. Number
const age: number = 25;
const price: number = 19.99;

// 3. Boolean
const isActive: boolean = true;
const isAdmin: boolean = false;

// 4. Any
let value: any = "hello";
value = 42;
value = true;

// 5. Unknown
let userInput: unknown = "some input";
// userInput.toUpperCase(); // Error: Object is of type 'unknown'

// 6. Union Types
let id: string | number;
id = "ID-001";
id = 1;

// 7. Literal Types
let direction: "up" | "down" | "left" | "right" = "up";

// 8. Array Types
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: Array<string> = ["a", "b", "c"];

// 9. Tuple
const tuple: [string, number, boolean] = ["hello", 42, true];

// 10. Enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
const myColor: Color = Color.Red;

// 11. Void (typically used for functions with no return value)
function logMessage(message: string): void {
    console.log(message);
}

// 12. Never (function that never returns)
function throwError(message: string): never {
    throw new Error(message);
}

// 13. Object Type
const person: { name: string; age: number } = {
    name: "Alice",
    age: 30,
};

// 14. Interface
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

const user: User = {
    id: 1,
    name: "Bob",
};

// 15. Type Alias
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

console.log("TypeScript Basic Types Examples");

function greet(person: string): string {
    return `Hello ${person}`;
}

console.log(greet("Aditya"));

