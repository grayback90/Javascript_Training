/*
---ToDo---
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
}
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {
            assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
            assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
            assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
        })
    })
*/
  
// Other Solutions
/*
    function findShort(s){
        return Math.min.apply(null, s.split(' ').map(w => w.length));
    }
*/
  