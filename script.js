let buttons = document.querySelectorAll("button");
let display = document.querySelector('#display');
let output = "";
let specialChars = ['%','*','/','-','+','=']

// Add event listner to buttons, call calculate() on click
Array.from(buttons).forEach((button) => {
  //Button click listner calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => {
    calculate(e.target.innerHTML);
  });
});


function calculate (btnValue) {

  if (btnValue === "=" && btnValue !== '') {
    //If output has % , replace with '/100' before evaluating
    output = eval(output.replace('%','/100'));

  } else if (btnValue === "AC") {
    output = "";

  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output
    // output = output.substring(0, output.length - 1);
    output = output.toString().slice(0,-1);

  } else {
    //If output is empty and button is specialChars then return 
    if(output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
    
  }
  display.value = output;
}
