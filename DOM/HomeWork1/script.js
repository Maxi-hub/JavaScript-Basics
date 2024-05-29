// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLink = document.getElementById('super_link');
const superLinkCopy = document.querySelector('#super_link');
console.log(superLink);
console.log(superLinkCopy);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardLinkInCardBody = document.querySelectorAll('.card-body .card-link');
console.log(cardLinkInCardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dataNumber50 = document.querySelector('[data-number="50"]');
console.log(dataNumber50);

// 5. Выведите содержимое тега title в консоль.
const title = document.querySelector('title');
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentElement);

// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pElem = document.createElement('p');
pElem.textContent = 'Привет';
const card = document.querySelector('.card');
card.prepend(pElem); 

// 8. Удалите тег h6 на странице.
const h6 = document.querySelector('h6');
h6.remove();

//или, если нужно удалить все теги h6
// const h6All = document.querySelectorAll('h6'); // сформировался список
// console.log(h6All);  // убедилась, что тег h6 единственный на странице
// h6All.forEach(element => { // в данном случае удаление только через цикл
//     element.remove();
// });

