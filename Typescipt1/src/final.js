var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function add(a, b) {
    return a + b;
}
add(2, 3);
var num = 23;
var name = "Aditya";
var isLoggedIn = true;
var nums = [1, 2, 3, 4];
var numbers = nums;
var arr = ["Adi", 3];
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var move = Direction.down;
var data = 34;
data = "adi";
var value = "aditya";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
function greet() {
    console.log("Hello");
}
function mul(a, b) {
    return a * b;
}
function greeet(namr) {
    console.log("Hello" + namr);
}
var user = { name: "Aditya", age: 23 };
var user1 = {
    name: "Aditya",
    age: 23,
};
function grets(name) {
    console.log(name);
}
var user2 = {
    name: "Adu",
    age: 23,
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello" + this.name);
    };
    return Person;
}());
var p1 = new Person("Aditya", 23);
p1.greet();
// function identity<T>(value: T): T {
//     return value;
// }
// identity("Aditya");
function identity(value) {
    return value;
}
identity("Adi");
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
merge({ name: "Adi" }, { age: 23 });
function printLength(value) {
    console.log(value.length);
}
printLength("Aditya");
var demo1 = { name: "Adi" };
var demo2 = { name: "adi", age: 23 };
var demo3 = { name: "Adi", age: 23 };
var demo4 = { name: "Adu" };
var demo5 = { name: "Adi" };
var rolePermission = {
    admin: true,
    user: false
};
