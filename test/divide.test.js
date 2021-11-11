import { expect as _expect } from "chai";
import divide from "../src/divide.js";
const expect = _expect

describe("Divide", () => {
    it("Basic divide with positive numbers", () => {
        expect(divide(4,2)).to.equal(2)
    });
    it("Divide with positive numbers to check the remainder", () => {
        expect(divide(5,2)).to.equal(2,5)
    });
    it("Dividing two negative numbers", () => {
        expect(divide(-1,-2)).to.equal(0,5)
    });
});
