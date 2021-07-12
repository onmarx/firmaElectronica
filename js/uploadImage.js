// Change the image from the firm
export function uploadImage() {
  let inputImage = document.querySelector("#fileImage");
  inputImage.addEventListener("change", function () {
    let userImage = document.querySelector(".userImage");
    let file = this.files[0];
    let render = new FileReader();
    render.onload = function () {
      userImage.src = render.result;
    }
    if (file) {
      render.readAsDataURL(file);
      userImage.style.background = "none";
    }  
  });
}


