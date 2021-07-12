export function errorInput(input) {
  const box = input.parentNode;
  let message = document.createElement("p");
  message.classList.add("messageError");
  message.textContent = "Este campo no puede ir vacio";
  box.appendChild(message);
  setTimeout(function () {
    message.remove();
  }, 1000);
}


export function errorRadios() {
  const box = document.querySelector(".radioOptions");
  let message = document.createElement("p");
  message.classList.add("messageError");
  message.classList.add("radio");
  message.textContent = "Debes seleccionar un perfil";
  box.appendChild(message);
  setTimeout(function () {
    message.remove();
  }, 1000);
}
