const matcher = function(candidateString, pattern) {  

// break pattern into an array of statements
const special = [".", "*", "?"]
let statements = []


let currentSubstring = []
for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "?") {
        statements.push(currentSubstring.join())
        statements.push(`${pattern[i-1]}?`)
        currentSubstring = []
    } 
    else if (pattern[i] === "*") {
        statements.push(currentSubstringjoin())
        statements.push(`${pattern[i-1]}?`)
        currentSubstring = []
    }
    else if (pattern[i + 1] !== "?" || pattern[i + 1] !== "*" ) {
        currentSubstring.push(pattern[i])
    }
}
 
// iterate candidate string - do so by "statements"
    // if statements[i] contains no ? or *
        // take segment of candidate string of equal length and check for equivalency
        // if there is a . -- accept any character as equivalent

    // if statements[i] contains ?
        //  b?b
        //  b




    // implement processes for each special char
        // . - any char
        // ? - optional char - zero or one time
        // * - repeated char ZERO or more times
        // if pattern violated, break out and return false
        // if iteration completes - return true





    return true
}