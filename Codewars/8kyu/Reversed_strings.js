/*
---ToDo---
Complete the solution so that it reverses the string passed into it.
*/

function solution(str){
    let arrStr = str.split('');
    let arrRet = [];
    
    for(let i = arrStr.length; i >= 0; --i) {
      arrRet.push(arrStr[i]);
    }
    
    return arrRet.join('');
}

// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {
            assert.strictEqual(solution('world'), 'dlrow');
            assert.strictEqual(solution('hello'), 'olleh');
            assert.strictEqual(solution(''), '');
            assert.strictEqual(solution('h'), 'h');
        });
    });  
*/

// Other Solutions
/*
    function solution(str){
        return str.split('').reverse().join('');  
    }
*/