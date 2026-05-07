var apiRequestCode = "pending";
apiRequestCode = "success";
var name = "aditya";
console.log(name);
var currentOrder;
var orders = ["23", "34", "21", "45"];
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    var order = orders_1[_i];
    if (order === "21") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
