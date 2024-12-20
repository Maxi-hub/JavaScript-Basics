# Итерация и управление заказами в ресторане с использованием JavaScript  
/ Iterating and managing restaurant orders using JavaScript

## Описание проекта / Description of the project

Привет! В этом проекте я реализовала две основные функциональности: создание итерируемой музыкальной коллекции и систему управления заказами в ресторане. Основная цель — продемонстрировать свои навыки в использовании итераторов и коллекций в JavaScript.
Hi! In this project, I implemented two main functions: the creation of an iterable music collection and an order management system in the restaurant. The main goal is to demonstrate your skills in using iterators and collections in JavaScript.

## Выполненные задания 

1. Я создала объект "Музыкальная коллекция", который можно итерировать, используя `Symbol.iterator`. Каждая итерация возвращает следующий альбом из коллекции. 
- Я создала объект `musicCollection`, который содержит массив альбомов, каждый из которых имеет структуру:
    ```javascript
    {
       title: "Название альбома",
       artist: "Исполнитель",
       year: "Год выпуска"
    }
    ```
- Я реализовала кастомный итератор для объекта `musicCollection`, который перебирает альбомы по порядку. 
- С помощью цикла `for...of` я перебрала альбомы в музыкальной коллекции и вывела их на консоль в формате: "Название альбома - Исполнитель (Год выпуска)".

2. Я разработала систему управления заказами в ресторане, где работают разные повара, специализирующиеся на определенных блюдах. Эта система позволяет:
- Отслеживать, какой повар готовит какое блюдо.
- Записывать, какие блюда заказал каждый клиент.
- Я использовала коллекции `Map` для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов я использовала объекты, что позволяет эффективно управлять данными.


## Completed tasks 

1. I have created a "Music Collection" object that can be iterated using `Symbol.iterator'. Each iteration returns the next album from the collection. 
- I have created a `MusicCollection` object that contains an array of albums, each with a structure:
    ```javascript
    {
        title: "Album name",
        artist: "Artist",
        year: "Year of release"
    }
    ```
- I implemented a custom iterator for the 'MusicCollection` object, which iterates through the albums in order. 
- Using the `for...of` loop, I went through the albums in the music collection and displayed them on the console in the format: "Album name - Artist (Year of release)".

2. I have developed an order management system in a restaurant where different chefs work, specializing in certain dishes. This system allows you to:
- Track which chef prepares which dish.
- Record which dishes each customer ordered.
- I used the Map collections to store dishes and their chefs, as well as to store each customer's orders. I used objects as keys for clients, which allows for efficient data management.
