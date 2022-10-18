// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar()", () => {
  let input = "Hunter Perkins";
  
  it("is a function", () => {
    expect(caesar).to.be.a("function");
  });
  it("returns false for invalid values", () => {
    let shiftValues = [0, 26, -26, undefined, null];
    const actual = shiftValues.every((shift) => {
      return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });
  it("returns a result if all values are valid", () => {
   let shiftValues = [3, 25, -25, 1, -1, 5];
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  })
});

describe("encoded", () => {
  it("encodes 'Hunter Perkins', shift = 5", () => {
    const expected = "mzsyjw ujwpnsx";
    const actual = caesar('Hunter Perkins', 5);
    expect(actual).to.equal(expected);
  })
});

describe("decoded", () => {
  it("properly shifts message by 3 when decoding", () => {
    const expected = "thinkful";
    let actual = caesar("wklqnixo", 3, false);
    
    expect(actual).to.equal(expected)
  })
})
