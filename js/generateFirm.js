export async function uploadImageCloud(imageFile) {
  const fourtView = document.getElementById("fourthView");
  const messageContext = document.querySelector("#fourthView p");
  const containerBtn = document.getElementById("lastStep");

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dripiece/image/upload";

  const CLOUDINARY_UPLOAD_PRESETS = "uckii5nd";
  const formData = new FormData();
  formData.append("file", imageFile.src);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESETS);

  const resp = await axios.post(CLOUDINARY_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress(e) {
      const progress = (e.loaded * 100) / e.total;
      if (progress >=0 && progress < 100){
        fourtView.classList.add("active");
        messageContext.textContent = "Generando Firma....."
      }
      if (progress == 100) {
        setTimeout(function () {
          let inputImage = document.getElementById("fileImage");
          inputImage.remove();
          messageContext.textContent =
            "Tu firma ha sido generada exitosamente!!";
          containerBtn.classList.add("active");
        }, 1000);
      }
    }
  });
  imageFile.src = resp.data.secure_url;
}

export function copiarFirma() {
  let el = document.querySelector(".FirmTable");
  var body = document.body,
    range,
    sel;

  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
    document.execCommand("copy");
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    range.execCommand("Copy");
  }
}
