/*
---ToDo---
Very simple, given an integer or a floating-point number, find its opposite.
*/

function opposite(number) {
    if(number > 0){
      return -number;
    }else{
      return Math.abs(number);
    }
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(opposite(1), -1,)
        });
    });
*/

// Other Solutions
/*
    function opposite(number) {
        return(-number);
    }
*/