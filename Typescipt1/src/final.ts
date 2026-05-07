function add(a: number, b: number) {
    return a + b;
}

add(2, 3);

let num: number = 23;

let name: string = "Aditya";

let isLoggedIn: boolean = true;

let nums: number[] = [1, 2, 3, 4];

let numbers: Array<number> = nums;

let arr: [string, number] = ["Adi", 3];

enum Direction {
    up,
    down,
    left,
    right,
}

const move: Direction = Direction.down;

let data: any = 34;

data = "adi";

let value: unknown = "aditya";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

function greet(): void {
    console.log("Hello");
}

function mul(a: number, b: number): number {
    return a * b;
}

function greeet(namr?: string) {
    console.log("Hello" + namr);
}

let user: { name: string; age: number } = { name: "Aditya", age: 23 };

type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "Aditya",
    age: 23,
};

function grets(name: number | string) {
    console.log(name);
}

interface User2 {
    name: string;
    age: number;
}

const user2: User2 = {
    name: "Adu",
    age: 23,
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello" + this.name);
    }
}

const p1 = new Person("Aditya", 23);

p1.greet();

// function identity<T>(value: T): T {
//     return value;
// }

// identity("Aditya");

function identity<T>(value: T): T {
    return value;
}

identity("Adi");

function merge<T, U>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}

merge({ name: "Adi" }, { age: 23 });

function printLength<T extends { length: number }>(value: T) {
    console.log(value.length);
}

printLength("Aditya");

interface User2 {
    name: string;
    age: number;
}

const demo1: Partial<User2> = { name: "Adi" };

const demo2:Required<User2>={name:"adi",age:23}

const demo3:Readonly<User2>={name:"Adi",age:23}

const demo4:Pick<User2,"name">={name:"Adu"}

const demo5:Omit<User2,"age">={name:"Adi"}

type Roles="admin" | "user"

const rolePermission:Record<Roles , boolean>={
    admin:true,
    user:false
}