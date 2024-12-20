## Объектно-ориентированное программироваине (ООП) / object-oriented programming (OOP)

Привет! В этом проекте я реализовала два задания, которые помогают управлять библиотекой книг и списком студентов.
Hi! In this project, I have implemented two tasks that help manage the library of books and the list of students.

**Управление библиотекой книг**
Я создала класс Book, который представляет книгу и включает в себя следующие свойства и методы:
- Свойство title: строка, представляющая название книги.
- Свойство author: строка, указывающая имя автора книги.
- Свойство pages: число, обозначающее количество страниц в книге.
- Метод displayInfo(): этот метод выводит информацию о книге, включая название, автора и количество страниц.
С помощью этого класса я могу легко создавать объекты книг и получать информацию о них.

**Book Library management**
I have created a Book class that represents a book and includes the following properties and methods:
- Title property: a string representing the title of the book.
- Author property: a string indicating the name of the author of the book.
- Pages property: a number indicating the number of pages in a book.
- displayInfo() method: This method outputs information about the book, including the title, author, and number of pages.
With this class, I can easily create book objects and get information about them.

**Управление списком студентов**
Также я реализовала класс Student, который представляет студента и включает в себя следующие свойства и методы:
- Свойство name: строка, представляющая имя студента.
- Свойство age: число, указывающее возраст студента.
- Свойство grade: строка, обозначающая класс, в котором учится студент.
- Метод displayInfo(): этот метод выводит информацию о студенте в консоль.
- С помощью этого класса я могу создавать объекты студентов и получать информацию о них.

**Student list management**
I also implemented the Student class, which represents the student and includes the following properties and methods:
- Name property: a string representing the student's name.
- Age property: a number indicating the age of the student.
- Grade property: a string indicating the class in which the student studies.
- displayInfo() method: This method outputs information about the student to the console.
- With this class, I can create student objects and get information about them.


## Технологии / Technologies

В данном проекте используются несколько технологий и концепций программирования, которые обеспечивают его функциональность. Вот основные из них:
1. ES6 (ECMAScript 2015)
Используются классы (class) для создания объектов Book и Student. Это позволяет организовать код более структурированно и инкапсулировать данные и методы, относящиеся к каждому объекту.
Конструкторы (constructor) используются для инициализации свойств объектов при их создании.
2. Строгий режим ('use strict')
Включение строгого режима помогает выявлять ошибки и предотвращать использование устаревших или небезопасных функций. Это улучшает качество кода и делает его более надежным.
3. Методы
Методы displayInfo() используются для вывода информации о книгах и студентах в консоль. Это демонстрирует использование функций внутри классов.
4. Обработка ошибок
В классе Student реализована функция checkAgeIsNumber(), которая проверяет, является ли возраст числом и соответствует ли он заданным критериям. Это показывает применение обработки ошибок с помощью выброса исключений (throw new Error).

This project uses several programming technologies and concepts that provide its functionality. Here are the main ones:
1. ES6 (ECMAScript 2015)
Classes are used to create Book and Student objects. This allows you to organize the code in a more structured way and encapsulate the data and methods related to each object.
Constructors are used to initialize the properties of objects when they are created.
2. Strict mode ('use strict')
Enabling strict mode helps to identify errors and prevent the use of outdated or unsafe functions. This improves the quality of the code and makes it more reliable.
3. Methods
displayInfo() methods are used to output information about books and students to the console. This demonstrates the use of functions inside classes.
4. Error Handling
The Student class implements the checkAgeIsNumber() function, which checks whether the age is a number and whether it meets the specified criteria. This shows the application of error handling by throwing exceptions (throw new Error).