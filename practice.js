var Mountain = /** @class */ (function () {
    function Mountain(name, height) {
        this.height = height;
        this.name = name;
    }
    return Mountain;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var InventoryItem = /** @class */ (function () {
    function InventoryItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    return InventoryItem;
}());
var motor = new Product("motor", 10);
var sensor = new Product("sensor", 12.50);
var LED = new Product("LED", 1);
this.inventory = [
    new InventoryItem(motor, 10),
    new InventoryItem(sensor, 4),
    new InventoryItem(LED, 20)
];
this.products = [
    new Product("Milk", 2.99),
    new Product("Delicious Beer", 12.99),
    new Product("Calzone", 3.99)
];
this.mountians = [
    new Mountain("Kilimanjaro", 19341),
    new Mountain("Everest", 29029),
    new Mountain("Denali", 20310)
];
function calcInventoryValue(inventory) {
    var motorValue = motor.price * inventory[0].quantity;
    var sensorValue = sensor.price * inventory[1].quantity;
    var LEDValue = LED.price * inventory[2].quantity;
    var totalValue = motorValue + sensorValue + LEDValue;
    return totalValue;
    d;
}
function calcAverageProductPrice(products) {
    var avgPrice = (products[0].price + products[1].price + products[2].price) / products.length;
    return avgPrice;
}
function findNameOfTallestMountain(mountians) {
    var output = Math.max(mountians[0].height, mountians[1].height, mountians[2].height);
    if (output === 19341) {
        return mountians[0].name;
    }
    else if (output === 29029) {
        return mountians[1].name;
    }
    else if (output === 20310) {
        return mountians[2].name;
    }
    else {
        var error = "I don't know that mountain";
        return error;
    }
}
var tallestMountain = findNameOfTallestMountain(mountians);
console.log(tallestMountain);
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue);
