# Tests
## **Recommended** 
* Simply run `npm test` 

## Using `diyTestRunner.js`
* Run diyTestRunner.js from the command line, using `node PATTERN`
    * where `PATTERN` is the pattern you want to search for in a static dataset supplied in the current `data.js` file
    * it is good practice, though not necessary in every case, to enclose `PATTERN` in quotation marks
    * may add the ability to specify different dataset(s) with command line arguments in future versions


# Census Live Coding Question 
[original](https://getcensus.notion.site/Census-Live-Coding-Question-e6e77047424949598d51f7fd39d423fd)

Using the language of your choice and its standard library, build a regular expression matcher that supports these two rules and two qualifiers:
* **Rule 1:** Match a literal character:
    * `match(pattern: "ab", string: "123") ⇒ false`
    * `match(pattern: "ab", string: "ab") ⇒ true`
* **Rule 2:** Match any character using .
    * `match(pattern: "a.", string: "a") ⇒ false`
    * `match(pattern: ".a", string: "aa") ⇒ true`
* **Qualifier 1:** Make the previous rule optional using ?, meaning match the previous rule 0 or 1 times
    * `match(pattern: "aa?", string: "a") ⇒ true`
    * `match(pattern: "aa?", string: "aa") ⇒ true`
* **Qualifier 2:** Repeated qualifier *, meaning match the previous rule 0 or more times
    * `match(pattern: "ba*", string: "b") ⇒ true`
    * `match(pattern: "ba*b", string: "baaaaab") ⇒ true`
    * `match(pattern: "a*a", string: "aaaa") ⇒ true`
* More complex examples putting multiple rules / qualifiers together 
    * `match(pattern: "a.?b*cc.*", string: "axccd") ⇒ true`
    * `match(pattern: "a.?b*cc.*", string: "axbbbbcc1234") ⇒ true`

The output should be a function that accepts a pattern and a candidate string
and returns **true** or **false** if the entire candidate string matches the pattern (i.e. assume that the regex starts with a `^` and ends with a `$`)

You may use websites, books, and documentation as a reference for your language and its standard libraries, but please do not use code, documentation, or algorithms from other regular expression libraries as a reference or use those libraries directly - the algorithms, data structures, and implementation must be your own.

**Out of scope:**
* Other regex constructions such as (but not limited to):
    * Groups (`(ab)`)
    * Sets (`[ab]`)
    * The pipe operator (`(a|b)`)
    * Built-in character classes (`[:space:]`)
    * Ranges (`[a-z0-9]`)
* Matching a substring
* Detecting the position of the match (since all matches are on the full string, the matching position will always be index 0 - your code should just return `true` or `false`)
* Multiline handling - assume that neither the pattern nor the candidate string will contain any newline characters
* Escaping - assume that there is no way to escape a `?`, `*`, or `.` character in a pattern to match its literal value
