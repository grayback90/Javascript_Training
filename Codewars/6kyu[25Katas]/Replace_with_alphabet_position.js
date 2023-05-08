/*
---ToDo---
In this kata you are required to, given a string, 
replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
    let result = [],
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        numberAlpha = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let arrText = text.toLowerCase().split('');
    
    for(let i = 0; i < arrText.length; i++) {
      for(let j = 0; j < alphabet.length; j++) {
        if(arrText[i] == alphabet[j]) {
          result.push(numberAlpha[j]);
        }
      }
    }
    
    return result.join(' ');  
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
            Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
        });
    });
*/

// Other Solutions
/*
    function alphabetPosition(text) {
        return text
            .toUpperCase()
            .match(/[a-z]/gi)
            .map( (c) => c.charCodeAt() - 64)
            .join(' ');
    }
*/