// Writing the given sorted result into a target file in a plain text format
var fs = require('fs'); // Include fs module
var sort = require('./sortJsonObj').sort; // Include sortJsonObj.js file

/* 
Function Name : createFile(obj) 
createFile(obj) function  will create a destination.txt file and write the content of the sorted JSON object in the same file
PARAM : obj - Sorted JOSN object
*/
sort.sortObject(function createFile(obj){	
	fs.open('destination.txt','w', function(err) {
		if (err) {
	   		return console.error(err);
		} else {
			fs.appendFile('destination.txt','First Name | Last Name | Score'+"\r\n",function(err,fd){
				if (err) {
		       		return console.error(err);
		       	} else {
			       	for(i=0;i<obj.students.length;i++){
			   			if (obj.students[i].id != undefined && obj.students[i].fName != undefined && obj.students[i].lName != undefined && obj.students[i].score != undefined ) {
			       			value = obj.students[i].id+" | "+obj.students[i].fName+" | "+obj.students[i].lName+" | "+obj.students[i].score;
			       		 	fs.appendFile('destination.txt',value+"\r\n");
			   			}
			      	}
			      	console.log("Output file is destination.txt.....!!!!");
		       	}  	
		    });
		}
	});
});
