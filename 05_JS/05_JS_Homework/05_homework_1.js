"use strict";
/* Ex.1
 * Напишете програма, която обръща думите в дадено изречение в обратен ред. 
 * Например изречението "Брала мома къпини." трябва да се преобразува в "Къпини мома брала." 
 */
function capitalizeFirst(s) {
	return s[0].toUpperCase() + s.slice(1);
};

var stringText = 'Брала мома къпини от попови градини';
var arrayText = stringText.toLowerCase().split(" ");
var newArray = arrayText.reverse().join(" ");
console.log(capitalizeFirst(newArray));
