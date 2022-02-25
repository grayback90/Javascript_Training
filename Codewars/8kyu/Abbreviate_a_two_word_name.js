/*
---ToDo---
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
*/

function abbrevName(name){
    let initialOne = name[0].toUpperCase();
    let whiteSpace = name.indexOf(' ');
    let initialTwo = name[whiteSpace + 1].toUpperCase();
    
    return initialOne + "." + initialTwo;
}
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", () => {
        it("Testing for fixed tests", () => {
            assert.strictEqual(abbrevName("Sam Harris"), "S.H");
            assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
            assert.strictEqual(abbrevName("Evan Cole"), "E.C");
            assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
            assert.strictEqual(abbrevName("David Mendieta"), "D.M");
        });
    });
*/
  
// Other Solutions
/*
    function abbrevName(name){
        var nameArray = name.split(" ");
        return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
    }
*/

// Other Solutions v2
/*
    function abbrevName(name){
        return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
    }
*/