let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
    name: string;
};

let bookString = '{"name":"who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElements = document.getElementById("user") as HTMLInputElement;


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }else{
        console.log(error)
    }
}