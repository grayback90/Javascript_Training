/*
---ToDo---
Given a year, return the century it is in.
*/

function float2int(num) {
    return (num | 0);
}
  
function century(year) {
    let yearNum = (year / 100);
    
    if((yearNum % 1) === 0) {
      return yearNum;
    }else{
      return (float2int(yearNum) + 1);
    }
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(century(1705), 18, 'Testing for year 1705');
            Test.assertEquals(century(1900), 19, 'Testing for year 1900');
            Test.assertEquals(century(1601), 17, 'Testing for year 1601');
            Test.assertEquals(century(2000), 20, 'Testing for year 2000');
            Test.assertEquals(century(89), 1, 'Testing for year 89');
        });
    });
*/

// Other Solutions
/*
    function century(year) {
        return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
    }
*/