//  Writing the given sorted result into a target file in a XML format.
var fs = require('fs');
var xml2js = require('xml2js');
var sort = require('./sortJsonObj').sort; // Include sortJsonObj.js file

/* 
Function Name : createFile(obj) 
createFile(obj) function  will create a descendingXML.xml file and write the content of the sorted JSON object in the same file
PARAM : obj - Sorted JOSN object
*/
sort.sortObject(function createFile(obj){
	var builder = new xml2js.Builder({rootName:'Students'});
	profiles = builder.buildObject(obj);
	fs.writeFile('descendingXML.xml', profiles, function (err,data){
		if (err) {
			return console.error("ERROR : "+err);
		} else {
			console.log('Outfile file is descendingXML.xml......!!!')
		}
	});
});