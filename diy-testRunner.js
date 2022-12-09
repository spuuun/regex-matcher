import cases from './data.js'
import  matcher from './matcher.js'

const pattern = process.argv[2]
const expectedMatches = process.argv[3]
let matches = 0
// console.log(pattern)
cases.forEach(str => {
    if (matcher(str, pattern)) {
        console.log(`MATCH!`)
        console.log(`string '${str}' matches pattern '${pattern}'`)
        matches++
    }

})

// console.log("RESULT AGAINST 1 STRING",  matcher(data, pattern))

// expectedMatches === matches ? console.log("SUCCESS!!") : console.log("FAILURE")
// console.log("expected matches.........", expectedMatches)
// console.log("actual matches...........", matches)
