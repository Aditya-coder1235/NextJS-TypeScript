function makeChai(order) {
    console.log(order);
}
makeChai();
var Chai = /** @class */ (function () {
    function Chai() {
        this.type = "string";
        this.sugar = 3;
        this.strong = true;
    }
    return Chai;
}());
var myChai = new Chai();
myChai.type;
