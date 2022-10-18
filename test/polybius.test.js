const expect = require("chai").expect;
const {polybius, polybiusModule} = require("../src/polybius");
describe("polybius()", () => {
    it("Is a function", () => {
        expect(polybius).to.be.a("function")
    })
})
describe("polybius", () => {
    
    it("When decoding, it translates 42 to (i/j).", () => {
        
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    });
    
    it("When encoding, it translates the letters i and j to 42.", () => {

        expect(polybius("thinkfulj")).to.equal("443242335212541342")
    });
    
    it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {

        expect(polybius("Hello world")).to.equal('3251131343 2543241341');
        expect(polybius('3251131343 2543241341', false)).to.equal("hello world");
    });
    
    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        
        expect(polybius("Hello world")).to.equal('3251131343 2543241341');
    })
})


// 
