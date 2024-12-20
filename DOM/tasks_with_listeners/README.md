# Динамическое обновление и валидация форм с помощью JavaScript / Dynamic updating and validation of forms using JavaScript

## Описание проекта / Description of the project

Привет! В этом проекте я выполнила несколько заданий, связанных с динамическим обновлением значений и валидацией форм с использованием JavaScript. Основная цель — продемонстрировать свои навыки в работе с элементами формы и взаимодействии с пользователем.
Hi! In this project, I have completed several tasks related to dynamically updating values and validating forms using JavaScript. The main goal is to demonstrate your skills in working with form elements and interacting with the user.

## Выполненные задания 

1. Я реализовала функциональность, при которой при изменении значения в `input` с id="from" значение, содержащееся в нем, моментально отображается в `span`. Это позволяет пользователю видеть изменения в реальном времени, что улучшает взаимодействие с формой.
2. При клике на кнопку с классом `messageBtn` я добавила два класса: `animate_animated` и `animate_fadeInLeftBig` к элементу с классом `message`. Также я установила стиль `visibility` этого элемента в значение 'visible', что делает его видимым и добавляет анимацию при появлении.
3. Я реализовала проверку при отправке формы, чтобы убедиться, что все поля заполнены. Если какое-либо поле не заполнено, форма не отправляется, и незаполненные поля подсвечиваются с помощью класса `error`. Как только пользователь начинает заполнять какое-либо поле, происходит проверка:
- Если поле пустое, оно подсвечивается (устанавливается класс `error`).
- Если поле было заполнено, подсветка (класс `error`) убирается, что позволяет пользователю видеть, что поле теперь корректно заполнено.


## Completed tasks 

1. I have implemented a functionality in which, when changing the value in `input` with id="from", the value contained in it is instantly displayed in `span`. This allows the user to see the changes in real time, which improves interaction with the form.
2. When clicking on the button with the `messageBtn` class, I added two classes: `animate_animated` and `animate_fadeInLeftBig` to the element with the `message` class. I also set the `visibility` style of this element to 'visible', which makes it visible and adds animation when it appears.
3. I implemented a check when submitting the form to make sure that all fields are filled in. If any field is not filled in, the form is not submitted, and the unfilled fields are highlighted using the `error` class. As soon as the user starts filling in any field, verification takes place.:
- If the field is empty, it is highlighted (the `error` class is set).
- If the field has been filled in, the backlight (class `error`) is removed, which allows the user to see that the field is now filled in correctly.
