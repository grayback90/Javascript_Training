// ToDo
// Your goal in this Kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// example: arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// example: arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    let returnArr = [];
    
    if(b.length === 0){
      return a;
    }
    
    if(a.length === 0) {
      return [];
    }
    
    a.forEach(function included(element){
      if(!b.includes(element)){
        returnArr.push(element);
      }    
    })
    
    return returnArr;
}

// Test
/*
    describe("Sample tests", function() {
        it("Should pass Sample tests", function() {
            Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
            Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
            Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
            Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
        });
    }); 
*/

// Other Solutions
/*
    function array_diff(a, b) {
        return a.filter(e => !b.includes(e));
    }
*/

// Other Solutions v2
/*
    function array_diff(a, b) {
        return a.filter(function(x) { return b.indexOf(x) == -1; });
    }
*/