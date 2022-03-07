/*
---ToDo---
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
---Input---
Input will consist of a list of pairs. 
Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.
*/

function openOrSenior(data){
    let arrReturn = [];
    
    for(let i = 0; i < data.length; ++i) {
      if(data[i][0] > 54 && data[i][1] > 7) {
        arrReturn.push('Senior');
      }else{
        arrReturn.push('Open');
      }
    }
    
    return arrReturn;
}

// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Basic tests", () => {
        it("Fixed tests", () => {
            assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
            assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
            assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
        });
    });
*/

// Other Solutions
/*
    function openOrSenior(data){
        return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
    }
*/

// Other Solutions
/*
    function openOrSenior(data){
        function determineMembership(member){
            return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
        }
        return data.map(determineMembership);
    }
*/