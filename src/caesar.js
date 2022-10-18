// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // encode array of characters (letters in this case) and lowercasing them all by their char code (unicode character codes)
  function utfEncode(array){
    return array.map((character) => {
      let encode = character.toLowerCase().charCodeAt();
      return encode >= 97 && encode <= 122 ? encode : character;
          });
      }
    
  const caesar = (input, shift, encode = true) => {
    // your solution code here
      
    if(shift > 25 || shift < -25 || !shift){
      return false;
      }
    // inverts the shift if we arent encoding
    if (encode === false) {
      shift = shift * -1;
    }
    let inputArray = input.split("");
    let inputNumbers = utfEncode(inputArray);

    // applies shift only to valid characters, which excludes spaces
    let shifted = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // loop correction handles case where the shift goes left of "a" or right of "z"
    let loopCorrectedNumbers = shifted.map((number) => {
      if (typeof number === "number") {
        // shifts to the end of alphabet
        if (number < 97) {
          return number + 26;
        }
        // shifts to beggining
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    // converts unicode back into a string for the resulting output
    let outputArray = loopCorrectedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputArray.join("");
  
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };