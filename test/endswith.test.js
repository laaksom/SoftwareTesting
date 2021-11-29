import { expect as _expect } from "chai";
import endswith from "../src/endsWith.js";
var expect = _expect

describe("EndsWith", () => {
    it("Finds the last character", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, 'p');
        expect(result).to.be.true;
    });
    it("Finds last characters", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, 'mn op');
        expect(result).to.be.true;
    });
    it("Finds the last character up to given position", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, ' ', 8);
        expect(result).to.be.true;
    });
    it("Finds last characters up to given position", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, 'efg ', 8);
        expect(result).to.be.true;
    });
    it("Returns false when not given the last character", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, 'a');
        expect(result).to.be.false;
    });
    it("Handles empty string with empty target", () => {
        var string = '';
        var result = endswith(string, '');
        expect(result).to.be.true;
    });
    it("Handles empty string with non-empty target", () => {
        var string = '';
        var result = endswith(string, 'a');
        expect(result).to.be.false;
    });
    it("Handles position outside range", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, 'mn op', 24);
        expect(result).to.be.true;
    });
    it("String to search for is longer than string to inspect", () => {
        var string = 'abcdefg hijklmn op';
        var result = endswith(string, 'abcdefg hijklmn opqrstu');
        expect(result).to.be.false;
    });
});