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

