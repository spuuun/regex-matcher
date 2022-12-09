const matcher = function(candidateString, pattern) {  
    let statement;
    let failureState = false;
    const cs = candidateString;
    const p = pattern;

    for (let i = 0; i < p.length; i++) {
        statement = p[i]

        for (let j = 0; j < cs.length; j++) {
            if (p[i] !== cs[j]) {
                failureState = true
                if (p[i + 1] !== '*' || p[i + 1 !== '?']) {
                    return !failureState
                }
            }
        }
    }




    return true;
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

}

export default { matcher }