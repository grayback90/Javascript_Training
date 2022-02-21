// ToDo
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
//
// Rules
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, return 2, not 2.666666...

// Mainfunction to decide if operation or number
function expression(number, operation){
	if(!operation)
		return number;
	return operation(number);
}

// Numberfunctions
function zero(operation) { 
  return expression(0, operation); 
}
function one(operation) { 
  return expression(1, operation); 
}
function two(operation) { 
  return expression(2, operation); 
}
function three(operation) { 
  return expression(3, operation); 
}
function four(operation) { 
  return expression(4, operation); 
}
function five(operation) { 
  return expression(5, operation); 
}
function six(operation) { 
  return expression(6, operation); 
}
function seven(operation) { 
  return expression(7, operation); 
}
function eight(operation) { 
  return expression(8, operation); 
}
function nine(operation) { 
  return expression(9, operation); 
}

// Operationfunctions
function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function dividedBy(x) {
	return function(y) {
		return Math.floor(y/x);
	}
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(seven(times(five())), 35);
            Test.assertEquals(four(plus(nine())), 13);
            Test.assertEquals(eight(minus(three())), 5);
            Test.assertEquals(six(dividedBy(two())), 3);
        });
    });

*/

// Other Solutions
/*
    function zero(func)   { return func ? func(0) : 0; };
    function one(func)    { return func ? func(1) : 1; };
    function two(func)    { return func ? func(2) : 2; };
    function three(func)  { return func ? func(3) : 3; };
    function four(func)   { return func ? func(4) : 4; };
    function five(func)   { return func ? func(5) : 5; };
    function six(func)    { return func ? func(6) : 6; };
    function seven(func)  { return func ? func(7) : 7; };
    function eight(func)  { return func ? func(8) : 8; };
    function nine(func)   { return func ? func(9) : 9; };

    function plus( b )      { return function( a ) { return a + b; }; };
    function minus( b )     { return function( a ) { return a - b; }; };
    function times( b )     { return function( a ) { return a * b; }; };
    function dividedBy( b ) { return function( a ) { return a / b; }; };
*/