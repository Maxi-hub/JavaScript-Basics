const blockForUsers = document.createElement('div');
document.body.appendChild(blockForUsers);
blockForUsers.className = 'outerBlock';

usersData.users.forEach(element => {
    blockForUsers.insertAdjacentHTML('beforeend', `
        <div class='block'>
            <h2><a href="#">${element.firstName} ${element.lastName}</a></h2>
            <p>${element.email}</p>
            <img src="${element.image}">User photo</img>
        </div>
        `)
})

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => {
        json.recipes.forEach(element => {
            console.log(element.name);
        });
    })
    .catch((error) => {
        console.log(error);
    })


const URL1 = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=5';

fetch(URL1)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const imgEl = document.createElement('img');
            document.body.appendChild(imgEl);
            imgEl.src = element.image;
            imgEl.style.width = '15vw';
        });
    })
    .catch(() => {
        console.log("Something is not working");
    })


