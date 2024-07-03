'use strict'
// Задание 1: "Управление персоналом компании"
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя) в консоль.

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// // Пример использования классов
// const employee = new Employee("John Smith");
// employee.displayInfo(); // "Name: John Smith"

// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo(); // "Name: John Doe, Department: Sales"

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



// Задание 2: "Управление списком заказов"
// Реализуйте класс Product (товар), который имеет следующие свойства и методы:
// Свойство name - название товара.
// Свойство price - цена товара.
// Свойство quantity - количество товара.

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство id (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования:
// const order = new Order(12345);

// const product1 = new Product("Phone", 500, 2);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100, 1);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 1100


// class Product {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }
// }

// class Order {
//     products = [];

//     constructor(id) {
//         this.id = id;
//     }

//     addProduct(product) {
//         this.products.push(product);
//     }

//     getTotalPrice() {
//         let totalPrice = 0;

//         this.products.map(function (product) {
//             if (!Number.isFinite(product.price)) {
//                 throw new Error(`Ошибка, вы ввели не число в стоимости продукта ${product.name}`);
//             }
//             else if (!Number.isFinite(product.quantity)) {
//                 throw new Error(`Ошибка, вы ввели не число в количестве продукта ${product.name}`);
//             }
//             else if (product.price <= 0) {
//                 throw new Error(`Введена неверная стоимость продукта ${product.name}`);
//             }
//             else if (product.quantity <= 0) {
//                 throw new Error(`Указано некорректное количество продукта ${product.name}`);
//             }
//         });

//         totalPrice = this.products.reduce(function (sum, product) {
//             return sum + product.price * product.quantity
//         }, 0)
        
//         return `Общая сумма заказа: ${totalPrice}`;
//     }
// }

// const order = new Order(1);

// const product1 = new Product("Phone", 500, 2);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100, 1);
// order.addProduct(product2);

// console.log(order.getTotalPrice());



//Проверки, которые вы делали в getTotalPrice нужны не там, они нужны при попытке создать объект и добавить значения в объект, то есть, id нужно проверять в конструкторе и в addProduct нужно проверять что передали product, также в конструкторе Product проверять все значения. В getTotalPrice уже ничего проверять не нужно.
// Советую стрелочные функции использовать для методов массива.
// От getTotalPrice я бы ожидал числа, а не строки. Строку можно потом собрать любую, какую захотим.
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
