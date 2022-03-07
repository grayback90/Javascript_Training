/*
---ToDo---
Take 2 strings s1 and s2 including only letters from ato z. 
Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
    let arrS1 = [... new Set(s1.split(''))];
    let arrS2 = [... new Set(s2.split(''))];
    let arrReturn = [];
    
    for(let i = 0; i < arrS2.length; ++i) {
      arrS1.push(arrS2[i]);
    }
    
    arrS1 = [... new Set(arrS1)];
    arrReturn = arrS1.sort().join('');
    
    return arrReturn;
}

// Test
/*
    describe("longest",function() {
        it("Basic tests",function() {
            Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
            Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
            Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
        })
    })
*/

// Other Solutions
/*
    function longest(s1, s2) {
        return Array.from(new Set(s1 + s2)).sort().join('');
    }
*/