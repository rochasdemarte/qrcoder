document.querySelector("#website").oninput = () => {
    generateQRCode()
  }
  
  function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, {
        text: website,
        width: 256,
        height: 256,
        colorDark: "#ffd042",
        colorLight: "#131313",
        correctLevel: QRCode.CorrectLevel.H
      });
      document.getElementById("qrcode-container").style.display = "block";
    } else {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      document.getElementById("qrcode-container").style.display = "none";
    }
  }