const sighInForm = document.querySelector("form#signin__form");
const userIdSpan = document.querySelector("span#user_id");

const userId = localStorage.getItem("user_id");

if(userId != null) {
    hideAuthForm();
    userIdSpan.textContent = userId;
} else {
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
                    localStorage.setItem("user_id", response.user_id);
                    userIdSpan.textContent = response.user_id;
                    hideAuthForm();
                }
            }
        }
        request.send(new FormData(sighInForm));
        event.preventDefault();
    });
}

function hideAuthForm() {
    document.querySelector("div#signin").classList.remove("signin_active");
    document.querySelector("div#welcome").classList.add("welcome_active");
}

