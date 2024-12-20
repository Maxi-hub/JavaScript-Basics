// 1. Поиск по id, используя getElementById, элемент с id равным "super_link" и вывод этого элемента в консоль.
const superLink = document.getElementById('super_link');
const superLinkCopy = document.querySelector('#super_link');
console.log(superLink);
console.log(superLinkCopy);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", изменен текст внутри элемента на "ссылка".
const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Поиск всех элементов на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывод полученной коллекции в консоль.
const cardLinkInCardBody = document.querySelectorAll('.card-body .card-link');
console.log(cardLinkInCardBody);

// 4. Поиск первого попавшегося элемента на странице, у которого есть атрибут data-number со значением 50 и вывод его в консоль.
const dataNumber50 = document.querySelector('[data-number="50"]');
console.log(dataNumber50);

// 5. Вывод содержимого тега title в консоль.
const title = document.querySelector('title');
console.log(title);

// 6. Получение элемента с классом "card-title" и вывод его родительского узла в консоль.
const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentElement);

// 7. Создание тега `p`, запись внутри него текста "Привет" и добавление созданного тега в начало элемента, который имеет класс "card".
const pElem = document.createElement('p');
pElem.textContent = 'Привет';
const card = document.querySelector('.card');
card.prepend(pElem); //изменяет DOM, но не возвращает никакого значения. Поэтому при вызове console.log(card.prepend(pElem)) в консоль будет выведено undefined.
console.log(card.innerHTML);

// 8. Удаление тега h6 на странице.
const h6 = document.querySelector('h6');
h6.remove();

// или, если нужно удалить все теги h6
const h6All = document.querySelectorAll('h6'); 
h6All.forEach(element => { 
    element.remove();
});

