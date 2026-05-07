// Basic TypeScript Types
// 1. String
var name = "John";
var message = "Hello, ".concat(name, "!");
// 2. Number
var age = 25;
var price = 19.99;
// 3. Boolean
var isActive = true;
var isAdmin = false;
// 4. Any
var value = "hello";
value = 42;
value = true;
// 5. Unknown
var userInput = "some input";
// userInput.toUpperCase(); // Error: Object is of type 'unknown'
// 6. Union Types
var id;
id = "ID-001";
id = 1;
// 7. Literal Types
var direction = "up";
// 8. Array Types
var numbers = [1, 2, 3, 4, 5];
var strings = ["a", "b", "c"];
// 9. Tuple
var tuple = ["hello", 42, true];
// 10. Enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var myColor = Color.Red;
// 11. Void (typically used for functions with no return value)
function logMessage(message) {
    console.log(message);
}
// 12. Never (function that never returns)
function throwError(message) {
    throw new Error(message);
}
// 13. Object Type
var person = {
    name: "Alice",
    age: 30,
};
var user = {
    id: 1,
    name: "Bob",
};
var userStatus = "active";
console.log("TypeScript Basic Types Examples");
function greet(person) {
    return "Hello ".concat(person);
}
console.log(greet("Aditya"));
