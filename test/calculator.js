const { add, sub, mul, div } = require("../app/calculator");
var expect = require("chai").expect;

describe("Calculator tester", () => {
    describe("Addition test", () => {
        it("calculates the correct value", () => {
            var addition = add(5,2);
            expect(addition).to.equal(7);

            expect(addition).to.equal(8);
        })
    })
    describe("Subtraction test", () => {
        it("calculates the correct value", () => {
            var subtraction = sub(5,2);
            expect(subtraction).to.equal(3);
            
            expect(subtraction).to.equal(5);
        })
    })
    describe("Multiplication test", () => {
        it("calculates the correct value", () => {
            var multi = mul(5,2);
            expect(multi).to.equal(10);

            expect(multi).to.equal(12);
        })
    })
    describe("Dividing test", () => {
        it("calculates the correct value", () => {
            var divide = div(10,2);
            expect(divide).to.equal(5);

            expect(divide).to.equal(2);
        })
    })
})