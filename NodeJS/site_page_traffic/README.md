# Cчетчик посещаемости страниц сайта / Site Page Traffic Counter

## Описание / Description 

Привет! Я рада представить вам мой проект, который представляет собой простое веб-приложение на основе Express.js. Это приложение включает в себя две страницы: корневую страницу и страницу "О нас", каждая из которых имеет счетчик просмотров. Этот проект был создан для работы с Node.js и Express, а также для работы с файловой системой.
Hi! I am pleased to present to you my project, which is a simple web application based on Express.js . This application includes two pages: the root page and the "About Us" page, each of which has a view counter. This project was created to work with Node.js and Express, as well as for working with the file system.


В этом проекте я разработала веб-сервер, который обрабатывает два основных маршрута:
**Корневая страница (`/`)** и **Страница "О нас" (`/about`)**:
   - На этой странице пользователи могут увидеть приветственное сообщение и количество просмотров этих страниц при переходе на каждую из них.
   - Каждый раз, когда страница загружается, счетчик просмотров увеличивается на единицу, и обновленное значение сохраняется в файл `counter.json`.

In this project, I have developed a web server that handles two main routes:
**Root page (`/`)** and **About page (`/about`)**:
- On this page, users can see a welcome message and the number of views of these pages when they go to each of them.
   - Each time a page loads, the pageview counter increases by one, and the updated value is saved to the `counter' file.json`.


## Технические детали / Technical Details 

- Сервер написан на JavaScript с использованием Express.js.
- Для хранения количества просмотров используется файл `counter.json`, который обновляется каждый раз при загрузке страницы.
- Сервер слушает на порту 3000, и вы можете получить доступ к страницам, перейдя по адресу `http://localhost:3000`.

- The server is written in JavaScript using Express.js .
- The `counter' file is used to store the number of views.json`, which is updated every time the page loads.
- The server is listening on port 3000, and you can access the pages by going to `http://localhost:3000 `.


### Как запустить проект

1. Убедитесь, что у вас установлен Node.js и пакетный менеджер npm.
2. Скопируйте код сервера в файл, например, `index.js`.
3. Убедитесь, что у вас установлен пакет Express. Если нет, выполните команду:
   ```bash
   npm install express
   ```
4. Откройте терминал и перейдите в директорию с файлом.
5. Запустите сервер командой:
   ```bash
   node index.js
   ```
6. Откройте браузер и перейдите по адресу `http://localhost:3000` для доступа к корневой странице или `http://localhost:3000/about` для доступа к странице "О нас".

### How to launch a project

1. Make sure that you have Node installed.js and the npm package manager.
2. Copy the server code to a file, for example, `index.js `.
3. Make sure that you have the Express package installed. If not, run the command:
``bash
   npm install express
   ```
4. Open the terminal and navigate to the directory with the file.
5. Start the server with the command:
   ```bash
   node index.js
   ```
6. Open a browser and navigate to `http://localhost:3000 ` to access the root page or `http://localhost:3000/about ` to access the About Us page.

Спасибо за внимание!
Thanks for your attention!