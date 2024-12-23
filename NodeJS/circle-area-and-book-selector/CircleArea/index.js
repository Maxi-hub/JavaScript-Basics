function getCircleArea(radius){
    const area = Math.PI * radius**2;
    console.log(`The area of the circle: ${area.toFixed(2)}`);
}

getCircleArea(15);

export default getCircleArea;