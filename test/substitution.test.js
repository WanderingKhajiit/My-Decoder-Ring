// Write your tests here!
const expect = require("chai").expect;
const {substitutionModule, substitution} = require("../src/substitution");

describe("substitution()", () => {
  it("should be a function", () => {
    expect(substitution).to.be.a("function");
  })
})
describe("substitution", () => {
  it("returns false if the alphabet given doesnt have an exactly 26 characters", () => {
    const input = "thinkful";
    const alphabet = "short";
     expect(substitution(input, alphabet)).to.be.false;
  });
  it("returns correct message", () => {
    
    expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
  })
  it("returns false if there are duplicate characters", () =>{
    
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
  })
  
  it("it maintains spaces in the message", () => {
    const input = "You are an excellent spy";
    
    expect(substitution(input, "xoyqmcgrukswaflnthdjpzibev")).to.equal('elp xhm xf mbymwwmfj dne')
  })
})
