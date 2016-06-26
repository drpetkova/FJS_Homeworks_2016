"use strict";
/* Ex.2
 * Да се изведат съобщения към потребителя и да се прочетат две целочислени числа от клавиатурата A и B. 
 * Запишете тяхната сума, разлика, произведение и остатък от деление в отделни променливи и разпечатайте тези резултати в конзолата.
 * Опитайте същото с числа с плаваща запетая.
*/
//For integer numbers
var num1Int = parseInt(prompt('Enter first integer number'), 10);
var num2Int = parseInt(prompt('Enter second integer number'), 10);
var sumInt = num1Int + num2Int;
var subsInt = num1Int - num2Int;
var prodInt = num1Int * num2Int;
var modInt = num1Int%num2Int;
console.log(num1Int +  ' + ' + num2Int + ' = ' + sumInt);
console.log(num1Int + ' - ' + num2Int + ' = ' + subsInt);
console.log(num1Int + ' * ' + num2Int + ' = ' + prodInt);
console.log(num1Int + ' % ' + num2Int + ' = ' + modInt);


// For float numbers
var num1Float = parseFloat(prompt('Enter first float number'), 10);
var num2Float = parseFloat(prompt('Enter second float number'), 10);
var sumFloat = num1Float + num2Float;
var subsFloat = num1Float - num2Float;
var prodFloat = num1Float* num2Float;
var modFloat = num1Float%num2Float;
console.log(num1Float +  ' + ' + num2Float + ' = ' + sumFloat.toFixed(2));
console.log(num1Float + ' - ' + num2Float + ' = ' + subsFloat.toFixed(2));
console.log(num1Float + ' * ' + num2Float + ' = ' + prodFloat.toFixed(2));
console.log(num1Float + ' % ' + num2Float + ' = ' + modFloat.toFixed(2));