/*
---ToDo---
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers 
or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
---Examples---
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers){
    let counter = 0;
    
    if(integers[0] % 2 != 0) {counter = counter + 1;}
    if(integers[1] % 2 != 0) {counter = counter + 1;}
    if(integers[2] % 2 != 0) {counter = counter + 1;}
    
    for(let j = 0; j < integers.length; ++j) {
      if(counter >= 2) {
        if(integers[j] % 2 == 0) {
          return integers[j];
        }
      }else{
        if(integers[j] % 2 != 0) {
          return integers[j]
        }
      }
    }
  }

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(findOutlier([0, 1, 2]), 1)
            Test.assertEquals(findOutlier([1, 2, 3]), 2)
            Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
            Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
            Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
        });
    });
*/

// Other Solutions
/*
    function findOutlier(int){
        var even = int.filter(a=>a%2==0);
        var odd = int.filter(a=>a%2!==0);
        return even.length==1? even[0] : odd[0];
    }
*/

// Other Solutions v2
/*
    function findOutlier(integers){
        return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
    }
    function even(num){
        return (num % 2 == 0);
    }
    function odd(num){
        return !even(num)
    }
*/