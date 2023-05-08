/*
---ToDo---
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

function basicOp(operation, value1, value2) {
    if(operation == "+") {
        return (value1 + value2);
    }else if(operation == "-") {
        return (value1 - value2);
    }else if(operation == "*") {
        return (value1 * value2);
    }else if(operation == "/") {
        return (value1 / value2);
    }
}
  
// Test
/*
    describe("Tests", () => {
        it("test", () => {
            console.log("Basic tests\n");
            Test.assertSimilar(basicOp('+', 4, 7), 11);
            Test.assertSimilar(basicOp('-', 15, 18), -3);
            Test.assertSimilar(basicOp('*', 5, 5), 25);
            Test.assertSimilar(basicOp('/', 49, 7), 7);
        });
    });
*/
  
// Other Solutions
/*
    function basicOp(o, a, b) {
        return eval(a+o+b);
    }
*/

// Other Solutions v2
/*
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
*/ 