// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");
const resultDiv = document.getElementById("result-div");

// Fuctionality to convert the user's input.

// No 1
const checkInput = () => {
  let inputInt = parseInt(number.value);

  const romanNumeralKeys = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (inputInt <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    for (const key in romanNumeralKeys) {
      while (inputInt >= romanNumeralKeys[key]) {
        romanNumeral += key;
        inputInt -= romanNumeralKeys[key];
      }
    }

    output.innerText = romanNumeral;
  }

  resultDiv.classList.remove("hidden");
  console.log(`Roman numeral for ${number.value} is -- ${romanNumeral}`);
};

// Implementation of convertButton functionality
convertBtn.addEventListener("click", checkInput);

// Implementatiion of functionality to check user input value with the enter key.
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
