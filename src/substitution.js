// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope 
  

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26){
      return false
    }
    const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const lowerCaseAlpha = alphabet.toLowerCase().split("");
    const inputArray = input.toLowerCase().split("")
    // Annoying way to create an alphabet array
    //const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    
    const uniqueCharacters = lowerCaseAlpha.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (uniqueCharacters.length !== alphabet.length) return false;
    // encodes input by taking the index of the alphabet making that index empty and replacing it with the new alphabet index. (essentially the index that matches of each  alphabet  is just switched)
    const encodeInput = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = alpha.indexOf(char);
        const encodedChar = lowerCaseAlpha[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };
    // decodes message by replacing the index of the encoded message and replaces it with the index matching that in our lower case alphabet 
    const decodeInput = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = lowerCaseAlpha.indexOf(char);
        const decodedChar = alpha[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    // with errors now handled, next decide to encode or decode.
    return encode ? encodeInput() : decodeInput();
  }
  console.log(substitution("MeHunTEr","xoyqmcgrukswaflnthdjpzibev"))
  return {
    substitution,
    
  };
})();

module.exports = { substitution: substitutionModule.substitution };
