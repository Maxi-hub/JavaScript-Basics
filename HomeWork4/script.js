// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    }
    else {
        console.log(`${i} - четное число`);
    }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4 || array[i] === 5) {
        delete array[i];
    }
}

console.log(array);

// или

const array2 = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== 4 && array2[i] !== 5) {
        newArray.push(array2[i]);
    }
}

console.log(newArray);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomNumbersInRange(min, max, count) {
    let array = [];
    let sum = 0;

    while (array.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        array.push(randomNumber);
        sum += randomNumber;
        // if (result.indexOf(3) !== -1) { // выводит информацию в консоль, только при наличии числа 3 в массиве
        //     console.log(`В массиве есть число 3`);     
        // } // или if (result.includes(3)) { console.log(`В массиве есть число 3`); }
    }

    console.log(array);
    console.log(`Сумма элементов массива равна ${sum}`);

    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(3) !== -1) {
            console.log(`В массиве есть число 3`);
        }
        else {
            console.log(`В массиве нет числа 3`);
        }
    }
}

(getRandomNumbersInRange(0, 9, 5));


// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
let star = 'x';
let christmasTree = '';
for (let i = 1; i <= 20; i++) {
    console.log(christmasTree += star);
}

