// Reading a specified JSON file and returning the JSON object.
var fs = require('fs');
var exports = module.exports = {};
exports.readFile = function () {
	try {
		var obj = require('./student.json');
		if(obj) {
			return obj;
		} else {
			console.log('Empty JSON File');
			process.exit(0);	
		}
	} catch (ex) {
		console.log('readJsonFile.js >> readFile() >>' );
		console.log(ex);
		process.exit(0);
	}
};