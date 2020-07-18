const Math = require('../math');
const assert = require('assert');
const expect = require('chai').expect;

describe("Math Class", function(){
    it("Sum two numbers", function(){
        const math = new Math();
        assert.equal(math.sum(5, 5), 10)
    })

    it("Filter array", function(){
        const math = new Math();
        expect(math.filterArray([1, 6, 1, 3, 5, 6, 9])).to.deep.equal([ 1, 6, 3, 5, 9]);
    })
})