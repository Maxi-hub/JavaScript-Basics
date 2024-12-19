## Веб-приложение "Фото дня" / Photo of the day

![ Main ](./readme_assets/1.png)


### Описание проекта / Description of the project

Я рада поделиться с вами своим новым проектом — веб-приложением "Фото дня", которое каждый день радует пользователей случайным изображением из обширной коллекции Unsplash. Это приложение не только позволяет наслаждаться красивыми фотографиями, но и дает возможность узнать больше о фотографах, а также взаимодействовать с контентом через функцию "лайка".

I am glad to share with you my new project, the Photo of the Day web application, which pleases users every day with a random image from the extensive Unsplash collection. This application not only allows you to enjoy beautiful photos, but also gives you the opportunity to learn more about photographers, as well as interact with content through the "like" function.


### Разработка веб-приложения / Web application Development:

- Я создала HTML-страницу, которая включает в себя все необходимые элементы: изображение, имя фотографа, кнопку "лайк" и счетчик лайков. Это обеспечило интуитивно понятный интерфейс для пользователей.
- С помощью JavaScript и полученного API-ключа я реализовала функционал, который позволяет загружать случайное изображение из Unsplash каждый раз, когда пользователь открывает страницу. Это создает эффект новизны и ожидания.
- Под изображением я добавила информацию о фотографе, что позволяет пользователям узнать больше о творцах контента.
- Реализовала кнопку "лайк", которая увеличивает счетчик лайков на единицу при каждом нажатии. Это добавляет элемент взаимодействия и вовлеченности.
- Для удобства пользователей я внедрила функцию сохранения количества лайков в локальное хранилище `localstorage` браузера. Теперь при обновлении страницы счетчик не сбрасывается, и пользователи могут видеть свои лайки.
- Также я добавила возможность просмотра предыдущих "фото дня", сохраняя их в истории просмотров. Это позволяет пользователям возвращаться к любимым изображениям и фотографам.

- I have created an HTML page that includes all the necessary elements: an image, the name of the photographer, a like button and a like counter. This provided an intuitive user interface.
- Using JavaScript and the resulting API key, I implemented a functionality that allows you to download a random image from Unsplash every time a user opens a page. This creates the effect of novelty and expectation.
- I added information about the photographer under the image, which allows users to learn more about the creators of the content.
- Implemented the "like" button, which increases the likes counter by one each time you click. This adds an element of interaction and engagement.
- For the convenience of users, I have implemented the function of saving the number of likes in the local storage of the browser `localstorage`. Now, when the page is refreshed, the counter is not reset, and users can see their likes.
- I also added the ability to view previous "photos of the day", saving them in the browsing history. This allows users to return to their favorite images and photographers.


### Технологии / Technologies:

В данном проекте используются несколько технологий и инструментов, которые обеспечивают его функциональность и взаимодействие с пользователем. Вот основные из них:
1. **JavaScript**
- Получение случайного изображения из API Unsplash с помощью функции `fetchPhotos()`.  
- Обновление интерфейса с помощью функции `getPhoto(data)`, которая отображает загруженное изображение и информацию о фотографе.  
- Реализацию функционала "лайка" с помощью функции `likePhoto(data)`, которая обновляет счетчик лайков и сохраняет данные в локальное хранилище.  
- Управление историей просмотров фотографий с помощью функций `lookPreviousPhoto(previousPhotosArray)` и `getPreviousPhoto(previousPhotosArray, index)`.  
2. **API (Application Programming Interface)**
- В проекте используется API Unsplash для получения случайных фотографий. Это позволяет динамически загружать контент и обеспечивать разнообразие изображений для пользователей.  
3. **Local Storage**
- Local Storage используется для хранения данных о количестве лайков и информации о фотографиях. Это позволяет сохранять состояние приложения между обновлениями страницы, что улучшает пользовательский опыт.  
4. **Асинхронные функции (async/await)**
- Асинхронные функции используются для работы с API и обработки данных. Это позволяет избежать блокировки интерфейса во время загрузки данных и обеспечивает плавное взаимодействие с пользователем.  

This project uses several technologies and tools that provide its functionality and user interaction. Here are the main ones:
1. **JavaScript**
- Getting a random image from the Unsplash API using the `fetchPhotos()` function.
- Updating the interface using the `getPhoto(data)` function, which displays the uploaded image and information about the photographer.  
- Implementation of the "like" functionality using the "likePhoto(data)" function, which updates the like counter and saves data to local storage.  
- Managing the history of photo views using the functions `lookPreviousPhoto(previousPhotosArray)` and `getPreviousPhoto(previousPhotosArray, index)'.  
2. **API (Application Programming Interface)**
- The project uses the Unsplash API to get random photos. This allows you to dynamically upload content and provide a variety of images for users.  
3. **Local Storage**
- Local Storage is used to store data on the number of likes and information about photos. This allows you to save the state of the application between page updates, which improves the user experience.  
4. **Asynchronous functions (async/await)**
- Asynchronous functions are used to work with the API and process data. This avoids blocking the interface during data loading and ensures smooth user interaction.


### Запуск проекта:

Для корректного отображения проекта и работы с API рекомендуется запустить его с помощью локального сервера. Вы можете использовать любой доступный локальный сервер, например:
- Встроенный сервер в Python
- Node.js с пакетом http-server
- Другие инструменты или редакторы, поддерживающие локальный сервер
После запуска локального сервера откройте браузер и перейдите по адресу, предоставленному сервером, чтобы увидеть проект в действии.

To display the project correctly and work with the API, it is recommended to run it using a local server. You can use any available local server, for example:
- Built-in Python server
- Node.js with the http server package
- Other tools or editors that support the local server
After starting the local server, open a browser and navigate to the address provided by the server to see the project in action.


Проект "Фото дня" предоставляет пользователям возможность наслаждаться случайными фотографиями, взаимодействовать с ними и сохранять свои предпочтения, создавая уникальный и увлекательный опыт.

The Photo of the Day project provides users with the opportunity to enjoy random photos, interact with them and save their preferences, creating a unique and exciting experience.