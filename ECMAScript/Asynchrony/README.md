## Работа с API и динамическое изменение стилей в JavaScript / Working with the API and dynamically changing styles in JavaScript

# Описание выполненных заданий / Description of completed tasks

Делюсь с вами результатами своей работы над тремя заданиями, которые касаются получения и отправки данных о пользователе, а также изменения стиля элемента на веб-странице.
I am sharing with you the results of my work on three tasks that relate to receiving and sending user data, as well as changing the style of an element on a web page.

**Получение данных о пользователе**
В этом задании я реализовала функцию `getUserData`, которая принимает идентификатор пользователя (ID) в качестве аргумента. Эта функция использует метод `fetch` для получения данных о пользователе с удаленного сервера по API: [https://reqres.in/](https://reqres.in/). 
- Функция возвращает промис, который разрешается с данными о пользователе в виде объекта. 
- Если пользователь с указанным ID не найден, промис отклоняется с соответствующим сообщением об ошибке. Это позволяет эффективно обрабатывать запросы и получать нужную информацию.

**Getting user data**
In this assignment, I implemented the `getUserData` function, which takes the user's ID as an argument. This function uses the `fetch` method to retrieve user data from a remote server via the API: [https://reqres.in /](https://reqres.in /). 
- The function returns a promise that resolves with user data in the form of an object. 
- If the user with the specified ID is not found, the promise is rejected with a corresponding error message. This allows you to efficiently process requests and get the necessary information.


**Отправка данных на сервер**
В задании я разработала функцию `saveUserData`, которая принимает объект с данными о пользователе в качестве аргумента. Эта функция также использует метод `fetch` для отправки данных на удаленный сервер для сохранения.
- Функция возвращает промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки. Это обеспечивает надежную передачу данных и обработку возможных проблем.

**Sending data to the server**
In the assignment, I developed the `saveUserData` function, which accepts an object with user data as an argument. This function also uses the `fetch` method to send data to a remote server for saving.
- The function returns a promise, which is resolved if the data is successfully sent, or rejected in case of an error. This ensures reliable data transmission and handling of possible problems.


**Изменение стиля элемента через заданное время**
В последнем задании я написала функцию `changeStyleDelayed`, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. 
- Функция изменяет стиль элемента (например, цвет текста) через указанное время. Это демонстрирует работу с DOM и позволяет создавать динамичные изменения на веб-странице.

**Change the style of an element after a set time**
In the last assignment, I wrote the `changeStyleDelayed` function, which takes the element ID and delay time (in milliseconds) as arguments. 
- The function changes the style of the element (for example, the color of the text) after a specified time. This demonstrates how to work with the DOM and allows you to create dynamic changes on a web page.


## Технологии / Technologies

В процессе работы над этими заданиями я использовала следующие технологии и концепции:
- **Fetch API**: для выполнения асинхронных запросов к удаленному серверу, что позволяет получать и отправлять данные.
- **Промисы**: для обработки асинхронных операций и управления результатами запросов.
- **DOM**: для изменения стилей элементов на веб-странице, что делает интерфейс более интерактивным.

While working on these tasks, I used the following technologies and concepts:
- **Fetch API**: to make asynchronous requests to a remote server, which allows you to receive and send data.
- **- **Premixes**: for processing asynchronous operations and managing query results.
- **DOM**: to change the styles of elements on a web page, making the interface more interactive.