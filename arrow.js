
// Arrow function, multiple parameter, function body

// function expression
// function doubleIt(num){
//     return num * 2;
// }

// function declaretion
// const doubleIt = function myFunction(num){
//     return num * 2;
// }

// ES-6 without parameter single line
const give5 = () => 5;

// ES-6 single parameter single line
const doubleIt = num => num * 2;

// ES-6 more than one parameter single line
const add = (x , y) => x + y;

// ES-6 multiline arrow function(have to return)
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result1 = doubleIt(4);
const result2 = add(5, 4);
const result3 = give5();
const result4 = doSomething(4, 2)
console.log(result4);