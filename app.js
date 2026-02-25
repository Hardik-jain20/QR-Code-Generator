//const qrApi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let image = document.querySelector("#imgBox");
let qr = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let generate = document.querySelector("#generate");

generate.addEventListener("click", () =>{
    generateQR();
});
qrText.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    generate.click();
  }
});

function generateQR(){
    if(qrText.value.length > 0){
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    image.classList.add("show-img");
    }else{
        image.classList.remove("show-img");
        // qr.src = "";
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}