/*
---ToDo---
In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.
Create the following function:
runningPace(distance, time)
Where: distance - A float with the number of kilometres
time - A string containing the time it took to travel the distance. It will always be minutes:seconds. 
For example "25:00" means 25 minutes. You don't have to deal with hours.
The function should return the pace, for example "4:20" 
means it took 4 minutes and 20 seconds to travel one kilometre.
Note: The pace should always return only the number of minutes and seconds. 
You don't have to convert these into hours. Floor the number of seconds.
*/

function runningPace(distance, time){
    let aTime = time.split(':');
    let result = "";
    const minutes = parseInt(aTime[0]);
    const seconds = parseInt(aTime[1]);
  
    let gTime = (minutes*60)+seconds;
    let pace = Math.floor(gTime / distance);
    
    const min = Math.floor(pace / 60);
    let sec = pace % 60;
    
    if (sec == 0) {
      result = min + ":" + sec + "0";
    }else if(sec < 10){
      result = min + ":0" + sec;
    }else{
      result = min + ":" + sec;
    }
    
    return result;
}

// Test
/*
const chai = require('chai');
const assert = chai.assert;

describe('runningPace', function(){
  it('basic tests', function() {
    assert.strictEqual(runningPace(1, "3:15"), "3:15");
    assert.strictEqual(runningPace(5, "25:00"), "5:00");
    assert.strictEqual(runningPace(15, "75:00"), "5:00");
    assert.strictEqual(runningPace(2.51, "10:43"), "4:16");
    assert.strictEqual(runningPace(4.99, "22:32"), "4:30");
    assert.strictEqual(runningPace(0.2, "0:38"), "3:10");
    assert.strictEqual(runningPace(42.195, "122:57"), "2:54");
  });
});
*/

// Other Solutions
/*
function runningPace(distance, time) {
    time = time.split(":");
    var velocity = distance/(parseInt(time[0])*60 + parseInt(time[1]));
    var newTime = 1/velocity;
    var secs = Math.floor(newTime % 60);
    var mins = Math.floor((newTime/60));
    var runningPace = "";

    runningPace += mins + ":" +  (secs  < 10 ? "0" + secs : secs);

    return runningPace; 
}
*/