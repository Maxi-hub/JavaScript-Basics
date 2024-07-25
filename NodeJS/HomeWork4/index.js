// Для того, чтобы пользователи хранились постоянно, а не только, когда запущен сервер, необходимо реализовать хранение массива в файле.
// Подсказки:
// — В обработчиках получения данных по пользователю нужно читать файл
// — В обработчиках создания, обновления и удаления нужно файл читать, чтобы убедиться, что пользователь существует, а затем сохранить в файл, когда внесены изменения
// — Не забывайте про JSON.parse() и JSON.stringify() - эти функции помогут вам переводить объект в строку и наоборот.

const express = require('express');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const uuid = require('uuid');

const app = express();

const userId = uuid.v4();

const usersSchema = Joi.object({
    firstName: Joi.string().min(2).max(30).required(),
    secondName: Joi.string().min(3).required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().min(2)
});

const usersListPath = path.join(__dirname, 'users.json')
app.use(express.json());

const usersJson = fs.readFileSync(usersListPath, 'utf-8');
const usersData = JSON.parse(usersJson);
usersData[0].id = userId;
fs.writeFileSync(usersListPath, JSON.stringify(usersData));

/**
* Получить всех пользователей
*/
app.get('/users', (req, res) => {
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    res.send({ users: usersData });
})

/**
* Получить коокретного пользователя
*/
app.get('/users/:id', (req, res) => {
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    const user = usersData.find((user) => user.id === req.params.id);

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({
            user: null,
            message: "Пользователь не найден"
        });
    }
})

/**
* Создание нового пользователя
*/
app.post('/users', (req, res) => {
    const validateData = usersSchema.validate(req.body);
    if (validateData.error) {
        return res.status(400).send({ error: validateData.error.details })
    }
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    const userId = uuid.v4();

    usersData.push({
        id: userId,
        ...req.body
    });
    fs.writeFileSync(usersListPath, JSON.stringify(usersData));

    res.send({
        id: userId,
        ...req.body
    })

})


/**
* Обновление статьи
*/
app.put('/users/:id', (req, res) => {
    const validateData = usersSchema.validate(req.body);
    if (validateData.error) {
        return res.status(400).send({ error: validateData.error.details })
    }
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    const user = usersData.find((user) => user.id === req.params.id);

    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;

        fs.writeFileSync(usersListPath, JSON.stringify(usersData));

        res.send({ user });
    } else {
        res.status(404);
        res.send({
            user: null,
            message: "Пользователь не найден"
        });
    }
})


/**
* Удаление статьи
*/
app.delete('/users/:id', (req, res) => {
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    const userIndex = usersData.findIndex((user) => user.id === req.params.id);

    if (userIndex > -1) {
        usersData.splice(userIndex, 1); // удаляет 1 элемент массива(с позиции userIndex) 
        fs.writeFileSync(usersListPath, JSON.stringify(usersData));

        res.send({ message: 'Пользователь успешно удален!' });
    } else {
        res.status(404);
        res.send({ message: 'Пользователь не найден!' });
    }
})

/**
* Обработка несуществующих роутов
*/
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found'
    })
})

app.listen(3000, () => {
    console.log('Сервер запущена на проту 3000');
});
