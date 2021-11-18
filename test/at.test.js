import { expect as _expect } from "chai";
import at from "../src/at.js";
var expect = _expect

describe("At", () => {
    it("Finds existing items from simple datastructure", () => {
        var object = { 'a': [1, 'A'], 'b': [2, 'B'] };
        var result = at(object, [ 'a[1]', 'b[0]' ] );
        expect(result[0]).to.equal('A');
        expect(result[1]).to.equal(2);
    });
    it("Handles index out of range", () => {
        var object = { 'a': [1, 'A'], 'b': [2, 'B'] };
        var result = at(object, [ 'a[2]', 'b[0]' ] );
        expect(result[0]).to.equal(undefined);
        expect(result[1]).to.equal(2);
        expect(result.length).to.equal(2);
    });
    it("Finds item in a complex datastructure", () => {
        var object = { 'a': [{ 'a1': 1, 'a2': ['A1', 'A2', 'A3', {'AA': ['AA1', -12.32, 3.14]}]}], 'b': [2, 'B'] };
        var result = at(object, [ 'a[0].a2[3].AA[2]', 'b[0]', 'a[0].a2[2]' ] );
        expect(result[0]).to.equal(3.14);
        expect(result[1]).to.equal(2);
        expect(result[2]).to.equal('A3');
    });
    it("Handles empty object", () => {
        var object = [];
        var result = at(object, [ '[0]' ] );
        expect(result[0]).to.equal(undefined);
        expect(result.length).to.equal(1);
    });

});