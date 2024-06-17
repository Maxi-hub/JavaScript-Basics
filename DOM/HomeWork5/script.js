// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).


usersData.users.forEach(element => {
    document.body.insertAdjacentHTML('beforeend', `
        <h2><a href="#">${element.firstName} ${element.lastName}</a></h2>
        <p>${element.email}</p>
        <img src="${element.image}">User photo</img><br>
        `)
});

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => {
        json.recipes.forEach(element => {
            console.log(element.name);
        });
    })
    .catch((error) => {
        console.log(error);
    })


const URL1 = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=5';

fetch(URL1)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const imgEl = document.createElement('img');
            document.body.appendChild(imgEl);
            imgEl.src = element.image;
        });
    })
    .catch (() => {
        console.log("Something is not working");
    })


