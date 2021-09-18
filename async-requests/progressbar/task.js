const progress = document.querySelector("progress#progress");
const uploadForm = document.querySelector("form#form");
const fileInput = uploadForm.querySelector("input#file");
uploadForm.addEventListener("submit", function (event) {
    if(fileInput.value !== "") {
        const request = new XMLHttpRequest();
        request.open("POST", uploadForm.getAttribute("action"), true);
        request.setRequestHeader("Content-Type", "multipart/form-data");
        request.onload = function () {
            console.log(this.responseText);
        }
        request.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                progress.value = (event.loaded / event.total).toFixed(2);
            }
        }
        request.send(new FormData(uploadForm));
    }
    event.preventDefault();
})

