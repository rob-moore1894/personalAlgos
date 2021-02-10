var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
    fs.readFile(filePath, 'utf-8', function(err, data) {
        if (err) {
            callback(err, null);
            return;
        }

        var wordCount = data.trim().split(' ').length;
        callback(null, wordCount);
    });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
    // YOUR CODE HERE
    var countArr = []; 
    const interception = function(err, data){
        if(err){
            console.log(err);
            callback(err, null); 
        }
        if(data){
        countArr.push(data); 
        console.log("in interception", countArr); 
            if(countArr.length == 2){
                callback(null, countArr[0] + countArr[1]);
            }  
        }
    }

    getWordCount(filePathOne, interception);
    getWordCount(filePathTwo, interception);    
};

getTotalWordCount("galvanize/files/fileOne.txt", "galvanize/files/fileTwo.txt", function(err, count){
    if (err){
        console.log("Error found", err); 
    }
    console.log(count);
}); 

getTotalWordCount("cci/someStuff.txt", "cci/someMoreStuff.txt", function(err, count){
    if (err){
        console.log("Error found", err); 
    }
    console.log(count); 
}); 

module.exports = getTotalWordCount;