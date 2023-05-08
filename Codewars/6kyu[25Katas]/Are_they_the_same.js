/*
---ToDo---
Given two arrays a and b. Write a function comp(a, b) that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
---Example---
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true.
---Example---
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a, b) returns false.
---Note---
The two arrays have the same size (> 0) given as parameter in function comp.
*/

function comp(arr1, arr2){
    
    if(arr1 == null || arr2 == null) {
        return false;
    }else if(arr1.length == 0 && arr2.length == 0){
        return true;
    }else{
        for(let i = 0; i < arr1.length; ++i) {
            for(let j = 0; j < arr2.length; ++j) {
                //Test ob ein Element aus arr2 die Multiplikation aus arr1 ist.
                if((arr1[i] * arr1[i]) === arr2[j]) {
                    //Wenn ja dann wird Element aus arr2 entfernt.
                    arr2.splice(j, 1);
                    //Und man prüft das nächste Element in arr1.
                    j = arr2.length;
                }
            }
        }
        //Wenn arr2 leer ist, waren alle Elemente Multiplikatoren.
        if(arr2.length == 0) {
            return true;
        }else{
            return false;
        }
    }
}

// Test
/*
describe("Tests", () => {
    it("test", () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        Test.assertEquals(comp(a1, a2), true);
    });
});
*/

// Other Solutions
/*
    function comp(array1, array2) {
        if(array1 == null || array2 == null) return false;
        array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
        return array1.map(v => v * v).every((v, i) => v == array2[i]);
    }
*/

// Other Solutions v2
/*
    const comp = (array1, array2) => 
        Array.isArray(array1) &&
        Array.isArray(array2) &&
        array1.every(item => {
            const index = array2.indexOf(Math.pow(item, 2))
            return index > -1 ? array2.splice(index, 1) : false
    })
*/