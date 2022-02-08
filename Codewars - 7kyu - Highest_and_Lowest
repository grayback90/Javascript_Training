// ToDo
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example
//highAndLow("1 9 3 4 -1 -5 -3 5"); -> "9 -5"

function highAndLow(numbers) {
    const arr = numbers.split(" ");
    let maxNum = arr[0];
    let minNum = arr[0];

    // num wird mit dem aktuellen Wert aus arr belegt
    for(let num of arr) {
        if(Number(num) > maxNum) {
            maxNum = num;
        }

        if(Number(num) < minNum) {
            minNum = num;
        }
    }

    return maxNum + " " + minNum;
}

// Test
/*
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;

  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(highAndLow("8 3 5 -4 1 -9 4 -7 42 4"), "42 -9");   
    });
  });
*/

// Other Solutions
/*
  function highAndLow(numbers){
    let nums = numbers.split(" ");
      return `${Math.max(...nums)} ${Math.min(...nums)}`;
  }
*/
