/*
---ToDo---
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
*/

function solution(number){
  let result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  
  for (let i = 0; i < decimals.length; ++i)
    while(number >= decimals[i]){
      result = result + roman[i];
      number = number - decimals[i];
    }
  
  return result;
}

// Test
/*
  describe("solution", () => {
    it ("should handle small numbers", () => {
      Test.assertEquals(solution(1), 'I', '1 should, "I"')
      Test.assertEquals(solution(2), 'II', '2 should, "II"')
      Test.assertEquals(solution(3), 'III', '3 should, "III"')
      Test.assertEquals(solution(4), 'IV', '4 should, "IV"')
      Test.assertEquals(solution(5), 'V', '5 should, "V"')
      Test.assertEquals(solution(9), 'IX', '9 should, "IX"')
      Test.assertEquals(solution(10), 'X', '10 should, "X"')
      Test.assertEquals(solution(11), 'XI')
      Test.assertEquals(solution(19), 'XIX')
      Test.assertEquals(solution(22), 'XXII')
      Test.assertEquals(solution(15), 'XV')
    });

    it ("should handle large numbers", () => {
      Test.assertEquals(solution(1000), 'M', '1000 should, "M"')
      Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"')
      Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
      Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
      Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
    });
  });
*/

// Other Solutions
/*
  function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

      }
  }
  return ans;
  }
*/


// Other Solutions v2
/*
  function solution(number)
  {
    var result   = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    decimals.map(function (value, index) {
      while (number >= value) {
        result += roman[index];
        number -= value;
      }
    });

    return result;
}
*/
