/*
---ToDo---
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
---Note---
Don't forget to check for bad values like null/undefined.
*/

function countSheeps(arrSheeps) {
    let counter = 0;
    
    if(arrSheeps.length == 0 || arrSheeps == null) {return 0;}
    for(let i = 0; i < arrSheeps.length; ++i) {
      if(arrSheeps[i]) {
        counter = counter + 1;
      }
    }
    return counter;
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            var array1 = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ];
                
            Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
        });
    });
*/

// Other Solutions
/*
    function countSheeps(arrayOfSheeps) {
        return arrayOfSheeps.filter(Boolean).length;
    }
*/