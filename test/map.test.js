import { expect as _expect } from "chai";
import map from "../src/map.js";
const expect = _expect

describe("Map", () => {
    it("The provided small example", () => {
        expect(map([4, 8], (n) => n * n)).to.deep.equal([16, 64])
    });
    it("Map to an empty array", () => {
        expect(map([], (n) => n * n)).to.deep.equal([])
    });
    it("Iteration doesn't work for some objects in the array", () => {
        expect(map([4, "String"], (n) => n * n)).to.deep.equal([16, NaN])
    });
});
