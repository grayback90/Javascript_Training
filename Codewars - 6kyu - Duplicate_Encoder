// ToDo
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character 
// appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word){
  let chars=[...word.toLowerCase()];
  let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
  let duplicateSet = new Set(duplicateList);
  let uniqueDuplicateList = [...duplicateSet];
  let stringReturn = "";
  
  for(let i = 0; i < chars.length; ++i) {
    if(uniqueDuplicateList.includes(chars[i])) {
      stringReturn += ")";
    }else{
      stringReturn += "(";
    }
  }
  
  return stringReturn;
}


// Test
/*
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;

  describe("Duplicate Encoder", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(duplicateEncode("din"),"(((");
      assert.strictEqual(duplicateEncode("recede"),"()()()");
      assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
      assert.strictEqual(duplicateEncode("(( @"),"))((");
    });
  });
*/

// Other Solutions
/*
    function duplicateEncode(word){
      return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
          return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
    }
*/

// Other Solutions v2
/*
    function duplicateEncode(word){
        var unique='';
        word = word.toLowerCase();
        
        for(var i=0; i<word.length; i++){
            if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
                unique += '(';
            }
            else{
                unique += ')';
            }
        }

        return unique;
    }
*/
