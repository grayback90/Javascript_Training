/*
---ToDo---
In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
---Note---
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
*/

function nbYear(p0, percent, aug, p) {
    for(let i = 0; i > -1; i++) {
      // (| 0) to round the numbers
      p0 = (p0 + (p0 * (percent / 100)) + aug) | 0;
      if(p0 > p || p0 == p){
        return i+1;
      }
    }
}

// Test
/*
    describe("nbYear",function() {
        it("Basic tests",function() {    
            Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
            Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
            Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
            Test.assertEquals(nbYear(1000, 2, 50, 1214), 4);
        })
    })
*/

// Other Solutions
/*
    function nbYear(p0, percent, aug, p) {    
        for (var years = 0; p0 < p; years++) {
            p0 = Math.floor(p0 + p0 * percent / 100 + aug);
        }
        return years
    }
*/