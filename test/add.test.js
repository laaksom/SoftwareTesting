import { expect as _expect } from "chai";
import add from "../src/add.js";
const expect = _expect

describe("Add", () => {
    it("Basic add with small positive numbers", () => {
        expect(add(1,2)).to.equal(3)
    });
    it("Adding two small negative numbers", () => {
        expect(add(-1,-2)).to.equal(-3)
    });
    it("Adding a positive number to a negative number", () => {
        expect(add(1,-2)).to.equal(-1)
    });
    it("Adding zero to a positive number", () => {
        expect(add(0,1)).to.equal(1)
    });
    it("Adding zero to a negative number", () => {
        expect(add(0,-2)).to.equal(-2)
    });
});
