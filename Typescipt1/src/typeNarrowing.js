function getChai(kind) {
    if (typeof kind === "string") {
        return "Maiking ".concat(kind, " chai");
    }
    return "Maiking ".concat(kind, " chai");
}
function privateValue(number) {
    if (typeof number === "string") {
        console.log(number.toLowerCase());
    }
    else {
        console.log(number.toFixed(2));
    }
}
privateValue("23");
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala chai with spice level ".concat(order.spiceLevel);
        case "ginger":
            return "Ginger chai with amount ".concat(order.amount);
        case "elaichi":
            return "Elaichi chai with aroma ".concat(order.aroma);
        default:
            return "Simple chai";
    }
}
MakeChai({ type: "masala", spiceLevel: 5 });
