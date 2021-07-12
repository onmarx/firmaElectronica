import { classListObject } from "./socialObject.js";

export function initBtns() {
  // buttons socials medias
  let youtubeButton = document.getElementById("youtubeButton"),
    facebookButton = document.getElementById("facebookButton"),
    instagramButton = document.getElementById("instagramButton"),
    twitterButton = document.getElementById("twitterButton"),
    whatsappButton = document.getElementById("whatsappButton"),
    linkedinButton = document.getElementById("linkedinButton"),
    gitlabButton = document.getElementById("gitlabButton"),
    githubButton = document.getElementById("githubButton"),
    websiteButton = document.getElementById("websiteButton");

  let countYoutube = 0,
    countFacebook = 0,
    countInstagram = 0,
    countTwitter = 0,
    countWhatsapp = 0,
    countLinkedin = 0,
    countGitlab = 0,
    countGithub = 0,
    countWebSite = 0;

  // event listener buttons socials
  youtubeButton.addEventListener("click", () => {
    countYoutube++;
    countYoutube === 1
      ? (addInputSocials(".youtubeSocial"),
        youtubeButton.classList.add("active"),
        addSocialFirm(".youtubeSocial"),
        changeMessageSocials())
      : (removeInputSocials(".youtubeSocial"),
        (countYoutube = 0),
        removeSocialFirm(".youtubeSocial"),
        youtubeButton.classList.remove("active"),
        changeMessageSocials());
  });

  facebookButton.addEventListener("click", () => {
    countFacebook++;
    countFacebook === 1
      ? (addInputSocials(".facebookSocial"),
        facebookButton.classList.add("active"),
        addSocialFirm(".facebookSocial"),
        changeMessageSocials())
      : (removeInputSocials(".facebookSocial"),
        (countFacebook = 0),
        removeSocialFirm(".facebookSocial"),
        facebookButton.classList.remove("active"),
        changeMessageSocials());
  });

  instagramButton.addEventListener("click", () => {
    countInstagram++;
    countInstagram === 1
      ? (addInputSocials(".instagramSocial"),
        instagramButton.classList.add("active"),
        addSocialFirm(".instagramSocial"),
        changeMessageSocials())
      : (removeInputSocials(".instagramSocial"),
        (countInstagram = 0),
        removeSocialFirm(".instagramSocial"),
        instagramButton.classList.remove("active"),
        changeMessageSocials());
  });

  twitterButton.addEventListener("click", () => {
    countTwitter++;
    countTwitter === 1
      ? (addInputSocials(".twitterSocial"),
        twitterButton.classList.add("active"),
        addSocialFirm(".twitterSocial"),
        changeMessageSocials())
      : (removeInputSocials(".twitterSocial"),
        (countTwitter = 0),
        removeSocialFirm(".twitterSocial"),
        twitterButton.classList.remove("active"),
        changeMessageSocials());
  });

  whatsappButton.addEventListener("click", () => {
    countWhatsapp++;
    countWhatsapp === 1
      ? (addInputSocials(".whatsappSocial"),
        whatsappButton.classList.add("active"),
        addSocialFirm(".whatsappSocial"),
        changeMessageSocials())
      : (removeInputSocials(".whatsappSocial"),
        (countWhatsapp = 0),
        removeSocialFirm(".whatsappSocial"),
        whatsappButton.classList.remove("active"),
        changeMessageSocials());
  });

  linkedinButton.addEventListener("click", () => {
    countLinkedin++;
    countLinkedin === 1
      ? (addInputSocials(".linkedinSocial"),
        linkedinButton.classList.add("active"),
        addSocialFirm(".linkedinSocial"),
        changeMessageSocials())
      : (removeInputSocials(".linkedinSocial"),
        (countLinkedin = 0),
        removeSocialFirm(".linkedinSocial"),
        linkedinButton.classList.remove("active"),
        changeMessageSocials());
  });

  gitlabButton.addEventListener("click", () => {
    countGitlab++;
    countGitlab === 1
      ? (addInputSocials(".gitlabSocial"),
        gitlabButton.classList.add("active"),
        addSocialFirm(".gitlabSocial"),
        changeMessageSocials())
      : (removeInputSocials(".gitlabSocial"),
        (countGitlab = 0),
        removeSocialFirm(".gitlabSocial"),
        gitlabButton.classList.remove("active"),
        changeMessageSocials());
  });

  githubButton.addEventListener("click", () => {
    countGithub++;
    countGithub === 1
      ? (addInputSocials(".githubSocial"),
        githubButton.classList.add("active"),
        addSocialFirm(".githubSocial"),
        changeMessageSocials())
      : (removeInputSocials(".githubSocial"),
        (countGithub = 0),
        removeSocialFirm(".githubSocial"),
        githubButton.classList.remove("active"),
        changeMessageSocials());
  });

  websiteButton.addEventListener("click", () => {
    countWebSite++;
    countWebSite === 1
      ? (addInputSocials(".websiteSocial"),
        websiteButton.classList.add("active"),
        addSocialFirm(".websiteSocial"),
        changeMessageSocials())
      : (removeInputSocials(".websiteSocial"),
        (countWebSite = 0),
        removeSocialFirm(".websiteSocial"),
        websiteButton.classList.remove("active"),
        changeMessageSocials());
  });


  // ****** FUNCCIONES ****************/
  // handle active social inputs
  function addInputSocials(classSocial) {
    let classSocialInput = document.querySelector(classSocial);
    classSocialInput.classList.add("active");
  }
  function removeInputSocials(classSocial) {
    let classSocialInput = document.querySelector(classSocial);
    let inputTextSocial = classSocialInput.querySelector("input");
    inputTextSocial.value = "";
    classSocialInput.classList.remove("active");
  }

  // agregar  remover las imagenes con los links a la tabla de firmas
  function addSocialFirm(classSocial) {
    // objeto para generar los iconos
    let inputTextSocial = document
      .querySelector(classSocial)
      .querySelector("input");

    if (classSocial == ".websiteSocial") {
      let contactContainer = document.querySelector(".userContactContainer");
      let contactGlobe = document.createElement("div");
      contactGlobe.classList.add("contact");
      contactGlobe.classList.add("website");

      contactGlobe.innerHTML = `
        <img src='assets/socialMedias/${classListObject[classSocial].name}.svg' class="globe-image">
        <p class="globe-direction"></p>
      `;
      contactContainer.appendChild(contactGlobe);
      inputTextSocial.addEventListener("keyup", (e) => {
        let handlerp = document.querySelector(".globe-direction");
        handlerp.innerHTML = e.target.value;
      });
    } else {
      let userInfoFooter = document.querySelector(".userInfoFooter");
      // crear el link con su clase
      let link = document.createElement("a");
      link.classList.add("containerRedirectSocial");
      link.classList.add(`socialRedirect-${classListObject[classSocial].name}`);
      // agregas la ruta a direccionar y que sea en otra pagina
      link.href = "";
      link.target = "_blank";
      // agregas el icono
      link.innerHTML = `
      <img src='assets/socialMedias/${classListObject[classSocial].name}.svg'>
      `;
      userInfoFooter.appendChild(link);
      inputTextSocial.addEventListener("keyup", (e) => {
        let handdlerLink = document.querySelector(
          `.socialRedirect-${classListObject[classSocial].name}`
        );
        handdlerLink.href = classListObject[classSocial].uri + e.target.value;
      });
    }
  }

  function removeSocialFirm(classSocial) {
    if(classSocial == ".websiteSocial"){
      let div = document.querySelector(".contact.website");
      div.remove();
    } else  {
      let div = document.querySelector(
        `.socialRedirect-${classListObject[classSocial].name}`
      );
      div.remove();
    }
  }


  // function para ocultar y mostrar el mensaje si hay o no botones
  function changeMessageSocials() {
    let SocialButtonsContainer = document.querySelectorAll(
      ".datasocialContainer.active"
    );
    let messageSocial = document.querySelector(".messageSocial");
    let lengthButtons = SocialButtonsContainer.length;
    lengthButtons == 0
      ? (messageSocial.style.display = "block")
      : (messageSocial.style.display = "none");
  }
}
