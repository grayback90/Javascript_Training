/*
---ToDo---
Given an array of integers.
Return an array, where the first element is the count of positives numbers 
and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
    let counter = 0;
    let sum = 0;
    let arrR = [];
    let zeroCounter = 0;
    
    if(input == null) {
      return arrR;
    }else{
      for(let i = 0; i < input.length; ++i) {
        if(input[i] > 0) {
          counter += 1;
        }else if(input[i] < 0) {
          sum = sum + input[i];
        }else if(input[i] == 0) {
          zeroCounter += 1;
        }
      }
    }
    
    if(zeroCounter != input.length) {
      arrR.push(counter);
      arrR.push(sum);
    }
    
    return arrR;
}
  
// Test
/*
    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    describe("Example tests", () => {
        it("Testing for fixed test 1", () => {
            let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
            let actual = countPositivesSumNegatives(testData);
            let expected = [10, -65];
            assert.deepEqual(actual, expected);
        })
        
        it("Testing for fixed test 1", () => {
            let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
            let actual = countPositivesSumNegatives(testData);
            let expected = [8, -50];    
            assert.deepEqual(actual, expected);
        });
    });
*/
  
// Other Solutions
/*
    function countPositivesSumNegatives(input) {
        if (input == null || input.length == 0) {
            return [];
        }
        
        var positive = 0;
        var negative = 0;
        
        for (var i=0, l=input.length; i<l; ++i) {
            if (input[i] > 0) {
                ++ positive;
        }else{
            negative += input[i];
        }
        
        return [positive, negative];
    }
*/