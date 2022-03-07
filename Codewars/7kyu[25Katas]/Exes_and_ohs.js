/*
---ToDo---
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.
*/

function XO(str) {
    let arrStr = str.toLowerCase().split('');
    let numX = 0;
    let numO = 0;
    
    for(let i = 0; i < arrStr.length; ++i) {
      if(arrStr[i] == 'x') {
        numX += 1;
      }else if(arrStr[i] == 'o') {
        numO += 1;
      }
    }
      
    if(numX == numO){
      return true;
    }else{
      return false;
    }
}
  
  
// Test:
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(XO('xo'),true);
            Test.assertEquals(XO("xxOo"),true);
            Test.assertEquals(XO("xxxm"),false);
            Test.assertEquals(XO("Oo"),false);
            Test.assertEquals(XO("ooom"),false);
        });
    });
*/
  
  
// Other Solutions
/*
    function XO(str) {
        let x = str.match(/x/gi);
        let o = str.match(/o/gi);
        return (x && x.length) === (o && o.length);
    }
*/
  