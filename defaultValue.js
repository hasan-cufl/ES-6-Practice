// Function default parameter for not provided values

function add(num1, num2){
    // if(num2 == undefined)
    // num2 = 0;
    num2 = num2 || 10;
    return num1 + num2;
}
const total = add(14);
console.log(total)


function add(num1, num2 = 10){
    return num1 + num2;
}
const total = add(14);
console.log(total)