import { expect as _expect } from "chai";
import slice from "../src/slice.js";
var expect = _expect

describe("Slice", () => {
    it("Cuts the array from both ends", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array, 3, 5);
        expect(result.length).to.equal(2);
        expect(result[0]).to.equal(3);
        expect(result[1]).to.equal(4);
    });
    it("Slices the array to the end", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array, 3, 7);
        expect(result.length).to.equal(4);
        expect(result[0]).to.equal(3);
        expect(result[2]).to.equal(5);
        expect(result[3]).to.equal(6);
    });
    it("Slices the array starting from first item not to the end", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array, 0, 3);
        expect(result.length).to.equal(3);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(1);
        expect(result[2]).to.equal(2);
    });
    it("Slice the entire array (should return exactly the same)", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array, 0, 7);
        expect(result.length).to.equal(7);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(1);
        expect(result[2]).to.equal(2);
        expect(result[3]).to.equal(3);
        expect(result[4]).to.equal(4);
        expect(result[5]).to.equal(5);
        expect(result[6]).to.equal(6);
    });
    it("Default parameters work correctly", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array);
        expect(result.length).to.equal(7);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(1);
        expect(result[6]).to.equal(6);
    });
    it("Handles empty array with erroneous indexes", () => {
        var array = [];
        var result = slice(array, 12,23);
        expect(result.length).to.equal(0);
        // If array is empty, returns empty array.
    });
    it("Handles null parameter in the place of array", () => {
        var array = null;
        var result = slice(array, 12,23);
        expect(result.length).to.equal(0);
    });
    it("Handles indexes outside array", () => {
        var array = [0];
        var result = slice(array, 0,23);
        expect(result.length).to.equal(23);
        expect(result[0]).to.equal(0);
        // Undefined is inserted into array when index
        // is out of range of original array
        for (let i = 1; i < result.length; i++) {
            expect(result[i]).to.equal(undefined);
          };
    });
    it("Handles negative indexes (offset from end)", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array, -3, -1);
        expect(result.length).to.equal(2);
        expect(result[0]).to.equal(4);
        expect(result[1]).to.equal(5);
    });
    it("Handles erroneous negative indexes", () => {
        var array = [0, 1, 2, 3, 4, 5, 6];
        var result = slice(array, -11, -12);
        expect(result.length).to.equal(0);
    });

});