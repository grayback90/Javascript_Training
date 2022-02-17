// ToDo
// Mr. Scrooge has a sum of money 'P' that he wants to invest. 
// Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. 
// After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  
  if(principal >= desired) {
    return years;
  }else{
    for(let Y = 1; Y < 1000; ++Y) {
      principal = principal + ((principal - (principal * tax)) * interest);
      if(principal >= desired) {
        years = Y;
        break;
      }
    }
  }
  return years;
}

// Test
/*
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;

  describe("calculateYears", () => {
    it("Basic tests", () => {
      assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3)
      assert.strictEqual(calculateYears(1000,0.01625,0.18,1200), 14)
      assert.strictEqual(calculateYears(1000,0.05,0.18,1000), 0)
    })
  })
*/

// Other Solutions
/*
  function calculateYears(principal, interest, tax, desired) {
      // your code
      var years = 0;
      while(principal < desired){
        principal += (principal * interest) * (1 - tax);
        years++;
      }
      return years;
  }
*/
