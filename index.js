let numbers = document.querySelectorAll(".number")
let screenInput = document.querySelector(".screen-input")

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        let buttonText = number.innerHTML
        screenInput.value +=  buttonText
    })
})

let operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        let value = operator.innerHTML;
        if (value === "=") {
            const result = eval(screenInput.value);
            screenInput.value = result;
          } else if (value === "c") {
            screenInput.value = " ";
          }
         
          else {
            screenInput.value += value;
          }
        /*screenInput.value += " " + operatorText + " "; */
    });
});
/*
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const screenInput = document.querySelector(".screen-input");

for (let i = 0; i < 10; i++) {
  const num = numbers[i];
  num.addEventListener("click", () => {
    const value = num.innerHTML;
    screenInput.value = screenInput.value + value;
  });
}

for (let i = 0; i < 10; i++) {
  const operator = operators[i];
  operator.addEventListener("click", () => {
    const value = operator.innerHTML;

    if (value === "=") {
      const result = eval(screenInput.value);
      screenInput.value = result;
    } else if (value === "C") {
      screenInput.value = "";
    } else {
      screenInput.value += value;
    }
  });
}
*/



// Write the loop for the operators
// Read on the eval() function and use that to complete the project