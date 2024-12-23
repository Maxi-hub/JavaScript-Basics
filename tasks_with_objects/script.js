// 1. Дан объект numbers. Выведем в консоль все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

console.log(Object.values(numbers).filter((element) => element >= 3));

//or
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    };
}


// 2. Из объекта выведем в консоль значения, к которым приписан комментарий.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
const commentsObject = Object.assign({}, post.comments); // преобразуем массив comments в объект
console.log(commentsObject['0']['rating']['dislikes']);
console.log(commentsObject['1']['userId']);
console.log(commentsObject['1']['text']);

//or
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);



// 3. Цену каждого продукта уменьшим на 15%, используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const newProduct = [];
products.forEach(element => {
    const newEl = { ...element }; // клонируем элемент
    newEl.price = element.price - element.price * 0.15;
    newProduct.push(newEl);
});
console.log(products);
console.log(newProduct);


// 4. Выведем в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Отсортируем массив по цене по возрастанию и выведем его в консоль.

const products2 = [ 
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];



const isFotoFilter = products2.filter((elem) => elem.photos && elem.photos.length > 0);
console.log(isFotoFilter);

const productsSortByPrice = products2.sort((a, b) => a.price - b.price);
console.log(productsSortByPrice);


// 5.  Объединим два исходных массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const unityArray = {};
for (let i = 0; i < en.length; i++) {
    unityArray[en[i]] = ru[i];
}

console.log(unityArray);