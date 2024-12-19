import { accessKey as _accessKey } from './config.js';
const accessKey = _accessKey;

const photoContainer = document.querySelector('.container');
const imgEl = document.querySelector('#foto');
const labelEl = document.querySelector('.fotograpth-name');
const counter = document.querySelector('.counter');
const btnEl1 = document.querySelector('#button-1');
const btnEl2 = document.querySelector('#button-2');
let currentLike = 0;

const getLastPhotoButton = document.createElement('button');
getLastPhotoButton.textContent = 'Посмотреть фотографии предыдущих дней';
getLastPhotoButton.className = 'prevFotosButton';
photoContainer.append(getLastPhotoButton);

let objs = Object.entries(localStorage);

const previousPhotosArray = [];
for (let item of objs) {
    previousPhotosArray.push(item);
}
console.log(previousPhotosArray);

const fetchPhotos = async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);

        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        localStorage.setItem(data.id, [currentLike, data.urls.small, data.alt_description, data.user.name]);
        return data;
    } catch {
        throw error;
    }
};

async function run() {
    try {
        const data = await fetchPhotos();
        getPhoto(data);
        likePhoto(data);
        lookPreviousPhoto(previousPhotosArray);
    } catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.textContent = error.message;
        photoContainer.append(errorMessage);
    }
}
run();

function getPhoto(data) {
    imgEl.src = data.urls.small;
    imgEl.alt = data.alt_description;
    labelEl.textContent = `Фотограф: ${data.user.name}`;
    counter.textContent = `Фотография понравилась ${currentLike} раз`;
}

function likePhoto(data) {
    btnEl1.addEventListener('click', () => {
        const currentId = localStorage.getItem(data.id);
        if (currentId !== null) {
            const currentValue = currentId.split(',');
            const newCount = parseInt(currentValue[0]) + 1;
            localStorage.setItem(data.id, `${newCount},${currentValue[1]},${currentValue[2]},${currentValue[3]}`);
            counter.textContent = `Фотография понравилась ${newCount} раз`;
        } else {
            localStorage.setItem(data.id, `1,${data.urls.small},${data.alt_description},${data.user.name}`);
            counter.textContent = `Фотография понравилась 1 раз`;
        }
    })
}

function getPreviousPhoto(previousPhotosArray, index) {
    btnEl1.classList.add('hidden');
    btnEl2.classList.remove('hidden');
    const currentPhoto = previousPhotosArray[index][1];
    const currentCountLike = localStorage.getItem(previousPhotosArray[index][0])

    imgEl.src = currentPhoto.split(',').slice(1, 2);
    imgEl.alt = currentPhoto.split(',').slice(2, 3);
    labelEl.textContent = `Фотограф: ${currentPhoto.split(',').slice(3)}`;
    counter.textContent = `Фотография понравилась ${currentCountLike.split(',')[0]} раз`;
}

function lookPreviousPhoto(previousPhotosArray) {
    let index = 0;
    getLastPhotoButton.addEventListener('click', () => {
        getPreviousPhoto(previousPhotosArray, index);
        likePreviousPhoto(previousPhotosArray, index);
        index++;
        if (index >= previousPhotosArray.length) {
            index = 0;
        }
    });
}

function likePreviousPhoto(previousPhotosArray, index) {
    const currentPhotoData = previousPhotosArray[index];
    btnEl2.addEventListener('click', () => {
        const currentValue = currentPhotoData[1].split(',');
        const newCount = parseInt(currentValue[0]) + 1;
        localStorage.setItem(currentPhotoData[0], `${newCount},${currentValue[1]},${currentValue[2]},${currentValue[3]}`);
        counter.textContent = `Фотография понравилась ${newCount} раз`;
    });
}