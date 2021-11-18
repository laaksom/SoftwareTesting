import { expect as _expect } from "chai";
import clamp from "../src/clamp.js";
var expect = _expect

describe("Clamp", () => {
    it("Increases number below range to lower limit (positive numbers)", () => {
        var result = clamp(1,5,10);
        expect(result).to.equal(5);
    });
    it("Decreases number above range to upper limit (positive numbers)", () => {
        var result = clamp(12,5,10);
        expect(result).to.equal(10);
    });
    it("Doesn't change number already in range (positive numbers)", () => {
        var result = clamp(7,5,10);
        expect(result).to.equal(7);
    });
    it("Doesn't change number already in range (negative numbers)", () => {
        var result = clamp(-7,-5,-10);
        expect(result).to.equal(-7);
    });
    it("Works when number is already at the lower limit of the range (negative numbers)", () => {
        var result = clamp(-12.2,-5,-12.2);
        expect(result).to.equal(-12.2);
    });
    it("Works when number is already at the upper limit of the range (negative numbers)", () => {
        var result = clamp(-5,-5,-12.2);
        expect(result).to.equal(-5);
    });
    it("Works when number is already at the lower limit of the range (positive numbers)", () => {
        var result = clamp(0.001, 0.001, 0.1);
        expect(result).to.equal(0.001);
    });
    it("Works when number is already at the upper limit of the range (positive numbers)", () => {
        var result = clamp(3.12, 0.0, 3.12);
        expect(result).to.equal(3.12);
    });
});