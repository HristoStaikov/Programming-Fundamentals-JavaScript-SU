class Storage {
    constructor(capacity, storage) {
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = 0;
    }
    addProduct(product) {
      this.capacity -= product.quantity;
      this.totalCost += product.price * product.quantity;
      this.storage.push(product);
    }
    getProducts() {
      return this.storage.map((element) => JSON.stringify(element)).join("\n");
      //return this.storage.map(element => JSON.stringify(element));
    }
  }

let productOne = {name: 'Cucamber',
price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato',
price: 0.90, quantity: 25};
let productThree = {name: 'Bread',
price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);