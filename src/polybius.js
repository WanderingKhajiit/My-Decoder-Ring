// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //global variables
    let square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
    let output = [];
    // encoding
    if (encode) {
      let inputArray = input.split("");
      // newArray:
        // replaces any "i" or "j" in the input string to be "(i/j)" to conform to square
        // makes all letters lowercase.
     
      let newArray = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });

      // Finds X and Y coordinates
      let xArr = [];
      let yArr = newArray.map((letter) => {
        for (let i = 0; i < square.length; i++) {
          let row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
            xArr.push(i + 1);
            // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
            return row.indexOf(letter) + 1;
          }
        }
      });

      // adds x-coordinate and y-coordinate arrays together 
      output = xArr.reduce((acc, xValue, index) => {
        let pair = `${yArr[index]}${xValue}`;
        // converts numeric representation of a space back to " ".
        if (pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    // decoding
    if (!encode) {
      let spacesAdded = input.replace(" ", 65);
      // checks that there are an even number of characters so that all coordinate pairs are kept together
      if (spacesAdded.length % 2 !== 0) return false;
      let coordinates = spacesAdded.match(/..?/g);
      output = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return square[rowIndex][columnIndex];
      });
    }
    // output
    return output.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
