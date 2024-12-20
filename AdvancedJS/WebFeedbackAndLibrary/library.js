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

