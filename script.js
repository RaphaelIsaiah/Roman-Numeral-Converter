// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputMsg = document.getElementById("output");
const resultDiv = document.getElementById("result-div");

// Fuctionality to validate the user's input and convert to Roman Numeral

// No 1
const convertInput = (inputNumber) => {
  const romanNumeralValueKeys = {
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

  if (numberInput.value === "" || numberInput.value.match(/[e.]/g)) {
    outputMsg.innerText = "Please enter a valid number";
    outputMsg.classList.add("alert");
  } else {
    let userInput = parseInt(inputNumber, 10);
    // Adding the argument 10 indicates the base for parsing the integer.

    if (userInput <= 0) {
      outputMsg.innerText = "Please enter a number greater than or equal to 1";
      outputMsg.classList.add("alert");
    } else if (userInput >= 4000) {
      outputMsg.innerText = "Please enter a number less than or equal to 3999";
      outputMsg.classList.add("alert");
    } else {
      for (const key in romanNumeralValueKeys) {
        while (userInput >= romanNumeralValueKeys[key]) {
          romanNumeral += key;
          userInput -= romanNumeralValueKeys[key];
        }
      }
      outputMsg.innerText = romanNumeral;
      outputMsg.classList.remove("alert");
    }
  }

  resultDiv.classList.remove("hidden");
  console.log(`Roman numeral for ${numberInput.value} is -- ${romanNumeral}`);
};

// Implementation of convertButton functionality
convertBtn.addEventListener("click", () => {
  convertInput(numberInput.value);
});

// Implementatiion of functionality to check user input value with the enter key.
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertInput(numberInput.value);
  }
});
