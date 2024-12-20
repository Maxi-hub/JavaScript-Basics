const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

//  ----------------------------------------------- 

const createCounter = () => {
    let num = 0;
    
    function increment() {
        return num += 1; 
    }
    function decrement() {
        return num -= 1;
    }
    return { increment, decrement };
}

const calc = createCounter();
const valc2 = createCounter();

console.log(calc.increment());
console.log(calc.increment());
console.log(calc.decrement());

console.log(valc2.increment());
console.log(valc2.increment());
console.log(valc2.increment());