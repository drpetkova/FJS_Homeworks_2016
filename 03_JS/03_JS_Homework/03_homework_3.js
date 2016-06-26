"use strict";
/* Ex.3
 * Да се изведат съобщения към потребителя и да се прочетат две числа от клавиатурата A и B 
 * след което разменете стойността им. Разпечатайте новите стойности в конзолата.
*/
var num1 = parseFloat(prompt('Enter a number:').replace(',', '.'));
var num2 = parseFloat(prompt('Enter a number:').replace(',', '.'));
if (isNaN(num1)) {
   console.log('First enter is not a number!');
} else if (isNaN(num2)){
	console.log('Second enter is not a number!');
} else {
	var holder = num1;
	num1 = num2;
	num2 = holder;
	console.log('First number is ' + num1 + ' and second number is ' + num2);
}