import { expect as _expect } from "chai";
import reduce from "../src/reduce.js";
const expect = _expect

describe("Reduce", () => {
    it("The provided small example", () => {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3)
    });
    it("The provided large example", () => {
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result }, {})).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] })
    });
    it("Reduce to an empty array", () => {
        expect(reduce([], (sum, n) => sum + n, 0)).to.equal(0)
    });
});
