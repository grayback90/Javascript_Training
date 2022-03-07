/*
---ToDo---
Return the number (count) of vowels in the given string.
---Note---
The input string will only consist of lower case letters and/or spaces.
"y" ist not a vowel here.
*/

function getCount(str) {
    var vowelsCount = 0;
    let arrStr = str.split('');
    
    for(let i = 0; i < arrStr.length; ++i) {
      if(arrStr[i] == "a" 
         || arrStr[i] == "e" 
         || arrStr[i] == "i" 
         || arrStr[i] == "o" 
         || arrStr[i] == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
}
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;

    describe("Case 1", function(){
        it ("should be defined", function(){
            assert.strictEqual(getCount("abracadabra"), 5)
        });
    });
*/
  
// Other Solutions
/*
    function getCount(str) {
        return (str.match(/[aeiou]/ig)||[]).length;
    }
*/

// Other Solutions v2
/*
    function getCount(str) {
        var vowelsCount = 0;
        var vowels = ["a","e","i","o","u"];
        for(var i = 0;i < str.length;i++){
            for(var j=0;j<vowels.length;j++){
                if(str[i] === vowels[j]){
                    vowelsCount++;
                }
            }
        }
    return vowelsCount;
    }
*/