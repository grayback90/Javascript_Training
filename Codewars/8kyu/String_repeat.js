/*
---ToDo---
Write a function called repeatStr which repeats the given string string exactly n times.
*/

function repeatStr (n, s) {
    let rs = "";
    
    for(let i = 0; i < n; i++) {
      rs = rs + s;
    }
    
    return rs;
}

// Test
/*
    describe("Tests", function() {
        it ("Basic tests", function() {
            Test.assertSimilar(repeatStr(3, "*"), "***");
            Test.assertSimilar(repeatStr(5, "#"), "#####");
            Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
        });
    });
*/

// Other Solutions
/*
    function repeatStr (n, s) {
        return s.repeat(n);
    }
*/