// Написать свою собственную библиотеку и опубликовать в NPM.
// Что нужно помнить при реализации:
// — Ваш модуль должен обязательно экспортировать функции которые будут полезны вашим пользователям с помощью modules.exports
// — Не забудьте указать в package.json в поле main файл, который будет основным в вашей библиотеке
// — Обязательно создайте и опишите README.md файл в корне вашего проекта
// — Если у вас есть репозиторий в github или gitlab, опубликуйте туда ваш код и в package.json укажите ссылку на репозиторий в поле repository
// — Протестируйте работу вашей библиотеки после публикации. Попробуйте установить её в любом другом проекте с помощью npm i имявашейбиблиотеки и попробуйте ее использовать.

// Формат сдачи задания:
// — Достаточно прислать ссылку на сайт https://npmjs.com/ на вашу библиотеку.

// Идеи для библиотеки:
// — Библиотека для генерации случайных данных, таких как имена, адреса, даты, числа и т.д. Это может быть полезно для тестирования или создания заглушек данных.
// — Библиотека для работы с математикой: например функции для решения квадратных уравнений.
// — Библиотека для генерации паролей, которая позволяет генерировать случайные и безопасные пароли. Можно реализовать методы для указания длины пароля, использования различных типов символов (буквы, цифры, специальные символы) и т.д.



function getRandomBook() {
    let library = [
        {
            name: "Fahrenheit 451",
            author: "Ray Bradbury"
        },
        {
            name: "The catcher in the rye",
            author: "Jerome David Salinger"
        },
        {
            name: "Little Prince",
            author: "Antoine de Saint-Exupery"
        },
        {
            name: "War and Peace",
            author: "graf Leo Tolstoy"
        },
    ];

    return function () {
        if (library.length > 0) {
            let randomIndex = Math.floor(Math.random() * library.length);
            let randomBook = library[randomIndex];
            console.log(`Let's start reading the book today name:${randomBook.name} author: ${randomBook.author}`);
            library = library.filter(book => book !== randomBook);
            console.log(library);
        } else {
            console.log("There are no more books in the library, everything is read.");
        }
    }
}

const lib = getRandomBook();
lib();
lib();
lib();
lib();
lib();

export default { getRandomBook, lib };


