## Объектно-ориентированное программироваине (ООП) / object-oriented programming (OOP)

# Описание выполненных заданий / Description of completed tasks

Привет! Я с радостью делюсь результатами своей работы над двумя заданиями, которые касаются *управления персоналом компании* и *управления списком заказов*.
Hi! I am happy to share the results of my work on two assignments that relate to *company personnel management* and *order list management*.

**Управление персоналом компании**
В этом задании я реализовала класс `Employee`, который представляет сотрудника компании. Этот класс включает в себя следующее:
- **Свойство `name`**: строка, представляющая имя сотрудника.
- **Метод `displayInfo()`**: этот метод выводит информацию о сотруднике в консоль, что позволяет легко получать данные о каждом сотруднике.
Кроме того, я создала класс `Manager`, который наследует от класса `Employee`. Этот класс имеет дополнительные возможности:
- **Свойство `department`**: строка, указывающая отдел, в котором работает менеджер.
- **Переопределенный метод `displayInfo()`**: этот метод выводит информацию о менеджере, включая его имя и отдел, что делает его более информативным.

**Company Personnel management**
In this assignment, I implemented the `Employee` class, which represents an employee of the company. This class includes the following:
- **The 'name` property**: a string representing the employee's name.
- **The `displayInfo()` method**: This method outputs information about an employee to the console, which makes it easy to get data about each employee.
In addition, I created the `Manager` class, which inherits from the `Employee` class. This class has additional features:
- **The `department`** property: a string indicating the department where the manager works.
- **Redefined `displayInfo()`** method: This method outputs information about the manager, including his name and department, which makes it more informative.


**Управление списком заказов**
В данном задании я разработала класс `Product`, который представляет товар. Он включает в себя следующие свойства:
- **Свойство `name`**: название товара.
- **Свойство `price`**: цена товара.
- **Свойство `quantity`**: количество товара.
Также я создала класс `Order`, который управляет заказами и имеет следующие свойства и методы:
- **Свойство `id`**: уникальный номер заказа.
- **Свойство `products`**: массив, содержащий список продуктов в заказе.
- **Метод `addProduct(product)`**: этот метод принимает объект класса `Product` и добавляет его в список продуктов заказа.
- **Метод `getTotalPrice()`**: возвращает общую стоимость заказа, основанную на ценах продуктов, что позволяет легко подсчитывать итоговую сумму.

**Order list management**
In this assignment, I have developed a `Product` class that represents a product. It includes the following properties:
- **The 'name` property**: the product name.
- **The `price` property**: the price of the product.
- **The `quantity` property**: the quantity of the product.
I also created the `Order` class, which manages orders and has the following properties and methods:
- **The `id` property**: a unique order number.
- **`products` property**: an array containing the list of products in the order.
- **- **Method `add Product(product)`**: This method takes an object of the class `Product` and adds it to the list of products of the order.
- **Method `getTotalPrice()`**: Returns the total cost of the order based on the prices of the products, which makes it easy to calculate the total amount.


## Технологии / Technologies

В процессе работы над этими заданиями я использовала **ES6 (ECMAScript 2015)** с применением классов и наследования, что позволило создать четкую иерархию объектов.
In the process of working on these tasks, I used **ES6 (ECMAScript 2015)** using classes and inheritance, which allowed to create a clear hierarchy of objects.
