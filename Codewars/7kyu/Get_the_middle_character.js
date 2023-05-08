/*
---ToDo---
You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
    let arrS = s.split('');
    let arrSHalf = ((arrS.length / 2) | 0);
    
    if(arrS.length % 2 == 0) {
      let arrSEven = arrS[arrSHalf - 1] + arrS[arrSHalf];
      return arrSEven;
    }else{
      return arrS[arrSHalf];
    }
}
  
// Test
/*
    describe("GetMiddle", function() {
        it("Tests", function() {
            Test.assertEquals(getMiddle("test"),"es");
            Test.assertEquals(getMiddle("testing"),"t");
            Test.assertEquals(getMiddle("middle"),"dd");
            Test.assertEquals(getMiddle("A"),"A");
        });
    });
*/
  
// Other Solutions
/*
    function getMiddle(s) {
        return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
    }
*/