let apiRequestCode: "pending" | "success" | "reject" = "pending";

apiRequestCode = "success";

let name: "aditya" | "girawale" = "aditya";

console.log(name);

let currentOrder: string | undefined;

let orders = ["23", "34", "21", "45"];

for (let order of orders) {
    if (order === "21") {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);
