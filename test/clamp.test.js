import { expect as _expect } from "chai";
import clamp from "../src/clamp.js";
const expect = _expect

describe("Clamp", () => {
    it("Increases number below range to lower limit", () => {
        var result = clamp(1,5,10);
        expect(result).to.equal(5);
    });
    it("Decreases number above range to upper limit", () => {
        var result = clamp(12,5,10);
        expect(result).to.equal(10);
    });
    it("Doesn't change number already in range", () => {
        var result = clamp(7,5,10);
        expect(result).to.equal(7);
    });
});