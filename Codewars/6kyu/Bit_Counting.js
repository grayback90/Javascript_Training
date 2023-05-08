/*
---ToDo---
Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.
---Example---
The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  let b = (n).toString(2);
  let counter = 0;
  
  for(let i = 0; i < b.length; ++i){
    if(b[i] == 1){
      counter = counter + 1;
    }
  }
  
  return counter;
};

// Test
/*
  const { assert } = require("chai")

  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(countBits(0), 0);
      assert.strictEqual(countBits(4), 1);
      assert.strictEqual(countBits(7), 3);
      assert.strictEqual(countBits(9), 2);
      assert.strictEqual(countBits(10), 2);
      })
    })
*/

// Other Solutions
/*
  countBits = n => n.toString(2).split('0').join('').length;
*/

// Other Solutions v2
/*
  function countBits(n) {
    for(c=0;n;n>>=1)c+=n&1
    return c;
  }
*/
