/*
---ToDo---
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.
*/

var summation = function (num) {
  let summary = 0;
  
  for(let i = 0; i < num + 1; i++) {
    summary = summary + i;
  }
  
  return summary;
}

// Test
/*
    describe('summation', function () {
        it('should return the correct total', function () {
            Test.assertEquals(summation(1), 1)
            Test.assertEquals(summation(8), 36)
        })
    })
*/

// Other Solutions
/*
    var summation = function (num) {
        let result = 0;
        for (var i = 1; i <= num; i++) {
            result += i;
        }
    
    return result;
    }
*/