// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
const additionalInfo = [
    {
        title: 'Ссылка на страницу about',
        text: '/about'
    },
    {
        title: 'Ссылка на главную страницу',
        text: '/'
    }
];

const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
};

const counter1 = createCounter();
const counter2 = createCounter();

http.createServer((req, res) => {
    console.log(`Запрос получен`);

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });

        let htmlContent = '<h1>Добро пожаловать на мой сайт</h1>';
        htmlContent += `<a href="${additionalInfo[0].text}">${additionalInfo[0].title}</a><br>`;
        htmlContent += `Просмотров: ${counter1()}`;
        res.end(htmlContent);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        })
        let htmlContent = '<h1>Страница about</h1>';
        htmlContent += `<a href="${additionalInfo[1].text}">${additionalInfo[1].title}</a><br>`;
        htmlContent += `Просмотров: ${counter2()}`;
        res.end(htmlContent);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        })
        res.end('<h1>Страница не найдена!</h1>');
    }
}).listen(3000, () => {
    console.log(`Сервер запущен на порту 3000`);
});

