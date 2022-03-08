/*
---ToDo---
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
---Examples---
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
    let count = 0;
    let arrA = A.sort((a, b) => a -b);
    
    for(let i = 0; i < arrA.length; i++) {
      for(let j = 0; j < arrA.length; j++) {
        if(arrA[i] == arrA[j]) {
          count++;
        }
      }
      if(count % 2 !== 0) {
        return arrA[i];
      }
    }
}

// Test
/*
    function doTest(a, n) {
        console.log("A = ", a);
        console.log("n = ", n);
        Test.assertEquals(findOdd(a), n);
    }
    describe('Example tests', function() {
        doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
        doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
        doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
        doTest([10], 10);
        doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
        doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
    });
*/

// Other Solutions
/*
    const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/