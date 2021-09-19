const editor = document.querySelector("textarea#editor");
const clearButton = document.querySelector("button#clear");

editor.addEventListener("keyup", function (event) {
    localStorage.setItem("editorText", editor.value);
});

clearButton.addEventListener("click", function (event) {
    editor.textContent = "";
    localStorage.removeItem("editorText");
})

editor.textContent = localStorage.getItem("editorText");
