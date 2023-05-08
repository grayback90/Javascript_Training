/*
---ToDo---
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').
---Examples---
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
  let pairs = [];
  
  for (let i = 0; i < str.length; i += 2) {
    //slice(start, end);
    let pair = str.slice(i, i+2);
    if(pair.length < 2) {
      pair += '_';
    }
    pairs.push(pair);
  }
  return pairs;
}

// Test
/*
const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});
*/

// Other Solutions
/*
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
*/

// Other Solutions v2
/*
function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}
*/