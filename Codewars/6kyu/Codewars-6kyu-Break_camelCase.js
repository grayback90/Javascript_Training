// ToDo
// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');
}

// Test
/*
    describe("Tests", () => {
        it("test", () => {
            Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
            Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

        });
    });
*/

// Other Solutions
/*
    function solution(string) {
        return(string.replace(/([A-Z])/g, ' $1'));
    }
*/

// Other Solutions v2
/*
    function solution(string) {
        string = string.split('').map(function (el) {
            if (el === el.toUpperCase()) {
                el = ' ' + el
            }
            return el
        })
        return string.join('')
    }
*/