const parsePattern = pattern => {
    let statements = []
    let count = 0
    let currentStatement;
    let nextStatement;

    // let specialcount = 0

    while (pattern[count]) {
    if (pattern[count+1]) {
        nextStatement = pattern[count+1]
    }
    
    if (nextStatement === '?' || nextStatement === '*') {
        currentStatement = pattern[count]
        statements.push(`${currentStatement}${nextStatement}`)
        // specialcount++
        count += 2;
    }
    else {
        currentStatement = pattern[count]
        statements.push(currentStatement)
        count++
    }
}

    // console.log('pattern length: ', pattern.length)
    // console.log('statements lenth: ', statements.length)
    // console.log('special characters count: ', specialcount)
    // console.log(statements)
    
    return statements
}

parsePattern('alvw*hb?pi*awu?rbvnawked');

const matcher = function (candidateString, pattern) {
    let pCount = 0
    let csCount = 0
    let statement





    // if (!candidateString[csCount] || !pattern[pCount]) {

    // }

    // if (pattern[pCount + 1] !== ('*' || '?')) {
    //     statement = pattern[pCount]
    // }
    // else {
    //     statement = pattern[pCount] + pattern[pCount + 1]
    // }

    // statement = pattern[pCount]
    if (pattern[pCount] === candidateString[csCount]) {
        pCount++;
        csCount++;
    }
    else if (pattern[pCount] === '.' && candidateString[csCount]) {
        pCount++;
        csCount++;
    }
    else if (pattern[pCount] === '?' && candidateString[csCount]) {
        pCount++;
    }
    else if (pattern[pCount + 1] === '?') {
        pCount += 2
    }


    return true;
}





// let statement;
// let failureState = false;
// const cs = candidateString;
// const p = pattern;

// for (let i = 0; i < p.length; i++) {
//     statement = p[i]

//     for (let j = 0; j < cs.length; j++) {
//         if (p[i] !== cs[j]) {
//             failureState = true
//             if (p[i + 1] !== '*' || p[i + 1 !== '?']) {
//                 return !failureState
//             }
//         }
//     }
// }




//VARS:
// statement = char that currently needs to be matched
// failureState = boolean; switch to be used for * and ?
// for any unmatched statement, need to check the next statement in pattern
// before returning false. 
// this is b/c if the next statement is a ? or *, the candidateString may still
// be valid due to ? and * enforce a statement ZERO or more times.
// -------------------------------------------------------------------------------------
// match literal
// if there is something to be matched (i.e. neither str not pattern have been exhausted)
// are the literal chars the same
// yes => continue
// no => failureState to TRUE
// match .
// if there is something to be matched in both str and pattern (i.e. neither str not pattern have been exhausted)
// yes => continue
// no => failureState to TRUE
// ? qualifier
// if ? encountered && failure state is FALSE
// continue
// if ? encountered and failure state is TRUE
// failureState to FALSE
//continue
// * qualifier
// recurse:
// continue iterating candidateString w/o advancing the pointer of the pattern
// FOR AS LONG AS CANDIDATE STRING MATCHES CURRENT STATEMENT

// EDGE CASE
// if rule before and after ? or * is the same --- e.g. a*a, b?b, .*.



export default matcher 