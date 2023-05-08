/*
---ToDo---
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
---Example---
filter_list([1,2,'aasf','1','123',123,'abc']) -> [1,2,123]
*/

function filter_list(l) {
  let arr = [];
  
  for(let i = 0; i < l.length; ++i) {
    if(typeof l[i] === 'number') {
      arr.push(l[i]);
    }
  }
  
  return arr;
}

// Test
/*
  describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
  Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
  Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
    });
  });
*/

// Other Solutions
/*
  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }
*/
