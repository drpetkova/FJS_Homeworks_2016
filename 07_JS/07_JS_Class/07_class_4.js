"use strict";
/* Ex.4
 * You are given a text. Write a function that changes the text in all regions:
 * <upcase>text</upcase> to uppercase.
 * <lowcase>text</lowcase> to lowercase
 * <mixcase>text</mixcase> to mix casing(random)
 * We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. 
 * We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
 * The expected result:
 * We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
 * Regions can be nested
 */

var str = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else. ';

function caseModifier(str) {
	str = str.replace(/<upcase>(.*?)<\/upcase>/gi, function(match, p1) {
		return p1.toUpperCase(); 
	});
	str = str.replace(/<lowcase>(.*?)<\/lowcase>/gi, function(match, p1) {
		return p1.toLowerCase(); 
	});
	str = str.replace(/<mixcase>(.*?)<\/mixcase>/gi, function(match, p1) {
		var newString = '';
		for(var i = 0; i < p1.length; i++) {
			if (Math.random() <= 0.5) {
				newString += p1.charAt(i).toLowerCase();
			} else {
				newString += p1.charAt(i).toUpperCase();
			}
		}
		return newString;
	});	
	console.log(str);
}
