/*
---ToDo---
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    let arrStr = str.split('');
    
    arrStr.splice(0, 1);
    arrStr.splice(arrStr.length - 1, 1);
    
    return arrStr.join('');
};

// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Tests", () => {
        it("Fixed Tests", () => {
            assert.strictEqual(removeChar('eloquent'), 'loquen');
            assert.strictEqual(removeChar('country'), 'ountr');
            assert.strictEqual(removeChar('person'), 'erso');
            assert.strictEqual(removeChar('place'), 'lac');
            assert.strictEqual(removeChar('ooopsss'), 'oopss');
        });
    });
*/

// Other Solutions
/*
    function removeChar(str) {
        return str.slice(1, -1);
    }
*/