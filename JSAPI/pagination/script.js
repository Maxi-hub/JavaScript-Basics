const img1 = './img/peaches.png';
const img2 = './img/cherry.png';
const img3 = './img/apples.png';
const images = [img1, img2, img3];

const items = document.querySelector('.items');
const inputs = document.querySelectorAll('input');
const prevBtn = document.querySelector('.button-previous');
const nextBtn = document.querySelector('.button-next');

let index = 0;
// items.innerHTML = `<img src=${images[index]}>`

// inputs.forEach((input, index) => {
//     input.addEventListener('change', function (e) {
//         images.forEach((img, imgIndex) => {
//             if (imgIndex === index) {
//                 items.innerHTML = `<img src=${images[index]}>`;
//             }
//         });
//     });
// });


// nextBtn.onclick = () => {
//     if (index < images.length - 1) {
//         index++;
//     }
//     else {
//         index = 0;
//     }
//     inputs.forEach((input, inputIndex) => {
//         if (inputIndex !== index) {
//             input.checked = false;
//         } else {
//             input.checked = true;
//         }
//     });
//     items.innerHTML = `<img src=${images[index]}>`
// }

// prevBtn.onclick = () => {
//     if (index > 0) {
//         index--;
//     } else {
//         index = images.length - 1;
//     }
//     inputs.forEach((input, inputIndex) => {
//         if (inputIndex !== index) {
//             input.checked = false;
//         } else {
//             input.checked = true;
//         }
//     });
//     items.innerHTML = `<img src=${images[index]}>`
// }

// Дублирование кода для переключения изображений и обновления радио-кнопок. Можно так написать:
function updateSlider() {
    items.innerHTML = `<img src=${images[index]}>`;
    inputs.forEach((input, inputIndex) => {
        input.checked = inputIndex === index;
    });
}

nextBtn.onclick = () => {
    index = (index + 1) % images.length;
    updateSlider();
};

prevBtn.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
};

inputs.forEach((input, inputIndex) => {
    input.addEventListener("change", () => {
        index = inputIndex;
        updateSlider();
    });
});