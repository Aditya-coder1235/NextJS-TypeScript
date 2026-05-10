//Basic types

let num: number = 102;

let str: string = "Aditya";

let isMarry: boolean = true;

let emp: null;

let unde: undefined;

let name: any = "Aditya";

name = 100;

let name2: unknown = "Adi";

if (typeof name2 === "string") {
    console.log(name2.length);
}

function Nev(): never {
    while (true) {}
}

// Nev()

function PrintName(name: string): void {
    console.log(name);
}

PrintName("Aditya");

let arr1: number[] = [1, 2, 3, 4, 5];

let arr2: string[] = ["a", "a"];

let arr3: Array<number> = [1, 2, 3, 4];

let tupp: [string, number] = ["adi", 23];

let obj1: { name: string; age: number } = {
    name: "Adi",
    age: 23,
};

type User = {
    name: string;
    age: number;
};

let obj2: User = {
    name: "Adi",
    age: 23,
};

interface User2 {
    name: string;
    age: number;
}

let obj3: User2 = {
    name: "adi",
    age: 23,
};

function add(a: number, b: number): number {
    return a + b;
}

add(2, 3);

type Respone = "success" | "fail";

const ApiRes: Respone = "success";


function PrintId(id:string|number){
    if(typeof id==="string"){
        console.log(id.length)
    }else{
        console.log(id.toFixed)
    }
}

PrintId("Aditya")

function identity<T>(name:T):T{
    return name
}

console.log(identity<string>("Aditya"));

interface User3{
    name:string;
    age:number
}

type PartialType=Partial<User3>

const obj5:PartialType={
    name:"Adi"
}

type RequireType=Required<User3>

const obj6:RequireType={
    age:23,
    name:"Adi"
}

type ReadOnlyType=Readonly<User3>

const obj7:ReadOnlyType={
    name:"Adi",
    age:23
}

// obj7.name="aditya"


type PickType=Pick<User3,"name">


const obj8:PickType={
    name:"Adi"
}

type OmitType=Omit<User3,"age">

const obj9:OmitType={
    name:"Aditya"
}

type RecordType=Record<string,number>

const obj10:RecordType={
    "name":23,
}



enum Roles{
    Admin,
    User,
    Owner,
    CoOwner
}

const user7=Roles.Admin


enum statusCodes{
    NotFound=404,
    UnAuth=401,
    Created=201,
    success=200
}

const res=statusCodes.success


let value:any="Aditya"

let length=(value as string).length

