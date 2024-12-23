const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const createCounter = () => {
    let count = 0;
    return () => {
        return ++count;
    }
};

const counter1 = createCounter();
const counter2 = createCounter();

const counter = {
    "/": 1,
    "/about": 1
}

const filePath = path.join(__dirname, 'counter.json');
fs.writeFileSync(filePath, JSON.stringify(counter, null, 2));
const dataJson = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(dataJson);

app.get('/', (req, res) => {
    data['/'] = counter1();
    res.send(`<h1>Корневая страница</h1>
        <p>Количество просмотров: ${data['/']} </p>
        <a href="/about">Сcылка на страницу about</a>`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
})

app.get('/about', (req, res) => {
    data['/about'] = counter2();
    res.send(`<h1>Страница about</h1>
            <p>Количество просмотров: ${data['/about']} </p>
            <a href="/">Сcылка на корневую страницу</a>`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
})

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})