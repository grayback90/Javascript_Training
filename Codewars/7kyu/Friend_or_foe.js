/*
---ToDo---
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
Otherwise, you can be sure he's not...
---Example---
Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

function friend(friends){
    let arrReturn = [];
    
    for(let i = 0; i < friends.length; ++i) {
      if(friends[i].length == 4 && isNaN(friends[i])) {
        arrReturn.push(friends[i]);
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
        it("Testing for fixed tests", () => {
            assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
            assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
            assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
            assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
        })
    })
*/

// Other Solutions
/*
    function friend(friends){
        return friends.filter(n => n.length === 4)
    }
*/