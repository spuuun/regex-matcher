import cases from './data.js'
import matcher from '../solution/matcher.js'

const pattern = process.argv[2]
// const expectedMatches = process.argv[3]
let matches = 0
cases.forEach(str => {
    if (matcher(str, pattern)) {
        console.log(``)
        console.log(`MATCH!: '${str}' matches pattern '${pattern}'`)
        matches++
    }
})

// expectedMatches === matches ? console.log("SUCCESS!!") : console.log("FAILURE")
// console.log("expected matches.........", expectedMatches)
console.log("total strings checked...........", cases.length)
console.log("matches.........................", matches)
