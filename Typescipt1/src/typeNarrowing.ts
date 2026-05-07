function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Maiking ${kind} chai`;
    }
    return `Maiking ${kind} chai`;
}

function privateValue(number: string | number) {
    if (typeof number === "string") {
        console.log(number.toLowerCase());
    } else {
        console.log(number.toFixed(2));
    }
}

privateValue("23");

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai with spice level ${order.spiceLevel}`;

        case "ginger":
            return `Ginger chai with amount ${order.amount}`;

        case "elaichi":
            return `Elaichi chai with aroma ${order.aroma}`;

        default:
            return `Simple chai`;
    }
}

MakeChai({ type: "masala", spiceLevel: 5 });