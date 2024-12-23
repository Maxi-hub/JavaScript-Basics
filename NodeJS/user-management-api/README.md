# API для управления пользователями / User Management API

## Описание / Description 

Привет! Я рада представить вам мой проект, который представляет собой API для управления пользователями. Это приложение было создано с использованием Express.js и включает в себя функции для создания, чтения, обновления и удаления пользователей. Этот проект был разработан для практики работы с RESTful API и валидацией данных с помощью Joi.
Hi! I am pleased to present to you my project, which is an API for user management. This application was created using Express.It uses js and includes functions for creating, reading, updating, and deleting users. This project was developed to practice working with RESTful API and data validation using Join.


В этом проекте я разработала API, который предоставляет следующие возможности:
1. **Получить всех пользователей**:
   - Запрос по адресу `/users` возвращает список всех пользователей, хранящихся в файле `users.json`.
2. **Получить конкретного пользователя**:
   - Запрос по адресу `/users/:id` позволяет получить информацию о конкретном пользователе по его уникальному идентификатору (ID). Если пользователь не найден, возвращается сообщение об ошибке.
3. **Создание нового пользователя**:
   - Запрос по адресу `/users` с данными пользователя в формате JSON создает нового пользователя. Данные проходят валидацию с помощью Joi, и в случае ошибок возвращается сообщение с деталями.
4. **Обновление пользователя**:
   - Запрос по адресу `/users/:id` позволяет обновить информацию о конкретном пользователе. Данные также проходят валидацию, и в случае ошибок возвращается сообщение с деталями.
5. **Удаление пользователя**:
   - Запрос по адресу `/users/:id` удаляет пользователя с указанным ID. Если пользователь не найден, возвращается сообщение об ошибке.
6. **Обработка несуществующих роутов**:
   - Если пользователь пытается получить доступ к несуществующему маршруту, API возвращает сообщение о том, что URL не найден.

In this project, I have developed an API that provides the following features:
1. **Get all users**:
- A request to `/users` returns a list of all users stored in the `users' file.json`.
2. **Get a specific user**:
- A request to the address `/users/:id` allows you to get information about a specific user by his unique identifier (ID). If the user is not found, an error message is returned.
3. **Create a new user**:
   - A request to `/users` with user data in JSON format creates a new user. The data is validated using Joi, and in case of errors, a message with details is returned.
4. **User Update**:
- A request to `/users/:id` allows you to update information about a specific user. The data is also validated, and in case of errors, a message with details is returned.
5. **Deleting a user**:
- A request to `/users/:id` deletes a user with the specified ID. If the user is not found, an error message is returned.
6. **Handling non-existent routes**:
- If a user tries to access a non-existent route, the API returns a message stating that the URL has not been found.


## Технические детали / Technical Details 

- Сервер написан на JavaScript с использованием Express.js.
- Для валидации данных используется библиотека Joi.
- Уникальные идентификаторы пользователей генерируются с помощью библиотеки uuid.
- Данные пользователей хранятся в файле `users.json`, который обновляется при каждом изменении.

- The server is written in JavaScript using Express.js .
- - The Joy library is used for data validation.
- Unique user IDs are generated using the uuid library.
- User data is stored in the `users' file.json`, which is updated with each change.


### Как запустить проект
1. Убедитесь, что у вас установлен Node.js и пакетный менеджер npm.
2. Скопируйте код сервера в файл, например, `index.js`.
3. Убедитесь, что у вас установлены необходимые зависимости. Если нет, выполните команду:
   ```bash
   npm install express joi uuid
   ```
4. Откройте терминал и перейдите в директорию с файлом.
5. Запустите сервер командой:
   ```bash
   node index.js
   ```
6. Теперь вы можете использовать API, отправляя HTTP-запрос на адрес `http://localhost:3000`.

### How to launch a project
1. Make sure that you have Node installed.js and the npm package manager.
2. Copy the server code to a file, for example, `index.js `.
3. Make sure that you have the necessary dependencies installed. If not, run the command:
``bash
   npm install express joi uuid
   ```
4. Open the terminal and navigate to the directory with the file.
5. Start the server with the command:
   ```bash
   node index.js
   ```
6. Now you can use the API by sending an HTTP request to the address `http://localhost:3000 `.

Я надеюсь, что этот проект будет полезен для изучения основ работы с RESTful API, валидацией данных и взаимодействием с файловой системой в Node.js. Если у вас есть вопросы или предложения, не стесняйтесь обращаться!
I hope this project will be useful for learning the basics of working with the RESTful API, data validation, and interacting with the file system in Node.js . If you have any questions or suggestions, do not hesitate to contact us!

Спасибо за внимание!
Thanks for your attention!