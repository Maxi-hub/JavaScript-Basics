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
        htmlContent += `<a style="text-decoration: none" href="${additionalInfo[0].text}">${additionalInfo[0].title}</a>`;
        htmlContent += `<p> Просмотров: ${counter1()}</p>`;
        res.end(htmlContent);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        })
        let htmlContent = '<h1>Страница about</h1>';
        htmlContent += `<a style="text-decoration: none" href="${additionalInfo[1].text}">${additionalInfo[1].title}</a>`;
        htmlContent += `<p> Просмотров: ${counter2()}</p>`;
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