"use strict";	
/* Ex.3
 * Write a function that finds all the occurrences of word in a text
 * The search can case sensitive or case insensitive
 * Use function overloading
 */
console.log('Occurances (2 args - case sensitive): ' + matchWord('America', 'America for americans'));
console.log('Occurances (3 args - case sensitive): ' + matchWord('America', 'America for americans', true));
console.log('Occurances (3 args - case insensitive): ' + matchWord('America', 'America for americans', false));	
 
function matchWord(word, sentence, matchCase) {
	var occurrences = 0;
	var words = sentence.split(' ');
	var modifier = "g";
	if (matchCase === false) {
		modifier += "i";
	}
	var pattern = new RegExp(word, modifier);
	for (var i = 0; i < words.length; i++) {
		if (pattern.test(words[i])) {
			occurrences++;
		}
	}
	return occurrences;
}