// ToDo
// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  let inputString = string.toLowerCase();
  let arr = inputString.split('');
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let counter = 0;
  
  for(let i = 0; i < arr.length; ++i) {
    for(let j = 0; j < letters.length; ++j){
      if(arr[i] === letters[j]) {
        letters.splice(j, 1);
        counter = counter + 1;
      }
    }
  }
  
  if(counter == 26) {
    return true;
  }else{
    return false;
  }
}

// Test
/*
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;

  describe("Tests", () => {
    it("test1", () => {
      var string = "The quick brown fox jumps over the lazy dog."
      assert.strictEqual(isPangram(string), true)
    })
    it("test2", () => {
      var string = "Pack my box with five dozen liquor jugs."
      assert.strictEqual(isPangram(string), true)
    });
  });
*/

// Other Solutions
/*
  function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }
*/


// Other Solutions v2
/*
  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }
*/
