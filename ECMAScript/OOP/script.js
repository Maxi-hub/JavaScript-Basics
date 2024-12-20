'use strict'

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

        displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

const book = new Book('The old man and the sea', 'Ernest Hemingway', 320);
book.displayInfo();


// определенная книга
class Book2 {
    title = 'The old man and the sea';
    author = 'Ernest Hemingway';
    pages = 320;

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

const book2 = new Book2();
book.displayInfo();


class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }

    checkAgeIsNumber() {
        if (typeof this.age !== 'number') {
            throw new Error(`Введите возраст в числовом формате`);
        } else if (this.age < 7) { // 7 -> произвольное число (минимальный возраст студента)
            throw new Error(`Вы ввели некорректный возраст`);
        }
    }
}

const student = new Student("John Smith", 17, "10th grade");
student.checkAgeIsNumber();
student.displayInfo();