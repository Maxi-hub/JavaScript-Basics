// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubingNumber = (number1, number2) => (number1 ** 3) + (number2 ** 3);
console.log(cubingNumber(2, 3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

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


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
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


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sumNumbers = (number1, number2) => { return number1 + number2 }
const differenceNumbers = (number1, number2) => { return(number1 > number2) ? number1 - number2 : number2 - number1}
const multiplicationNumbers = (number1, number2) => { return number1 * number2 }
const dividingNumbers = (number1, number2) => { return(number1 > number2) ? number1 / number2 : number2 / number1 }

console.log(sumNumbers(2, 6));
console.log(differenceNumbers(6, 6));
console.log(multiplicationNumbers(3, 6));
console.log(dividingNumbers(4, 6)); 