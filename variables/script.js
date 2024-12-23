// 1. Cоздадим переменную, в которой будет храниться температура в градусах Цельсия, преобразуем значение в температуру по Фаренгейту, и выведем в консоль температуру в Цельсиях и Фаренгейтах.

let degreeСelsius = 29;
let degreeFahrenheit = (9 / 5) * degreeСelsius + 32;
console.log(degreeСelsius);
console.log(degreeFahrenheit);
// или
// console.log(`Температура по Цельсию: ${degreeСelsius}, Температура по Фаренгейту: ` + ((9 / 5) * degreeСelsius + 32));


// 2. Cоздадим переменную name и запишем в нее свое имя. Также создадим переменную admin и присвоим этой переменной значение из переменной name. Выведем значение переменной admin в консоль.

const myName = 'Bob';
let admin = myName;
console.log(admin);


// 3. Создадим несколько переменных для хранения информации о погоде: температура в градусах Цельсия и описание погоды (например, "солнечно", "облачно", "дождливо"). Затем, используя шаблонные строки, составим сообщение.

let degree = 25;
const sunnyWeather = 'sunny';
const wetWeather = 'wet';
const coldWeather = 'cold';
const cloudyWeahter = 'cloudy';
console.log(`It's ${degree}°C outside and ${sunnyWeather} today.`);


// 4. Создадим несколько переменных для хранения следующей информации: ваш возраст, ваше любимое число, ваше имя. Затем, используя шаблонные строки, создадим сообщение и выведем его в консоль, которое объединяет всю эту информацию в интересный факт о вас.

let age = 22;
let favoriteNumber = 3;
let userName = 'Helen';
console.log(`My name is ${userName}, I'm ${age} years old and my favorite number is ${favoriteNumber}.`);