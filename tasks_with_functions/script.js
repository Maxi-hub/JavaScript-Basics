// Возведение переданного числа в куб и вывод в консоль результата: 2^3 степени + 3^3 степени.

const cubingNumber = (number1, number2) => (number1 ** 3) + (number2 ** 3);
console.log(cubingNumber(2, 3));


// Пользователь вводит с клавиатуры число, если ввёл текст - выводится сообщение, что значение задано неверно.
// Вычисляем 13% от представленного числа и выводим в консоль текст "Размер заработной платы за вычетом налогов" и результат вычислений.

let getNumber = +prompt("Введите размер вашей заработной платы");
const salaryAfterTax = (number) => {
    if (getNumber !== Number(getNumber)) {
        return (`значение задано неверно`);
    }
    else {
        return (`Размер заработной платы за вычетом налогов равен ${getNumber - getNumber * 0.13}`);
    }
}

console.log(salaryAfterTax(getNumber));


// Пользователь с клавиатуры вводит 3 числа. Определяем максимальное значение среди этих чисел.

const number1 = +prompt('Введите число 1');
const number2 = +prompt('Введите число 2');
const number3 = +prompt('Введите число 3');
const getMaxNumber = (number1, number2, number3) => {
    if (number1 > number2 && number1 > number3) {
        console.log(`${number1} максимальное число`);
    } else if (number2 > number1 && number2 > number3) {
        console.log(`${number2} максимальное число`);
    } else {
        console.log(`${number3} максимальное число`);
    }
}

getMaxNumber(number1, number2, number3);


// Четыре функции, каждая функция принимает по два числа и выполняет одну из операций (сложение, разность, умножение, деление).
// Функциям всегда передаются корректные числа, без проверок на NaN и Infinity.

const sumNumbers = (number1, number2) => { return number1 + number2 }
const differenceNumbers = (number1, number2) => { return(number1 > number2) ? number1 - number2 : number2 - number1}
const multiplicationNumbers = (number1, number2) => { return number1 * number2 }
const dividingNumbers = (number1, number2) => { return(number1 > number2) ? number1 / number2 : number2 / number1 }

console.log(sumNumbers(2, 6));
console.log(differenceNumbers(6, 6));
console.log(multiplicationNumbers(3, 6));
console.log(dividingNumbers(4, 6)); 