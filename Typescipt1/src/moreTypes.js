 var response = "42";
var numericLength = response.length;
var bookString = '{"name":"who moved my cheese"}';
var bookObject = JSON.parse(bookString);
console.log(bookObject);
var inputElements = document.getElementById("user");
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log(error);
    }
}
