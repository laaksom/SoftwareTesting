import { expect as _expect } from "chai";
import filter from "../src/filter.js";
const expect = _expect

describe("Filter", () => {
    it("The provided example of filtering", () => {
        let users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
    });
    it("Filter empty array", () => {
        let users = []
        expect(filter(users, ({ active }) => active)).to.deep.equal([])
    });
    it("The predicate doesn't match with the array", () => {
        let users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ online }) => online)).to.deep.equal([])
    });
});
