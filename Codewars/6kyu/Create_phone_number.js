/*
---ToDo---
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.
---Examples---
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

function createPhoneNumber(numbers){
    let phoneNumber = [];
    
    phoneNumber.push('(', numbers[0], numbers[1], numbers[2], ')', ' ', numbers[3], numbers[4], numbers[5], '-', numbers[6], numbers[7], numbers[8], numbers[9]);
  
    return phoneNumber.join('');  
}

// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Create Phone Number", () => {
        it("Fixed tests", () => {
            assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
            assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
            assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        });
    });
*/

// Other Solutions
/*
    function createPhoneNumber(numbers){
        var format = "(xxx) xxx-xxxx";
    
        for(var i = 0; i < numbers.length; i++) {
            format = format.replace('x', numbers[i]);
        }
        return format;
    }
*/