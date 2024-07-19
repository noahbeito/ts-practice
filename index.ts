// Mountains
interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];

function findNameOfTallestMountain(mountains:Mountain[]):string {

    var tallestMountain = mountains[0];

    mountains.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    })

    return tallestMountain.name;
}

let tallestMountain: string = findNameOfTallestMountain(mountains)

console.log(tallestMountain);


// Products
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "Minion Bob", price: 15.99 },
    { name: "Gru's Freeze Ray", price: 22.50 },
    { name: "Minion Dave", price: 10.00 },
    { name: "Purple Minion Wig", price: 7.99 },
    { name: "Gru Airship", price: 999999.99 },
    { name: "Banana Launcher", price: 14.50 }
];

function calcAverageProductPrice(products: Product[]): number {
    var sum: number = 0;

    products.forEach((product) => {
        sum += product.price;
    })

    return sum / products.length;
}

const avgProductPrice: number = calcAverageProductPrice(products);
console.log(avgProductPrice);


// Inventory
interface InventoryItem {
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
    { product: { name: "Minion Bob", price: 10.00 }, quantity: 10 },
    { product: { name: "Gru's Freeze Ray", price: 12.50 }, quantity: 4 },
    { product: { name: "Minion Dave", price: 1.00 }, quantity: 20 },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
    var totalInventoryValue: number = 0;

    inventory.forEach((item) => {
        totalInventoryValue += item.product.price * item.quantity;
    })

    return totalInventoryValue;
}

const inventoryValue: number = calcInventoryValue(inventory);
console.log(inventoryValue);