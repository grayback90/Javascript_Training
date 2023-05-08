/*
---ToDo---
This time no story, no theory. The examples below show you how to write function accum:
---Examples---
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
---Note---
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let arrS = s.toLowerCase().split('');
  let arrReturn = [];
  
  for(let i = 0; i < arrS.length; ++i) {
    let sReturn = "";
    for(let j = 0; j < i + 1; ++j) {
      if(j == 0) {
        sReturn = arrS[i].toUpperCase();
      }else{
        sReturn = sReturn + arrS[i];
      }
    }
    arrReturn.push(sReturn);
  }
  return arrReturn.join('-');
}
  
// Test
/*
    describe("accum",function() {
        it("Basic tests",function() {    
            Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
            Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
            Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
            Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
            Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
        })
    })
*/
  
// Other Solutions
/*
    function accum(s) {
        return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    }
*/