/*
---ToDo---
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App 
on their phones -- everytime you press the button it sends you an array of 
one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it 
takes you one minute to traverse one city block, so create a function that will 
return true if the walk the app gives you will take you exactly 
ten minutes (you don't want to be early or late!) and will, of course, 
return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
    let counter = 0;
    
    if(walk.length != 10) {
      return false;
    }else{
      for(let i = 0; i < walk.length; i++) {
        if(walk[i] == 'n') {
          counter += 1;
        }else if(walk[i] == 's') {
          counter -= 1;
        }else if(walk[i] == 'w') {
          counter += 2;
        }else if(walk[i] == 'e') {
          counter -= 2;
        }
      }
      if(counter == 0) {
        return true;
      }else{
        return false;
      }
    }
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
        //some test cases for you...
            Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
            Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
            Test.expect(!isValidWalk(['w']), 'should return false');
            Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
        });
    });
*/

// Other Solutions
/*
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}
*/