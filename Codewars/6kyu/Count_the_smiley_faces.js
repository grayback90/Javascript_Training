/*
---ToDo---
Given an array (arr) as an argument complete the function countSmileys that 
should return the total number of smiling faces.
---Rules---
1. Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
2. A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
3. Every smiling face must have a smiling mouth that should be marked with either ) or D
4. No additional characters are allowed except for those mentioned.
---Examples---
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

function countSmileys(arr) {
    let arrSmileys = [':)', ':D', ';)', ';D', ':-)', ':-D', ';-)', ';-D', ':~)', ':~D', ';~)', ';~D'];
    let counter = 0;
    
    for(i = 0; i < arr.length; i++) {
      for(j = 0; j < arrSmileys.length; j++) {
        if(arr[i] == arrSmileys[j]) {
          counter += 1;
        }
      }
    }
    return counter;
}
  
  // Test
  /*
    describe("Basic testing", function() {
        it("", () => {
            Test.assertEquals(countSmileys([]), 0);
            Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
            Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
            Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
        });
    });
  */
  
  // Other Solutions
  /*
    function countSmileys(arr) {
        return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
    }
  */  