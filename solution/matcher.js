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
