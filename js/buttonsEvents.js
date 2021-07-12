import {validateInput, validateRadios} from "./validateForm.js"
import {errorRadios} from "./errorMessages.js"
import { uploadImageCloud, copiarFirma } from "./generateFirm.js";
export function btnsShowViews() {

  const mainTitles = document.querySelector(".main__presentacion");
  const form = document.querySelector("#form");

  // vistas
  const firstView = document.getElementById("firstView");
  const secondView = document.getElementById("seconView");
  const thirdView = document.getElementById("thirdView");

  // icons
  const icons = document.querySelectorAll(".main__stepIcons .icons");

  // boton 1
  const firstNextBtn = document.getElementById("next-btn-1");
  // botones 2
  const secondNextBtn = document.getElementById("next-btn-2");
  const secondBackBtn = document.getElementById("back-btn-2");
  // botones 3
  const btnGenerateFirm = document.getElementById("next-btn-3");
  const thirdBackBtn = document.getElementById("back-btn-3");
  // boton copiar
  const btnCopy = document.getElementById("copyFirm");

  // **** eventos botones ***** 
  // 1er boton
  firstNextBtn.addEventListener("click", () => {
    const inputsFirstForm = document.querySelectorAll(".datauser input");
    const radios = document.querySelectorAll(".radioOptions input");
    let countInput = validateInput(inputsFirstForm);
    let countRadio = validateRadios(radios);

    if (countRadio == 0) {
      errorRadios();
    }
    if (countInput == inputsFirstForm.length) {
      icons[0].classList.remove("active");
      icons[1].classList.add("active");
      firstView.classList.add("active");
      secondView.classList.add("active");
      mainTitles.querySelector("h2").textContent = contextViews.secondView.h2;
      mainTitles.querySelector("p").textContent = contextViews.secondView.p;
    } 
    
  });
  // 2do boton
  secondBackBtn.addEventListener("click", () => {
    mainTitles.querySelector("h2").textContent = contextViews.firstView.h2;
    mainTitles.querySelector("p").textContent = contextViews.firstView.p;
    icons[0].classList.add("active");
    icons[1].classList.remove("active");
    firstView.classList.remove("active");
    secondView.classList.remove("active");
  });

  secondNextBtn.addEventListener("click",() =>{

    let inputsSecondForm = document.querySelectorAll(".datasocialContainer.active input");
    let countSecondInput = validateInput(inputsSecondForm);
    if (countSecondInput == inputsSecondForm.length) {
      mainTitles.querySelector("h2").textContent = contextViews.ThirdView.h2;
      mainTitles.querySelector("p").textContent = contextViews.ThirdView.p;
      icons[1].classList.remove("active");
      icons[2].classList.add("active");
      secondView.classList.remove("active");
      thirdView.classList.add("active");
      form.classList.add("active");
    }

  })
  // tercer boton
  thirdBackBtn.addEventListener("click", () => {
    mainTitles.querySelector("h2").textContent = contextViews.secondView.h2;
    mainTitles.querySelector("p").textContent = contextViews.secondView.p;
    icons[1].classList.add("active");
    icons[2].classList.remove("active");
    secondView.classList.add("active");
    thirdView.classList.remove("active");
    form.classList.remove("active");
  });
  // boton 4 : Generar firma y subirla a un servidor en la nube
  btnGenerateFirm.addEventListener("click", ()=>{
    let imageUploadFile = document.querySelector(".userImage");
    if(imageUploadFile.src == ""){
      showFileImageError();
    } else {
      icons[0].classList.add("sucess");
      icons[1].classList.add("sucess");
      icons[2].classList.remove("active");
      icons[2].classList.add("sucess");
      thirdView.classList.remove("active");
      uploadImageCloud(imageUploadFile);
    }
  });
  // boton para copiar la firma
  btnCopy.addEventListener("click", ()=>{
    copiarFirma(); 
  });
}


const contextViews = {
  firstView: {
    h2: "Completa la información de tu firma",
    p: "Estos datos serán los que verán las personas que reciban tus mails",
  },
  secondView: {
    h2: "Redes Sociales",
    p: "Define un estilo para tu firma",
  },
  ThirdView: {
    h2: "Agrega tu foto",
    p: "Si quieres cambiar tu foto haz click en la imagen y sube una nueva.",
  },
};

const showFileImageError = () => {
  let messageFileError = document.querySelector("#thirdView p");
  messageFileError.classList.add("active");
  setTimeout(function () {
    messageFileError.classList.remove("active");
  }, 2000);
}