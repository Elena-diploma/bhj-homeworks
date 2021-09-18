const modal = document.querySelector("div#subscribe-modal");
const modalCloseButton = modal.querySelector("div.modal__close");
const isNeedToShowModal = getCookie("dontShowModal");
console.log(isNeedToShowModal);
modalCloseButton.addEventListener("click", function (event) {
   modal.classList.remove("modal_active");
   setCookie("dontShowModal", 1);
});

if(isNeedToShowModal === undefined) {
    modal.classList.add("modal_active");
}

// возвращает cookie если есть или undefined
function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

// устанавливает cookie
function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
console.log(updatedCookie);
    document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {

    setCookie(name, null, { expires: -1 })

}
