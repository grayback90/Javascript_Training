/*
---ToDo---
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let arrStr = str.split('');
  let arr = [];
  
  for (let i = 0; i < arrStr.length; ++i) {
    if(arrStr[i] != "a" &&
      arrStr[i] != "A" &&
      arrStr[i] != "e" &&
      arrStr[i] != "E" &&
      arrStr[i] != "i" &&
      arrStr[i] != "I" &&
      arrStr[i] != "o" &&
      arrStr[i] != "O" &&
      arrStr[i] != "u" &&
      arrStr[i] != "U") {
      arr.push(arrStr[i]);
    }
  }
  
  let stringArray = arr.join('');
  
  return stringArray;
}

// Test
/*
  const { assert } = require("chai");

  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
      assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
      assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
      });
    });
*/

// Other Solutions
/*
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
*/

// Other Solutions v2
/*
  function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }
*/
