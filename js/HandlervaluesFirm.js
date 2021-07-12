// Change the name input value on a table firm
export function showInputFirm(){
  // select the inputs
  const inputName = document.getElementById("nameUser"),
    descriptionUser = document.getElementById("descriptionUser"),
    phoneUser = document.getElementById("phoneUser"),
    ubicationUser = document.getElementById("ubicationUser");

  // **** EVENTS INPUTS ***** 
  // input name
  inputName.addEventListener("keyup", (e) => {
    let nameTable = document.querySelector("#nameUserTable");
    nameTable.innerHTML = e.target.value;
  });
  // input description
  descriptionUser.addEventListener("keyup", (e) => {
    let descriptionTable = document.querySelector("#workDescriptionTable");
    descriptionTable.innerHTML = e.target.value;
  });
  // input phone number
  phoneUser.addEventListener("keyup", (e) => {
    let phoneTable = document.querySelector(".contact #phone");
    phoneTable.innerHTML = e.target.value;
  });
  // input contact
  ubicationUser.addEventListener("keyup", (e) => {
    let cityTable = document.querySelector(".contact #city");
    cityTable.innerHTML = e.target.value;
  });

  // input profession
  let inputRadio = document.querySelectorAll("input[type='radio']");
  inputRadio.forEach((input) => {
    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        let professionUser = document.querySelector("#profesionUser");
        professionUser.innerHTML = e.target.value;
      }
    });
  });
}





