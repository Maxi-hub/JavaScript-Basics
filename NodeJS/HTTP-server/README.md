# Простой HTTP-сервер со счетчиком просмотров страниц / Simple HTTP Server with Page View Counter 

## Описание / Description 
Привет! Я рада представить вам мой проект, который представляет собой простой HTTP сервер, реализующий две страницы с возможностью перехода между ними и счетчиком просмотров. Этот проект был создан для практики работы с Node.js и основами веб-разработки.
Hi! I am pleased to present to you my project, which is a simple HTTP server that implements two pages with the ability to navigate between them and a pageview counter. This project was created to practice working with Node.js and the basics of web development.

В этом проекте я разработала HTTP сервер, который обрабатывает два основных маршрута:
1. **Главная страница (`/`)**: 
   - На этой странице пользователи могут увидеть приветственное сообщение и гиперссылку на страницу "О нас" (`/about`).
   - Также на главной странице отображается счетчик просмотров, который увеличивается на единицу каждый раз, когда страница загружается.
2. **Страница "О нас" (`/about`)**: 
   - Эта страница содержит информацию о проекте и гиперссылку обратно на главную страницу (`/`).
   - Здесь также есть счетчик просмотров, который работает аналогично главной странице.
Кроме того, я реализовала обработку несуществующих маршрутов, возвращая страницу с сообщением об ошибке 404, если пользователь попытается перейти по неверному URL.

In this project, I have developed an HTTP server that handles two main routes:
1. **Home Page (`/`)**:
- On this page, users can see a welcome message and a hyperlink to the About Us page (`/about`).
   - The main page also displays a pageview counter, which increases by one each time the page loads.
2. ** "About Us" page (`/about`)**:
- This page contains information about the project and a hyperlink back to the main page (`/`).
   - There is also a pageview counter that works similarly to the main page.
In addition, I implemented the processing of non-existent routes, returning a page with a 404 error message if the user tries to navigate to the wrong URL.


## Технические детали / Technical Details 

- Сервер написан на JavaScript с использованием Node.js.
- Для реализации счетчиков я использовала замыкания, что позволяет сохранять состояние счетчика для каждой страницы.
- Сервер слушает на порту 3000, и вы можете получить доступ к страницам, перейдя по адресу `http://localhost:3000`.

- The server is written in JavaScript using Node.js
- To implement the counters, I used closures, which allows you to save the state of the counter for each page.
- The server is listening on port 3000, and you can access the pages by going to `http://localhost:3000 `.


### Как запустить проект
1. Убедитесь, что у вас установлен Node.js.
2. Скопируйте код сервера в файл, например, `server.js`.
3. Откройте терминал и перейдите в директорию с файлом.
4. Запустите сервер командой:
   ```bash
   node server.js
   ```
5. Откройте браузер и перейдите по адресу `http://localhost:3000`.

### How to launch a project
1. Make sure that you have Node installed.js.
2. Copy the server code to a file, for example, `server.js `.
3. Open the terminal and navigate to the directory with the file.
4. Start the server with the command:
   ```bash
   node server.js
   ```
5. Open a browser and navigate to `http://localhost:3000 `.

Я надеюсь, что этот проект будет полезен для изучения основ работы с HTTP серверами и взаимодействия с пользователями через веб-страницы. Если у вас есть вопросы или предложения, не стесняйтесь обращаться!
I hope this project will be useful for learning the basics of working with HTTP servers and interacting with users through web pages. If you have any questions or suggestions, do not hesitate to contact us!

Спасибо за внимание!
Thanks for your attention!