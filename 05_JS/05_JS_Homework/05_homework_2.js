"use strict";
/* Ex.1
 * Дадени са текст и списък от думи, разделени със запетайка. Списъкът описва думи,
 * които са нецензурни и не трябва да се съдържат в текста. Напишете програма,
 * която замества всички нецензурни думи от текста със звездички. Например ако имаме текста
 * "Какъв хикс дириш тука бе менте?" и списък с нецензурни думички "менте, хикс",
 * програмата трябва да го преработи така: "Какъв **** дириш тука бе *****?". 
 */

var arrBadWords = ["hell", "shit", "bitch", "wtf"];
var stringTest = "Shit! WTF? What the hell are you doing here you son of a bitch?";
for (var i = 0; i < arrBadWords.length; i++) {
	stringTest = stringTest.replace(new RegExp(arrBadWords[i], 'gi'), new Array(arrBadWords[i].length + 1).join('*'));		
}
console.log(stringTest);
