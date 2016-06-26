"use strict";
/* Ex.7
 * Write a script that finds the greatest of given 5 variables.
 */
var a = parseFloat(prompt('a = ').replace(',', '.'));
var b = parseFloat(prompt('b = ').replace(',', '.'));
var c = parseFloat(prompt('c = ').replace(',', '.'));
var d = parseFloat(prompt('d = ').replace(',', '.'));
var e = parseFloat(prompt('e = ').replace(',', '.'));
console.log('The greatest number of ' + a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ' : ' + Math.max(a, b, c, d, e));
