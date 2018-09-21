function myVoid() {
    return;
}
function getSum(num1, num2) {
    return num1 + num2;
}
// 3
console.log(getSum(1, 2));
// 12
console.log(getSum('1', 2));
function mySum(num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
// 6
console.log(mySum('2', 4));
