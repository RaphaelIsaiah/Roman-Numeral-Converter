// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputMsg = document.getElementById("output");
const resultDiv = document.getElementById("result-div");

// Conversion to Roman Numeral Functionality.
const romanConversion = (num) => {
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

  for (const key in romanNumeralValueKeys) {
    while (num >= romanNumeralValueKeys[key]) {
      romanNumeral += key;
      userInput -= romanNumeralValueKeys[key];
    }
  }

  return romanNumeral;
};

// Validation of Input Functionality
const validInput = (str, int) => {
  let errorMsg = "";
  const maxInputValue = 4000;
  const maxRomanNumeral = 3999;

  if (!str || str.match(/[e.]/g)) {
    errorMsg = "Please enter a valid number";
  } else if (int <= 0) {
    errorMsg = "Please enter a number greater than or equal to 1";
  } else if (int >= maxInputValue) {
    errorMsg = `Please enter a number less than or equal to ${maxRomanNumeral}`;
  } else {
    // No errors detected
    return true;
  }

  // Updates the UI based on the result of validation
  outputMsg.innerText = errorMsg;
  outputMsg.classList.add("error");

  return false;
};

// Removal of Error Styling functionality.
const removeError = () => {
  outputMsg.innerText = "";
  outputMsg.classList.remove("error");
};

// Handling user input functionality.
const handleUserInput = () => {
  const userInput = numberInput.value;
  const intInput = parseInt(userInput, 10);

  resultDiv.classList.remove("hidden");

  // Removes the error class if it was previously added or present.
  removeError();

  if (validInput(userInput, intInput)) {
    outputMsg.innerText = convertToRoman;
  }
};

// ----- Event Triggers ------
// Implementing convert button functionality
convertBtn.addEventListener("click", () => {
  handleUserInput();
});

// Implementing use of Enter Key functionality
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleUserInput();
  }
});
