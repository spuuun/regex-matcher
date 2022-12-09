const parsePattern = pattern => {
    let statements = []
    pattern = pattern.split('')
    let count = 0
    let currentStatement;
    let nextStatement;

    while (pattern[count]) {
        currentStatement = pattern[count]
        nextStatement = pattern[count + 1]

        if (nextStatement === '?' || nextStatement === '*') {
            statements.push(`${currentStatement}${nextStatement}`)
            count += 2;
        }
        else {
            statements.push(currentStatement)
            count++
        }
    }
    return statements
}

const matcher = function (candidateString, pattern) {
    let sta = 0
    let cs = 0
    const statements = parsePattern(pattern)

    console.log('STATEMENTS: ', statements)
    while (candidateString[cs] && statements[sta]) {
        let statement = statements[sta]
        let candidate = candidateString[cs]

        if (statement.length > 1) {
            //?
            if (statement[1] === '?') {
                if (statement[0] === candidate) {
                    sta++
                    cs++
                }
                else {
                    sta++
                }
            }
            
            //*
            if (statement[1] === '*') {
                if (statement[0] === candidate) {
                    cs++
                }
                else {
                    sta++
                    cs++
                }
            }
        }

        else {
            if ((statement === candidate ) || (statement === '.' && candidate)) {
                sta++
                cs++
            }
            else {
                return false
            }
        }
    }

if (statements[sta] && !candidateString[cs]) {
    if (statements[sta].length === 1) {
        return false
    }
}
return true;

}

export default matcher;


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



