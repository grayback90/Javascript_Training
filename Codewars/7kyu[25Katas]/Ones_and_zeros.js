/*
---ToDo---
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
---Example---
[0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

const binaryArrayToNumber = arr => {
    return parseInt(arr.toString().replace(/,/g, ''), 2);
};

// Test
/*
    describe("One's and Zero's", () => {
        it("Example tests", () => {
            Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
            Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
            Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
            Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
        });
    });
*/

// Other Solutions
/*
    const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
*/