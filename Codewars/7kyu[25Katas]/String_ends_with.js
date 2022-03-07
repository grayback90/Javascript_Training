/*
---ToDo---
Complete the solution so that it returns true 
if the first argument(string) passed in ends with the 2nd argument (also a string).
---Examples---

*/

function solution(str, ending){
    return str.endsWith(ending);
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(solution('abcde', 'cde'), true)
            Test.assertEquals(solution('abcde', 'abc'), false)
        });
    });
*/

// Other Solutions
/*
    function solution(str, ending){
        return str.substr(-ending.length) == ending;
    }
*/