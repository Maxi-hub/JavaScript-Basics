# Система отзывов для web-сайта и система управления библиотекой
/ The feedback system for the website and the library management system

## Описание проекта / Description of the project

В этом проекте я разработала две функциональные системы: систему отзывов для веб-сайта и класс для управления библиотекой. Обе системы направлены на улучшение взаимодействия пользователей с контентом и оптимизацию управления данными.
In this project, I have developed two functional systems: a feedback system for the website and a class for library management. Both systems are aimed at improving user interaction with content and optimizing data management.


### Система отзывов
Я создала интуитивно понятный интерфейс, который позволяет пользователям оставлять отзывы о нашем веб-сайте. Важным аспектом было установление ограничений на длину отзывов: минимальная длина составляет 50 символов, а максимальная — 500. Это позволяет избежать слишком коротких или чрезмерно длинных сообщений, которые могут затруднить восприятие информации.
- **HTML-структура**: Я разработала текстовое поле для ввода отзыва, кнопку для отправки и контейнер, где будут отображаться все отзывы. 
- **Функциональность**: При добавлении отзыва он отображается под предыдущими, что создает удобный и последовательный поток информации. Если пользователь пытается ввести отзыв, который не соответствует установленным ограничениям, система генерирует исключение с соответствующим сообщением.

### Feedback system
I have created an intuitive interface that allows users to leave feedback about our website. An important aspect was the setting of limits on the length of reviews: the minimum length is 50 characters, and the maximum is 500 characters. This allows you to avoid messages that are too short or excessively long, which can make it difficult to perceive information.
- **HTML structure**: I have developed a text field for entering a review, a button for sending and a container where all reviews will be displayed. 
- **Functionality**: When adding a review, it is displayed below the previous ones, which creates a convenient and consistent flow of information. If the user tries to enter a review that does not meet the established restrictions, the system generates an exception with a corresponding message.


### Управление библиотекой
Вторая часть проекта — это класс для управления библиотекой, который обеспечивает удобное взаимодействие с книгами.
- **Приватное свойство**: Я реализовала приватное свойство `#books`, которое инициализируется пустым массивом и хранит список книг.
- **Методы**:
  - `allBooks`: геттер, возвращающий текущий список книг.
  - `addBook(title)`: метод для добавления книги в список. Если книга с таким названием уже существует, выбрасывается ошибка.
  - `removeBook(title)`: метод для удаления книги по названию. Если книги с таким названием нет, также выбрасывается ошибка.
  - `hasBook(title)`: метод, проверяющий наличие книги в библиотеке и возвращающий `true` или `false`.
- **Конструктор**: Я предусмотрела конструктор, который принимает начальный список книг в качестве аргумента. Важно, что предоставленный массив не должен содержать дубликатов, иначе будет выброшена ошибка.

### Library Management
The second part of the project is a library management class that provides convenient interaction with books.
- **Private property**: I have implemented a private property `#books`, which is initialized with an empty array and stores a list of books.
- **Methods**:
- `allBooks`: getter that returns the current list of books.
  - `addBook(title)': A method for adding a book to the list. If a book with that name already exists, an error is thrown.
  - `removeBook(title)': A method for deleting a book by title. If there is no book with that name, an error is also thrown.
  - `hasBook(title)': A method that checks if a book is in the library and returns `true` or `false'.
- **Designer**: I have provided a constructor that takes the initial list of books as an argument. It is important that the provided array should not contain duplicates, otherwise an error will be thrown.


Эти проекты не только улучшают функциональность нашего веб-сайта, но и сделают его более удобным для пользователей. 
These projects not only improve the functionality of our website, but also make it more user-friendly.