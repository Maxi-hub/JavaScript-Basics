// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];

    constructor(books) {
        for (let i = 0; i < this.#books.length; i++) {
            for (let j = 0; j < books.length; j++) {
                if (this.#books[i] === books[j]) {
                    throw new Error('Данный список книг уже существет'); // "One", "Two", "Four", "Three"
                }
            }
        }
        this.#books = books;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title) === false) {
            return this.#books.push(title);
        }
    }

    removeBook(title) {
        const checkBook = this.#books.includes(title);
        if (!checkBook) {
            throw new Error('Такой книги нет в библиотеке');
        }
        this.#books = this.#books.filter(book => book !== title);
        console.log('Книга уcпешно удалена');
        return this.#books;
    }

    hasBook(title) {
        return (this.#books.includes(title));
    };
}


const books = ['One', 'Two', 'Three', 'Four'];
const lib = new Library(books);
console.log(lib.allBooks);

lib.addBook('Five')
console.log(lib.allBooks.toString());

console.log(lib.hasBook('Seven'));

lib.removeBook('One')
console.log(lib.allBooks.toString());

lib.removeBook('Nine');
console.log(lib);

