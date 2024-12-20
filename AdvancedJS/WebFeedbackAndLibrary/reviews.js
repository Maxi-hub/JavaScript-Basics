let initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const productName = document.querySelector('.product-name');
const review = document.querySelector('.review');
const button = document.querySelector('.button');
const box = document.querySelector('.box-review');
let id = 4;

function showReviews() {
    box.innerHTML = '';
    initialData.forEach(element => {
        const productEL = document.createElement('div');
        productEL.insertAdjacentHTML('afterbegin', `
            <p><b>${element.product}</b></p>`);
        element.reviews.forEach(review => {
            productEL.insertAdjacentHTML('beforeend', `${review.text} <br>`)
        });
        box.appendChild(productEL);
    });

}

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (review.value.length < 50) {
        alert('Отзыв слишком короткий');
        throw new Error('Отзыв слишком короткий, минимум 50 символов');
    } else if (review.value.length > 500) {
        alert('Отзыв слишком длинный');
        throw new Error('Отзыв слишком длинный, максимум 500 символов');
    }

    const existingProduct = initialData.find(element => element.product === productName.value);
    if (existingProduct) {
        existingProduct.reviews.push({
            id: ++id,
            text: review.value
        })
    } else {
        initialData.push({
            product: productName.value,
            reviews: [{
                id: ++id,
                text: review.value
            }]
        })
    }

    showReviews(); 
    review.value = ''; 
    productName.value = ''; 
});

showReviews();

