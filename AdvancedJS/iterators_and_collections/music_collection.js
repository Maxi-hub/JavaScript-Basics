// Используя Symbol.iterator, создан объект "Музыкальная коллекция", который можно итерировать. Каждая итерация возвращает следующий альбом из коллекции.
// Создаем объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// Реализуем кастомный итератор для объекта musicCollection. Итератор перебирает альбомы по порядку.
// Используем цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска).

const musicCollection = {
    albums: [
        { title: "Love Me Again", artist: "John Newman", year: "2013" },
        { title: "Installation", artist: "plenka", year: "2022" },
        { title: "Under Darkening Skies", artist: "Monolink", year: "2021" },
    ],

    [Symbol.iterator]() {
        const array = this.albums;
        let current = 0;
        return {
            next() {
                if (current < array.length) {
                    return { value: array[current++], done: false };
                }
                return { value: undefined, done: true };
            }
        }
    }
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}


// другой вариант
const musicCollection2 = {
    title: "Название альбома",
    artist: "Исполнитель",
    year: "Год выпуска",
};

let musicMapCollection = new Map(Object.entries(musicCollection2));
const iterator = musicMapCollection[Symbol.iterator]();

let arr = [];

for (const item of iterator) {
    arr.push(item);
}

const obj = Object.fromEntries(arr);
console.log(`${obj.title} - ${obj.artist} (${obj.year})`);


