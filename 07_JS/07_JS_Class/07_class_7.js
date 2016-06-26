"use strict";
/* Ex.7
 * Write a script that parses an URL address given in the format:
 * [protocol]://[server]/[resource]
 * and extracts from it the [protocol], [server] and [resource] elements. 
 * Return the elements in a JSON object. For example from the URL http://www.devbg.org/forum/index.php 
 * the following information should be extracted:
	{protocol: 'http',
	 server: 'www.devbg.org', 
	 resource: '/forum/index.php'}
 */
var str = 'http://www.devbg.org/forum/index.php';

function urlParser(str) {
	var parser = document.createElement('a');
	parser.href = str;
	var protocol = parser.protocol.replace(':', '');
	var hostname = parser.hostname;
	var pathname = parser.pathname;
	return JSON.stringify({protocol: protocol, server: hostname, resource: pathname}); 
}
