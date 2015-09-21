// Extracting a sorted result from a given JSON object.
var jsonObj = require('./readJsonFile.js'); // Include readJsonFile.js 

var sort = function () {};
// function to sort JSON object

/*
sortObject(callback) : It will sort the JSON object
PARAM : callback 
*/
sort.prototype.sortObject = function  (callback) {
	// call to readFile() of readJsonFile.js file
	var obj = jsonObj.readFile(); 
	try{
		var temp;
		for (i = 0; i < obj.students.length; i += 1){
			for (j = 0; j < (obj.students.length - i - 1); j += 1) {
		   		if (obj.students[j].score < obj.students[j + 1].score) {
		        	temp = obj.students[j];
		        	obj.students[j] = obj.students[j + 1];
		        	obj.students[j + 1] = temp;
	        	}
		  	}
		}
	} catch(ex){
		console.log ('sortJsonObj.js >> sortObject() >> ');
		console.log(ex);
		console.log ('Wrong Structure of JSON file');
		process.exit();
	}
	return callback(obj);
}
//Export list
exports.sort = new sort();