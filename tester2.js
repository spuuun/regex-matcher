const {describe, it} = require('mocha');
const expect = require('chai');



describe('Simple test suite:', function() {
    it('ab/123 should be false', function() {
        expect(matcher("ab", "123")).to.be.false
        // matcher("ab", "ab") ⇒ true
        // matcher("a.", "a") ⇒ false
        // matcher(".a", "aa") ⇒ true
        // matcher("aa?", "a") ⇒ true
        // matcher("aa?", "aa") ⇒ true
        // matcher("ba*", "b") ⇒ true
        // matcher("ba*b", "baaaaab") ⇒ true
        // matcher("a*a", "aaaa") ⇒ true
        // matcher("a.?b*cc.*", "axccd") ⇒ true
        // matcher("a.?b*cc.*", "axbbbbcc1234") ⇒ true        
    });
});
