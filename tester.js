import cases from './data.js'
// const cases = require('./data')
import  matcher from './matcher.js'
// const matcher = require('./matcher')

const data = "GIDOaEud8V"

const pattern = process.argv[2]
const expectedMatches = process.argv[3]
let matches = 0

console.log(typeof(pattern))

cases.forEach(str => {
    console.log(matcher(str, pattern))
    if (matcher(str, pattern)) {
        matches++
    }
})

console.log("RESULT AGAINST 1 STRING", matcher(data, pattern))

expectedMatches === matches ? console.log("SUCCESS!!") : console.log("FAILURE")
console.log("expected matches.........", expectedMatches)
console.log("actual matches...........", matches)
