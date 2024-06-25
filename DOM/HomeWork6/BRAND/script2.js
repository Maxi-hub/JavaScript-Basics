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


            headingBucketBox.insertAdjacentHTML('afterbegin', `
                <div class="heading__bucket-items" data-id="${obj.id}">
                    <a href="single_page.html">
                        <img class="heading__bucket-item" src="${obj.img}" alt=""></img>
                    </a>
                    <div class="heading__bucket-text">
                        <h5 class="heading__bucket-title">${obj.title}</h5>
                        <img class="heading__bucket-stars" src="img/stars.png" alt=""></img>
                        <p class="heading__bucket-price">${obj.count} x $${obj.price}</p>
                    </div>
                    <img class="heading__bucket-close" src="img/button_close.png" alt=""></img>
                </div>
                `
            );
        }
    }
});


headingBucketBox.addEventListener("click", ev => {
    if (ev.target.closest('.heading__bucket-close')) {
        const item = ev.target.closest(".heading__bucket-items");
        if (item) {
            item.remove();
        }
    }
})


shoppingCart.addEventListener("click", ev => {
    if (ev.target.closest(".product__info-img")) {
        const item = ev.target.closest(".product");
        if (item) {
            item.remove();
        }
    }
});

// document.addEventListener("DOMContentLoaded", async () => {
//     const headingBucketBox = document.querySelector('.heading__bucket-box');
//     headingBucketBox.addEventListener("click", ev => {
//         const item = ev.target.closest(".heading__bucket-items");
//         if (item) {
//             const shoppingCart = document.querySelector('.cart');
//             shoppingCart.insertAdjacentHTML('beforeend', `
//                 <div class="product">
//                     <div class="product__left">
//                         <a href="product.html"><img src="${item.img}" alt=""></a>
//                         <div class="product__details">
//                             <h4 class="product__title">${item.title}</h4>
//                             <p class="product__text">Color: <span>Red</span></p>
//                             <p class="product__text">Size: <span>Xll</span></p>
//                         </div>
//                     </div>
//                     <div class="product__info">
//                         <p class="product__text">$${item.price}</p>
//                         <input class="product__quantity" type="number" name="quantity" id="quantity" min="1" placeholder="1">
//                         <p class="product__text">FREE</p>
//                         <p class="product__text">$300</p>
//                         <img class="product__info-img" src="img/button_close.png" alt="">
//                     </div>
//                 </div>`);
//         }
//     })
// });