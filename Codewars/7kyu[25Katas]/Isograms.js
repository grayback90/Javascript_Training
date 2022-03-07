/*
---ToDo---
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. 
Ignore letter case.
*/

function isIsogram(str){
    let counter = 0;
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; ++i) {
      if(str.lastIndexOf(str[i]) != str.indexOf(str[i])) {
        counter += 1;
      }
    }
    
    if(counter == 0) {
      return true;
    }else{
      return false;
    }
}
  
// Test:
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Tests", () => {
        it("test", () => {
            assert.strictEqual( isIsogram("Dermatoglyphics"), true );
            assert.strictEqual( isIsogram("isogram"), true );
            assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
            assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
            assert.strictEqual( isIsogram("isIsogram"), false );
            assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
        });
    });
*/
  
  
// Other Solutions
/*
    function isIsogram(str){
        var i, j;
        str = str.toLowerCase();

        for(i = 0; i < str.length; ++i) {
            for(j = i + 1; j < str.length; ++j) {
                if(str[i] === str[j]) {
                    return false;
                }
            }
        }
        return true;
    }
*/
  