const modal = document.querySelector("div#subscribe-modal");
const modalCloseButton = modal.querySelector("div.modal__close");

modalCloseButton.addEventListener("click", function (event) {
   modal.classList.remove("modal_active");
   setCookie("dontShowModal", 1);
});

if(!document.cookie.includes("dontShowModal")) {
    modal.classList.add("modal_active");
}


// устанавливает cookie
function setCookie(name, value, props) {

    props = props || {}

    let exp = props.expires

    if (typeof exp == "number" && exp) {

        let d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    let updatedCookie = name + "=" + value

    for(let propName in props){

        updatedCookie += "; " + propName

        let propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

}
