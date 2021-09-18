const sighInForm = document.querySelector("form#signin__form");
sighInForm.addEventListener("submit", function (event) {
    const request = new XMLHttpRequest();
    request.open("POST", sighInForm.getAttribute("action"), true);
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            if(response.success === false) {
                alert("Неверный логин/пароль");
            } else if(response.success === true) {
                document.querySelector("div#signin").classList.remove("signin_active");
                document.querySelector("div#welcome").classList.add("welcome_active");
                document.querySelector("span#user_id").textContent = response.user_id;
            }
        }
    }
    request.send(new FormData(sighInForm));
    event.preventDefault();
});

