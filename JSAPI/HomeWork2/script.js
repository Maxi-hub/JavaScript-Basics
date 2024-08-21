// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.
// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
//     a. Контейнер для отображения текущего изображения.
//     b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
//     c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.
// 2. Используйте HTML для создания элементов интерфейса.
// 3. Используйте JavaScript для обработки событий:
//     a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
//     b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
//     c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.
// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const img1 = './img/peaches.png';
const img2 = './img/cherry.png';
const img3 = './img/apples.png';
const images = [img1, img2, img3];

const items = document.querySelector('.items');
const inputs = document.querySelectorAll('input');
const prevBtn = document.querySelector('.button-previous');
const nextBtn = document.querySelector('.button-next');

let index = 0;
items.innerHTML = `<img src=${images[index]}>`

inputs.forEach((input, index) => {
    input.addEventListener('change', function (e) {
        images.forEach((img, imgIndex) => {
            if (imgIndex === index) {
                items.innerHTML = `<img src=${images[index]}>`;
            }
        });
    });
});


nextBtn.onclick = () => {
    if (index < images.length - 1) {
        index++;
    }
    else {
        index = 0;
    }
    inputs.forEach((input, inputIndex) => {
        if (inputIndex !== index) {
            input.checked = false;
        } else {
            input.checked = true;
        }
    });
    items.innerHTML = `<img src=${images[index]}>`
}

prevBtn.onclick = () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    inputs.forEach((input, inputIndex) => {
        if (inputIndex !== index) {
            input.checked = false;
        } else {
            input.checked = true;
        }
    });
    items.innerHTML = `<img src=${images[index]}>`
}
