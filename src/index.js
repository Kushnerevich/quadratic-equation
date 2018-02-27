module.exports = function solveEquation(equation) {
    myArray = equation.split(" ");
    D = Math.pow(myArray[4],2)- 4 * myArray[0] * (myArray[7]+myArray[8]);
    if (D < 0)
    {

    }else if (D === 0){

    }else {
        x1 = ((-(myArray[3]+myArray[4])) + Math.sqrt(D))/(2 * myArray[0]);
        x2 = ((-(myArray[3]+myArray[4])) - Math.sqrt(D))/(2 * myArray[0]);
    }
    arrayOfX = [Math.round(x1),Math.round(x2)].sort(compareNumbers);
    return arrayOfX;
}

function compareNumbers(a, b) {
    return a - b;
}
