/*
---ToDo---
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You function receives one side of the DNA (string); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again).
*/

function DNAStrand(dna){
  let DNAsort = dna.split('');
  let DNAsorted = "";
  
  for(let i=0; i < DNAsort.length; ++i) {
    if (DNAsort[i] == "A") {
      DNAsort[i] = DNAsort[i].replace("A", "T");
    }else if(DNAsort[i] == "T") {
      DNAsort[i] = DNAsort[i].replace("T", "A");
    }else if (DNAsort[i] == "G") {
      DNAsort[i] = DNAsort[i].replace("G", "C");
    }else if (DNAsort[i] == "C") {
      DNAsort[i] = DNAsort[i].replace("C", "G");
    }
  }
  
  DNAsorted = DNAsort.join('');
  
  return DNAsorted;
}


// Test:
/*
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;

  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
      assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
      assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
    })
  })
*/


// Other Solutions
/*
  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

  function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }
*/
