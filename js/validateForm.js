import { errorInput } from "./errorMessages.js";
export function validateRadios(radios) {
  let count = 0;
  radios.forEach((radio) => {
    if (radio.checked) {
      count++;
    }
  });
  return count;
}

export function validateInput(inputs) {
  let count = 0;
  inputs.forEach((input) => {
    if (input.value.trim() == "") {
      errorInput(input);
    } else {
      count++;
    }
  });
  return count;
}

