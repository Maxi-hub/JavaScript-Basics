document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    const headingBucketBox = document.querySelector('.heading__bucket-box');

    headingBucketBox.addEventListener("click", (ev) => {
        if (ev.target.closest('.heading__bucket-close')) {
            const item = ev.target.closest(".heading__bucket-items");
            if (item) {
                item.remove();
                localStorage.removeItem(item.dataset.id);
            }
        }
    });
});


function renderCart() {
    const headingBucketBox = document.querySelector('.heading__bucket-box');

    if (localStorage.length > 0) {
        Object.keys(localStorage).forEach((key) => {
            const product = JSON.parse(localStorage.getItem(key));
            if (product) {
                headingBucketBox.insertAdjacentHTML('afterbegin', `
                    <div class="heading__bucket-items" data-id="${product.id}">
                        <a href="single_page.html">
                            <img class="heading__bucket-item" src="${product.img}" alt=""></img>
                        </a>
                            <div class="heading__bucket-text">
                                <h5 class="heading__bucket-title">${product.title}</h5>
                                <img class="heading__bucket-stars" src="img/stars.png" alt=""></img>
                                <p class="heading__bucket-price">${product.count} x $${product.price}</p>
                            </div>
                            <img class="heading__bucket-close" src="img/button_close.png" alt=""></img>
                        </div>
                    `);
            }
        });
    }
}
