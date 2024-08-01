//Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const productNameEL = document.querySelector('.input-productname');
const reviewEl = document.querySelector('.input-review');
const buttonAdd = document.querySelector('.add-button');
const buttonRemove = document.querySelector('.remove-button');
const reviewsBox = document.createElement('div');
document.body.appendChild(reviewsBox);

const info = document.createElement('div');
reviewsBox.appendChild(info);

let product = localStorage.getItem(productNameEL.value) || [];

for (let i = 0; i < localStorage.length; i++) {
    const productList = document.createElement('ul');
    productList.className = localStorage.key(i);
    productList.textContent = localStorage.key(i);
    reviewsBox.appendChild(productList);

    productList.addEventListener('click', () => {
        // product.forEach(item => { // 1,2,3
        //     const listItem = document.createElement('li');
        //     listItem.textContent = item;
        //     productList.appendChild(listItem);
        // });
    });
}



const updateProductReviews = () => {
    info.innerHTML = '';

    if (localStorage.getItem(productNameEL.value.trim()) !== null) {
        product = [localStorage.getItem(productNameEL.value)];
        product.push(reviewEl.value);
        info.textContent = 'Отзыв на продукт добавлен';
        reviewEl.value = '';

    }
    localStorage.setItem(productNameEL.value, product);
}


buttonAdd.addEventListener('click', () => {
    if (productNameEL.value.trim() === '') {
        reviewsBox.textContent = 'Введите название продукта';
    } else if (reviewEl.value.trim() === '') {
        reviewsBox.textContent = 'Введите отзыв';
    } else if (productNameEL.value.trim() !== '' && localStorage.getItem(productNameEL.value.trim()) === null) {
        localStorage.setItem(productNameEL.value, reviewEl.value);

        product.push(reviewEl.value.trim());
        info.innerHTML = 'Отзыв на продукт добавлен';
        reviewEl.value = '';
        return (product, reviewsBox);
    }
    updateProductReviews();
});

updateProductReviews();


buttonRemove.addEventListener('click', function (e) {
    localStorage.removeItem(productNameEL.value);
    info.innerHTML = 'Продукт удален!';
});




