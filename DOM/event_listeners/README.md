# Обработка событий и манипуляция DOM с помощью JavaScript / Event handling and DOM manipulation using JavaScript

## Описание выполненных заданий / Description of completed tasks

Привет! В этом проекте я реализовала несколько заданий, связанных с обработкой событий и манипуляцией с элементами DOM на веб-странице. Основная цель — продемонстрировать свои навыки работы с JavaScript и взаимодействия с элементами страницы.
Hi! In this project, I have implemented several tasks related to event handling and manipulation of DOM elements on a web page. The main goal is to demonstrate your skills working with JavaScript and interacting with page elements.

**Обработка загрузки страницы**:
- Я реализовала события, которые выводят сообщения в консоль, когда все теги загружены и когда все ресурсы страницы загружены. Это позволяет отслеживать состояние загрузки страницы.
**Делегирование событий**:
- При клике на любой элемент на странице выводится информация о наличии класса "super_element" у элемента. Я использовала делегирование событий для обработки кликов, что позволяет эффективно управлять событиями на динамически изменяемых страницах.
**Наведение на элемент**:
- При наведении на элемент `textarea` в консоль выводится сообщение, что я навела курсор на этот элемент. Это демонстрирует использование событий мыши.
**Обработка кликов на списке**:
- Я реализовала событие клика на элементе `ul`, которое выводит текст кнопки, по которой был совершен клик. Если клик был не по кнопке, ничего не выводится. Это также использует делегирование событий.
**Изменение стиля элементов**:
- С помощью JavaScript я изменила цвет фона каждого второго элемента списка `li`, что демонстрирует манипуляцию с CSS-стилями через JavaScript.

- **Вопрос**: Почему в `console.log` сначала выводится текст из 5 задания, а затем текст из 3 задания при клике на кнопки в `ul`?
- **Ответ**: Это происходит из-за порядка обработки событий. В 3 задании делегирование событий происходит на уровне `document`, и обработчик событий проходит по всем объектам в поисках нужного значения, а затем всплывает. В 5 задании обработчик событий навешан на конкретный объект `ul`, и приоритет вывода происходит от объекта, на который установлен обработчик событий. Чем меньше дочерних объектов он содержит, тем быстрее происходит всплытие и вывод значения в консоль.

Этот проект демонстрирует мои навыки в работе с JavaScript, обработкой событий и манипуляцией с элементами DOM. 


**Page loading processing**:
- I have implemented events that display messages to the console when all tags are loaded and when all page resources are loaded. This allows you to track the page loading status.
**Event delegation**:
- When clicking on any element on the page, information is displayed about the presence of the "super_element" class in the element. I used event delegation to handle clicks, which allows for efficient event management on dynamically resizable pages.
**Pointing at an element**:
- When I hover over the `textarea' element, the console displays a message that I have hovered over this element. This demonstrates the use of mouse events.
**Processing clicks on a list**:
- I implemented a click event on the `ul` element, which displays the text of the clicked button. If the click was not on the button, nothing is displayed. It also uses event delegation.
**Changing the style of the elements**:
- Using JavaScript, I changed the background color of every second element of the list `li`, which demonstrates the manipulation of CSS styles through JavaScript.

- **Question**: Why does `console.log` first display the text from the 5th task, and then the text from the 3rd task when clicking on the buttons in `ul'?
- **Answer**: This is due to the order in which events are handled. In task 3, event delegation occurs at the `document` level, and the event handler goes through all the objects in search of the desired value, and then pops up. In task 5, the event handler is attached to a specific `ul` object, and the output priority depends on the object on which the event handler is installed. The fewer child objects it contains, the faster the value is displayed and output to the console.

This project demonstrates my skills in working with JavaScript, event handling, and manipulating DOM elements.