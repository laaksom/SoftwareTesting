import { expect as _expect } from "chai";
import divide from "../src/divide.js";
const expect = _expect

describe("Divide", () => {
    it("Basic divide with positive numbers", () => {
        expect(divide(4,2)).to.equal(2)
    });
    it("Divide positive number with negative number", () => {
        expect(divide(5,-2)).to.equal(-2,5)
    });
    it("Dividing negative number with positive number", () => {
        expect(divide(-1,2)).to.equal(-0,5)
    });
    it("Dividing two negative numbers", () => {
        expect(divide(-1,-2)).to.equal(0,5)
    });
});
