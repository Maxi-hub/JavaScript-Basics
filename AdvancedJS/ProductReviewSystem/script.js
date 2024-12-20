const productNameEL = document.querySelector('.input-productname');
const reviewEl = document.querySelector('.input-review');
const buttonAdd = document.querySelector('.add-button');
const buttonRemove = document.querySelector('.remove-button');
const info = document.querySelector('.info');
const reviewsBox = document.querySelector('.reviews-box');


let product = localStorage.getItem(productNameEL.value) || [];

function listProduct() {
    reviewsBox.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const productKey = localStorage.key(i);
        const productList = document.createElement('ul');
        productList.className = productKey;
        productList.textContent = productKey;
        reviewsBox.appendChild(productList);

    }
    const ulElements = document.querySelectorAll('ul'); 
    ulElements.forEach(element => {
        element.addEventListener('click', () => { 
            const elementReviews = localStorage.getItem(element.className).split(',');
            elementReviews.forEach(review => {
                const listItem = document.createElement('li');
                listItem.textContent = review;
                element.appendChild(listItem);
                const removeReview = document.createElement('button');
                removeReview.textContent = "Удалить отзыв";
                element.appendChild(removeReview);

                removeReview.addEventListener('click', () => {
                    const updatedReviews = elementReviews.filter(reviewElem => reviewElem !== review);
                    localStorage.setItem(element.className, updatedReviews.join(','));
                    listProduct();
                });
            });
        }, { once: true })


    });
}

listProduct();

const updateProductReviews = () => {
    info.textContent = '';
    if (reviewEl.value.trim() === '') {
        return info.textContent = 'Введите отзыв';
    }
    if (localStorage.getItem(productNameEL.value.trim()) !== null) {
        product = [localStorage.getItem(productNameEL.value)];
        product.push(reviewEl.value);
        reviewEl.value = '';
        info.textContent = 'Отзыв на продукт добавлен';
    }
    localStorage.setItem(productNameEL.value, product);
    listProduct();
}


buttonAdd.addEventListener('click', () => {
    if (productNameEL.value.trim() === '') {
        return reviewsBox.textContent = 'Введите название продукта';
    } else if (reviewEl.value.trim() === '') {
        return reviewsBox.textContent = 'Введите отзыв';
    } else if (productNameEL.value.trim() !== '' && localStorage.getItem(productNameEL.value.trim()) === null) {
        reviewsBox.textContent = '';
        localStorage.setItem(productNameEL.value, reviewEl.value);

        product.push(reviewEl.value.trim());
        info.textContent = 'Отзыв на продукт добавлен';
        reviewEl.value = '';
        listProduct();
        return (product, reviewsBox);
    }
    updateProductReviews();
});

updateProductReviews();


buttonRemove.addEventListener('click', function (e) {
    if (localStorage.getItem(productNameEL.value)) {
        localStorage.removeItem(productNameEL.value);
        info.textContent = `Продукт ${productNameEL.value} удален!`;
        productNameEL.value = '';
        listProduct();
    } else {
        info.textContent = 'Продукт не найден!';
    }
});
