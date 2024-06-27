// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки кода.
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
const createCounter = (userNumber) => {
    function getNumber() {
        return userNumber;
    }
    let num = getNumber();
    
    function increment() {
        console.log(num += 1); 
    }
    function decrement() {
        console.log(num -= 1);
    }

    return { increment, decrement };
}

const calc = createCounter(7);
calc.increment();
calc.decrement();

createCounter(7).increment();
createCounter(7).decrement();

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


function findElementByClass(rootElement, userClassName) {
    if (rootElement.classList.contains(userClassName)) {
        return rootElement;
    }
    for (let i = 0; i < rootElement.children.length; i++) {
        const foundClass = findElementByClass(rootElement.children[i], userClassName);
        if (foundClass) {
            return foundClass;
        }
    }
};

const userRootElement = document.documentElement;
const findClassName = 'product';

console.log(findElementByClass(userRootElement, findClassName));

