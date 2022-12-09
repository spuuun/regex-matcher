import { cases } from './data'
// const cases = require('./data')
import { matcher } from './matcher'
// const matcher = require('./matcher')


const pattern = process.argv[2]
const expectedMatches = process.argv[3]
let matches = 0

console.log(cases)

// cases.forEach(str => {
//     // console.log(matcher(str, pattern))
//     if (matcher(str, pattern)) {
//         matches++
//     }
// })

expectedMatches === matches ? console.log("SUCCESS!!") : console.log("FAILURE")
console.log("expected matches.........", expectedMatches)
console.log("actual matches...........", matches)
