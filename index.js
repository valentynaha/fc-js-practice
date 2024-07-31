// const userName = 'John';

const PI = 3.14;

let userName; //undefined

let box;
box = 1;
let result = 0;
result = box + 1; //2

box = box + 4; //5
box = box * 2; //10

let a;
a = 2;
a = a * 5; //a *= 5;
a = a / 2; //a /= 2;
a = a + 1; //6

let value = 0;

//value = value + 1;
value++; //Інкремент - збільшення на 1

//value = value - 1;
value--; //Декремент - зменшення на 1


//Постфікс (спочатку імʼя змінної, потім оператор )
value++;
value--;
//Спочатку використовується значення змінної, ф потім виконується операція збільшення/зменшення
result = value++;


//Префіксна форма (спочатку оператор, потім імʼя змінної)
++value;
--value;

result = --value; 
//Спочатку віднімаємо 1, потім таке саме значення кладем в result