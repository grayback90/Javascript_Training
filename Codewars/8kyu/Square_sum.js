/*
---ToDo---
Complete the square sum function so that it squares 
each number passed into it and then sums the results together.
*/

function squareSum(numbers){
    let arrSum = 0;
    
    if(numbers.length == 0) {
      return 0;
    }else{
      for(let i = 0; i < numbers.length; ++i) {
        arrSum = arrSum + (numbers[i] * numbers[i]);
      }
    }
    return arrSum;
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(squareSum([1,2]), 5)
            Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
            Test.assertEquals(squareSum([]), 0)
        });
    });
*/

// Other Solutions
/*
    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
            return (n*n) + sum;
        }, 0)
    }
*/