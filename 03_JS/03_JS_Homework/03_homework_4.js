"use strict";
/* Ex.4
 * Да се изведат съобщения към потребителя и да се прочетат две различни числа от клавиатурата A и B, 
 * разпечатайте в нарастващ ред.
 */
var num1 = parseFloat(prompt('Enter a number:').replace(',', '.'));
var num2 = parseFloat(prompt('Enter a number:').replace(',', '.'));
if (num1 > num2) {
	console.log(num2 + ',' + num1);
} else {
	console.log(num1 + ',' + num2);
}