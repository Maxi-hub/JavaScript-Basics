const shoppingCart = document.querySelector('.cart');
const headingBucketBox = document.querySelector('.heading__bucket-box');

document.addEventListener("DOMContentLoaded", async () => {

    if (localStorage.length > 0) {
        for (const key in localStorage) {
            const obj = JSON.parse(localStorage.getItem(key));
            shoppingCart.insertAdjacentHTML('beforeend', `
            <div class="product">
                <div class="product__left">
                    <a href="product.html"><img src="${obj.img}" alt=""></a>
                    <div class="product__details">
                        <h4 class="product__title">${obj.title}</h4>
                        <p class="product__text">Color: <span>Red</span></p>
                        <p class="product__text">Size: <span>Xll</span></p>
                    </div>
                </div>
                <div class="product__info">
                    <p class="product__text">$${obj.price}</p>
                    <input class="product__quantity" type="number" name="quantity" id="quantity" min="1" placeholder="1">
                    <p class="product__text">FREE</p>
                    <p class="product__text">$300</p>
                    <img class="product__info-img" src="img/button_close.png" alt="">
                </div>
            </div>`);
        }
    }
});


shoppingCart.addEventListener("click", ev => {
    if (ev.target.closest(".product__info-img")) {
        const item = ev.target.closest(".product");
        if (item) {
            item.remove();
        }
    }
});
