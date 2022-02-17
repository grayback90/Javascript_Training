// ToDo
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *

function towerBuilder(nFloors) {
  let tower = [];
  let space = [];
  let stones = [];
  
  for (let i = 1; i <= nFloors; ++i) {
    space = ' '.repeat(nFloors - i);
    stones = '*'.repeat((i + i) - 1);
    tower.push(`${space}${stones}${space}`);
  }
  
  return tower;
}

// Test
/*
  describe("Tests", () => {
    it("test", () => {
  Test.assertDeepEquals(towerBuilder(1), ["*"]);
  Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
  Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
    });
  });
*/

// Other Solutions
/*
  function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }
*/

// Other Solutions v2
/*
  function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }
*/
