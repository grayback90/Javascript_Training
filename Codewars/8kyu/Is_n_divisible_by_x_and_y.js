/*
---ToDo---
Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero digits.
*/

function isDivisible(n, x, y) {
    if(((n / x) % 1 === 0) && ((n / y) % 1 === 0)) {
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

    describe("Basic tests", () => {
        it("Fixed Tests", () => {
            assert.strictEqual(isDivisible(3,3,4),false);
            assert.strictEqual(isDivisible(12,3,4),true);
            assert.strictEqual(isDivisible(8,3,4),false);
            assert.strictEqual(isDivisible(48,3,4),true);
        });
    });
*/

// Other Solutions
/*
    function isDivisible(n, x, y) {
        return n % x === 0 && n % y === 0
    }
*/

// Other Solutions v2
/*
    function isDivisible(n, x, y) {
        return !(n%x||n%y)
    }
*/