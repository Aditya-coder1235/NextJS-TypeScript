type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}

makeChai();

type CupSize = ChaiOrder | { name: string };

class Chai implements ChaiOrder {
    type = "string";
    sugar = 3;
    strong = true;
}

const myChai: CupSize = new Chai();
myChai.type
