/*
---ToDo---
We need a function that can transform a string into a number. 
What ways of achieving this do you know?
---Note---
Don't worry, all inputs will be strings, 
and every string is a perfectly valid representation of an integral number.
*/

var stringToNumber = function(str){
    return parseInt(str);
}
  
// Test
/*
    describe( "stringToNumber", function(){
        it( "should work for the examples" , function(){
            Test.assertEquals(stringToNumber("1234"),1234)
            Test.assertEquals(stringToNumber("605"), 605)
            Test.assertEquals(stringToNumber("1405"),1405)
            Test.assertEquals(stringToNumber("-7"),  -7)
        });
    });
*/