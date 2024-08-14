// let a;
// a = 3;
// let b;
// b = 4;
// console.log(a * b);

// let c;
// c = 1000;
// let d;
// d = 10;
// console.log(c / d);

// let num = 1;
// console.log(num);

// // num += num;
// ++num;
// console.log(num);
// --num;
// console.log(num);

// // num -= num;
// // console.log(num);

// num +=22;
// console.log(num);
// num *=33;
// console.log(num);
// num/=44;
// console.log(num);
// num -=55;
// console.log(num);

//Функції:

function sayHello() {
  /// Function declaration
  let userName1 = "NoName";
  console.log("Привіт, " + userName1);
  return 5;
}

let resultOfFunction = sayHello();
console.log("Ressult of function work is " + resultOfFunction);

function getSumOfTwoNumbers(num1, num2 = 1) {
  /// Function declaration
  let resultSum = num1 + num2;
  return resultSum;
}

let resultOfFunctionSum = getSumOfTwoNumbers(2, 5);
console.log("Ressult of function work is " + resultOfFunctionSum);

// function goodWeather() {
//     alert('Сьогодні чудова погода');
// }

// goodWeather();


// function getMultiplyOfTwoNumbers(num1, num2) {
//     let result = num1*num2;
//     return result;
// }

// console.log(getMultiplyOfTwoNumbers(4,6));


function getMultiplyOfTwoNumbers(num1, num2) {
    let num3 = Number(prompt('First number:'));
    let num4 = Number(prompt('Second number:'));

    return num3*num4;
}

console.log(getMultiplyOfTwoNumbers());
