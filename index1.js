// let a = 3;
// let b = 4;
// console.log(a * b);

// let c = 1000;
// let d = 10;
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

// num += 22;
// console.log(num);
// num *= 33;
// console.log(num);
// num /= 44;
// console.log(num);
// num -= 55;
// console.log(num);

//Функції:

function sayHello() {
  // Function declaration
  let userName1 = "NoName";
  console.log("Привіт, " + userName1);
  return 5;
}

let resultOfFunction = sayHello();
console.log("Ressult of function work is " + resultOfFunction);

function getSumOfTwoNumbers(num1, num2 = 1) {
  // Function declaration
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
//     // let result = num1*num2;
//     // return result;
//     return num1*num2;
// }

// console.log(getMultiplyOfTwoNumbers(4,6));

// function getMultiplyOfTwoNumbers() {
//     let num3 = Number(prompt('First number:'));
//     let num4 = Number(prompt('Second number:'));

//     return num3*num4;
// }

// console.log(getMultiplyOfTwoNumbers());

// Function expression (Функціональний вираз)

let getDivide1 = function (num1, num2) {
  return num1 / num2;
};

console.log(getDivide1(4, 2));

//Arrow function (Стрілочна функція)
let getSquare = (x) => x ** 2;
console.log(getSquare(5));

// function getMax(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   }
//   return num2;
// }

// console.log(getMax(5, 7));
// console.log(getMax(15, 9));
// console.log(getMax(59, 70));
// console.log(getMax(43, 7));
// console.log(getMax(985, -39));

//var1
// let isEven = a => {
//   if (a % 2 === 0) {
//     return true;
//   }
//   return false;
// };

//var2
// function isEven(number) {
//   return number %2===0
// }

//var3
let isEven = (num) => num % 2 === 0;

console.log(isEven(5));
console.log(isEven(532242));
console.log(isEven(48489));
console.log(isEven(125637));
console.log(isEven(9));
console.log(isEven(0));
console.log(isEven(-6));

//зробити калькулятор

let getSum = (a, b) => a + b;
let getMultiply = (a, b) => a * b;
let getDivide = (a, b) => a / b;
let getDeduction = (a, b) => a - b;

function calculator() {
  let num1 = Number(prompt("First number:"));
  let operation = prompt("Operation: +, -, /, *");
  let num2 = Number(prompt("Second number:"));

  let result = null;

  // if (operation === "+") {
  //   result = getSum(num1, num2);
  // } else if (operation === "-") {
  //   result = getDeduction(num1, num2);
  // } else if (operation === "*") {
  //   result = getMultiply(num1, num2);
  // } else if (operation === "/") {
  //   result = getDivide(num1, num2);
  // } else {
  //   alert("error");
  //   return;
  // }

  switch (operation) {
    case "+": {
      result = getSum(num1, num2);
      break;
    }
    case "-": {
      result = getDeduction(num1, num2);
      break;
    }
    case "*": {
      result = getMultiply(num1, num2);
      break;
    }
    case "/": {
      result = getDivide(num1, num2);
      break;
    }

    default:
      {
        alert("error");
      }
  }

  alert("Result = " + result);
}

// calculator();

//площа кола

function getSquareOfCircle() {
  let radius = Number(prompt("Введіть радіус:"));

  return alert(Math.PI * radius ** 2);
}

// getSquareOfCircle();
