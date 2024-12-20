'use strict'

class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Department: ${this.department}`);
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();

const manager = new Manager('John Smith', 'Sales');
manager.displayInfo();

// ----------------------------------------------------------------------------------------


class Product {
    constructor(name, price, quantity) {
        if (!Number.isFinite(price) || price <= 0) {
            throw new Error(`Ошибка: неверная стоимость продукта ${name}`);
        }
        if (!Number.isFinite(quantity) || quantity <= 0) {
            throw new Error(`Ошибка: некорректное количество продукта ${name}`);
        }
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Order {
    products = [];
    
    constructor(id) {
        if (!Number.isFinite(id) || id <= 0) {
            throw new Error(`Ошибка: неверный идентификатор заказа`);
        }
        this.id = id;
    }

    addProduct(product) {
        if (!product || !(product instanceof Product)) {
            throw new Error(`Ошибка: передан некорректный продукт`);
        }
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((totalPrice, product) => totalPrice + (product.price * product.quantity), 0);
    }
}

const order = new Order(1);

const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);

const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);

console.log(order.getTotalPrice());