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