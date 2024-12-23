# Вычисление окружности и случайного выбора книги / Circle Area and Random Book Selector 

## Описание / Description 

Привет! Я рада представить вам мой проект, который сочетает в себе две интересные функции: вычисление площади круга и случайный выбор книги из библиотеки. Этот проект был создан для практики работы с Node.js и основами веб-разработки.
Hi! I am pleased to present to you my project, which combines two interesting functions: calculating the area of a circle and randomly selecting a book from the library. This project was created to practice working with Node.js and the basics of web development.

В этом проекте я разработала HTTP сервер, который обрабатывает два основных действия:
1. **Вычисление площади круга**:
   - Пользователи могут отправить запрос с радиусом, и сервер вернет площадь круга, вычисленную по формуле \( \pi \times r^2 \).
   - Например, отправив запрос с параметром `?action=circle&radius=15`, вы получите площадь круга с радиусом 15.

1. **Calculating the area of a circle**:
- Users can send a request with a radius, and the server will return the area of the circle calculated using the formula \(\pi\times r^2\).
   - For example, by sending a request with the parameter `?action=circle&radius=15`, you will get the area of a circle with a radius of 15.


2. **Случайный выбор книги**:
   - Пользователи могут запросить случайную книгу из заранее заданной библиотеки.
   - Каждое обращение к серверу с параметром `?action=book` вернет название и автора случайной книги. Когда книги закончатся, сервер сообщит, что все книги прочитаны.

2. **Random Book Selection**:
- Users can request a random book from a predefined library.
   - Each request to the server with the `?action=book` parameter will return the name and author of a random book. When the books are finished, the server will inform you that all the books have been read.


## Технические детали / Technical Details 

- Сервер написан на JavaScript с использованием Node.js.
- Для вычисления площади круга используется функция `getCircleArea`, а для выбора книги — функция `getRandomBook`.
- Сервер слушает на порту 3000, и вы можете получить доступ к функциональности, перейдя по адресу `http://localhost:3000`.

- The server is written in JavaScript using Node.js - The `
getCircleArea` function is used to calculate the area of the circle, and the `getRandomBook` function is used to select a book.
- The server is listening on port 3000, and you can access the functionality by going to `http://localhost:3000 `.


### Как запустить проект

1. Убедитесь, что у вас установлен Node.js.
2. Скопируйте код сервера в файл, например, `index.js`.
3. Откройте терминал и перейдите в директорию с файлом.
4. Убедитесь, что у вас есть файл `package.json` с командой `"start": "node ./index.js"`.
5. Запустите сервер командой:
   ```bash
   npm run start
   ```
6. Откройте браузер и используйте следующие URL для тестирования:
   - Для вычисления площади круга: `http://localhost:3000/?action=circle&radius=15`
   - Для получения случайной книги: `http://localhost:3000/?action=book`


### How to launch a project

1. Make sure that you have Node installed.js.
2. Copy the server code to a file, for example, `index.js `.
3. Open the terminal and navigate to the directory with the file.
4. Make sure that you have the `package' file.json` with the command `"start": "node ./index.js "`.
5. Start the server with the command:
   ```bash
   npm run start
   ```
6. Open a browser and use the following URLs for testing:
- To calculate the area of the circle: `http://localhost:3000 /?action=circle&radius=15`
   - To get a random book: `http://localhost:3000 /?action=book`


Спасибо за внимание!
Thanks for your attention!