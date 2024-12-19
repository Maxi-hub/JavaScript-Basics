const url = 'data.json';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const jsData = await response.json();
        return jsData;
    } catch (error) {
        console.log(error.message);
    }
}


document.addEventListener("DOMContentLoaded", async () => {
    // localStorage.clear();
    const data = await fetchData(url);
    const closesBoxEl = document.querySelector('.closes__box');

    data.forEach(el => {
        closesBoxEl.insertAdjacentHTML("beforeend", `
        <div class="closes__items">
            <a class="closes__link" href="product.html">
                <img class="closes__items-img" src="${el.img}" alt="">
                <div class="closes__items-text">
                    <p class="closes__items-title">${el.title}</p>
                    <p class="closes__price">$${el.price}</p>
                </div>
            </a>
            <div class="add-box">
                    <a href="#bucket" class="add">
                        <img class="add-img" src="img/bucket_white.png" alt="">
                        <p class="add-txt">Add to Cart</p>
                    </a>
                </div>
        </div>
        `)
    })

    document.querySelectorAll('.add-box').forEach((addBox, index) => {
        addBox.addEventListener('click', () => {
            const selectedProduct = data[index];
            const headingBucketBox = document.querySelector('.heading__bucket-box');
            let count = 1;

            if (localStorage.getItem(index + 1)) {
                const existingProduct = JSON.parse(localStorage.getItem(index + 1));
                count = existingProduct.count + 1;
                existingProduct.count = count;
                localStorage.setItem(index + 1, JSON.stringify(existingProduct));

                const existingItem = document.querySelector(`.heading__bucket-items[data-id="${selectedProduct.id}"]`);
                if (existingItem) {
                    existingItem.querySelector('.heading__bucket-price').textContent = `${count} x $${selectedProduct.price}`;
                }
            } else {
                selectedProduct.count = count;
                localStorage.setItem(index + 1, JSON.stringify(selectedProduct));
                headingBucketBox.insertAdjacentHTML('afterbegin', `
                    <div class="heading__bucket-items" data-id="${selectedProduct.id}">
                        <a href="single_page.html">
                            <img class="heading__bucket-item" src="${selectedProduct.img}" alt=""></img>
                        </a>
                        <div class="heading__bucket-text">
                            <h5 class="heading__bucket-title">${selectedProduct.title}</h5>
                            <img class="heading__bucket-stars" src="img/stars.png" alt=""></img>
                            <p class="heading__bucket-price">${count} x $${selectedProduct.price}</p>
                        </div>
                        <img class="heading__bucket-close" src="img/button_close.png" alt=""></img>
                    </div>
                    `
                );
            }
        })
    })
});




