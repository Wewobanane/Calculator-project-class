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




// Write the loop for the operators
// Read on the eval() function and use that to complete the project