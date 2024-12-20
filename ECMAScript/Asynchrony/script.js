// Получение данных о пользователе
async function getUserData(ID) {
    const response = await fetch(`https://reqres.in/api/users?page=2/${ID}`);
    if (response.ok && response.status === 201) {
        const dataObj = await response.json();
        const obj = dataObj.data.find(element => element.id === ID);
        if (obj) {
            return obj;
        } else {
            throw new Error('Пользователь с указанным ID не найден');
        }
    } else {
        throw new Error(`Ошибка ${response.status} ${response.statusText}`);
    }
}

getUserData(8)
    .then(object => console.log(object))


// Отправка данных на сервер

const user = {
    "name": "John Doe",
    "job": "unknown"
};

async function saveUserData(user) {
    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw new Error('Сервер ответил ошибкой');
    }
    const result = await response.json();
    return result;
}

saveUserData(user)
    .then(data => console.log(data))
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });


// Изменение стиля элемента через заданное время

function changeStyleDelayed(id, ms) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = 'dont touch';
    button.style.backgroundColor = 'red';
    button.style.margin = '30px';
    button.style.padding = '10px';
    document.body.appendChild(button);

    setTimeout(() => {
        button.style.backgroundColor = 'lightgreen';
        button.textContent = 'may click';
    }, ms);
}

changeStyleDelayed('button', 2000);