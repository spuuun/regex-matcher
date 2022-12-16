import { describe, it } from 'mocha'
import { expect } from 'chai';
import matcher from '../solution/matcher.js'

// args for `matcher` function should be supplied here in order:
    // candidateString, pattern
describe('Simple test suite:', function () {
    it('ab/123 to be false', function () {
        expect(matcher("123", "ab")).to.be.false
    });

    it('ab/ab to be true', function () {
        expect(matcher("ab", "ab")).to.be.true
    });

    it('a./a to be false', function () {
        expect(matcher("a", "a.")).to.be.false
    });

    it('.a/aa to be true', function () {
        expect(matcher("aa", ".a")).to.be.true
    });

    it('aa?/a to be true', function () {
        expect(matcher("a", "aa?")).to.be.true
    });

    it('aa?/aa to be true', function () {
        expect(matcher("aa", "aa?")).to.be.true
    });

    it('ba*/b to be true', function () {
        expect(matcher("b", "ba*")).to.be.true
    });

    it('ba*b/baaaaab to be true', function () {
        expect(matcher("baaaaab", "ba*b")).to.be.true
    });

    it('a*a/aaaa to be true', function () {
        expect(matcher("aaaa", "a*a")).to.be.true
    });

    it('a.?b*cc.*/axccd to be true', function () {
        expect(matcher("axccd", "a.?b*cc.*")).to.be.true
    });

    it('a.?b*cc.*/axbbbbcc1234 to be true', function () {
        expect(matcher("axbbbbcc1234", "a.?b*cc.*")).to.be.true
    });
});
