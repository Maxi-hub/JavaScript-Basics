const url = 'data.json';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const jsData = await response.json();
        // console.log(jsData);
        return jsData;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
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
        

        closesBoxEl.addEventListener("click", (ev) => {
            localStorage.setItem(`${el.id}`, JSON.stringify(el));

            if (ev.target.closest(".add-box")) {
                const item = ev.target.closest(".closes__items");
                if (item) {
                    const headingBucketBox = document.querySelector('.heading__bucket-box');
                    headingBucketBox.insertAdjacentHTML('afterbegin', `
                    <div class="heading__bucket-items">
                        <a href="single_page.html">
                        <img class="heading__bucket-item" src="${el.img}" alt="">
                        </a>
                        <div class="heading__bucket-text">
                        <h5 class="heading__bucket-title">${el.title}</h5>
                        <img class="heading__bucket-stars" src="img/stars.png" alt="">
                        <p class="heading__bucket-price">1 x $${el.price}</p>
                        </div>
                        <img class="heading__bucket-close" src="img/button_close.png" alt="">
                    </div>
                    `)
                }
            }

        }

        )
    })

});
