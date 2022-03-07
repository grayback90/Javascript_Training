/*
---ToDo---
Your task is to determine how many files of the copy queue you will 
be able to save into your Hard Disk Drive. The files must be saved in 
the order they appear in the queue.
---Input---
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
---Output---
Number of files that can be fully saved in the HD.
*/

function save(sizes, hd) {
    let counter = 0;
    let mb = 0;
    
    if(sizes[0] > hd) {return 0;}
  
    for(let i = 0; i < sizes.length; i++) {
      if(mb <= hd) {
        mb += sizes[i];
        console.log(mb);
        counter += 1;
      }else{
        return (counter - 1);
      }
    }
    return counter;
}

// Test
/*
    const { assert } = require("chai");

    describe("Fixed tests", function() {
        it("save([4, 4, 4, 3, 3], 12)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 12), 3));
        it("save([4, 4, 4, 3, 3], 11)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 11), 2));
        it("save([4, 8, 15, 16, 23, 42], 108)", () => assert.strictEqual(save([4, 8, 15, 16, 23, 42], 108), 6));
        it("save([13], 13)", () => assert.strictEqual(save([13], 13), 1));
        it("save([1, 2, 3, 4], 250)", () => assert.strictEqual(save([1, 2, 3, 4], 250), 4));
        it("save([100], 500)", () => assert.strictEqual(save([100], 500), 1));
        it("save([11, 13, 15, 17, 19], 8)", () => assert.strictEqual(save([11, 13, 15, 17, 19], 8), 0));
        it("save([45], 12)", () => assert.strictEqual(save([45], 12), 0));
    });
*/

// Other Solutions
/*
    function save(sizes, hd) {
        let total = 0
        let count = 0
        for (let file of sizes) {
            if ((total + file) <= hd) {
                total += file
                count++
            } else {
                return count
            }
        }
        return count
    }
*/