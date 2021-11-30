import { expect as _expect } from "chai";
import every from "../src/every.js";
var expect = _expect

describe("Every", () => {
    it("Returns true for array containing only true values", () => {
        var array = [true, 1, 1, '1'];
        var result = every(array, Boolean);
        expect(result).to.be.true;
    });
    it("Returns false for array containing only false values", () => {
        var array = [false, 0, 0, ''];
        var result = every(array, Boolean);
        expect(result).to.be.false;
    });
    it("Returns false for array containing true and false values", () => {
        var array = [true, 1, 1, ''];
        var result = every(array, Boolean);
        expect(result).to.be.false;
    });
    it("Works for own functions (all are true). Also tests arrays with different types", () => {
        function isFive(number) {
            return number == 5 || number == 'five' || number == 'Five';;
        }
        var array = [5, 5, 5, 5, 5, 'five', 'Five', 5, 5.0, 5.0];
        var result = every(array, isFive);
        expect(result).to.be.true;
    });
    it("Works for own functions (some are false). Also tests arrays with different types", () => {
        function isFive(number) {
            return number == 5 || number == 'five' || number == 'Five';
        }
        var array = [5, 5, 5, 5, 4, 5, 5.001, 5.0, 'five', 'Five', 'four'];
        var result = every(array, isFive);
        expect(result).to.be.false;
    });
    it("Works when array contains arrays", () => {
        function isLength2(array) {
            return array.length == 2;
        }
        var array = [ [3, 5], [5, 6], [1, 2], [5.001, 5.0] ];
        var result = every(array, isLength2);
        expect(result).to.be.true;
    });
    it("Works with empty array (Vacuous truth)", () => {
        var array = [];
        var result = every(array, Boolean);
        expect(result).to.be.true;
    });
    it("Works when predicate function returns other than true/false", () => {
        function getUnclearValues(number) {
            if (number == 0) {
                return undefined;
            }
            else if(number == 1) {
                return null;
            }
            else if (number == 2) {
                return 'yes';
            }
            else if ( number == 3) {
                return '';
            }
            return true
        }
        var array = [0, 1, 2, 3, 4];
        var result = every(array, getUnclearValues);
        expect(result).to.be.false;
    });
    it("Works with null array", () => {
        var array = null;
        var result = every(array, Boolean);
        expect(result).to.be.true;
    });
});