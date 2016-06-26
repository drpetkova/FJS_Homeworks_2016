"use strict";
/* Ex.6
 * Въведете три числа от клавиатурата а1, а2 и а3. Разменете стойностите им така, че а1 да има стойността на
 * а2, а2 да има стойността на а3, а а3 да има старата стойност на а1.  
 */
var num1 = parseFloat(prompt('Enter a number:').replace(',', '.'));
var num2 = parseFloat(prompt('Enter a number:').replace(',', '.'));
var num3 = parseFloat(prompt('Enter a number:').replace(',', '.'));
var holder = num3;
num3 = num1;
num1 = num2;
num2 = holder;
console.log('first: ' + num1 + ', second:' + num2 + ', third: ' + num3);
