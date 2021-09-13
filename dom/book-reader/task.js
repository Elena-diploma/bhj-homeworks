let fontSwitchers = document.querySelectorAll("a.font-size");
let book = document.querySelector("div.book__content");

fontSwitchers.forEach((item) => {
   item.addEventListener("click", (event) => {
       fontSwitchers.forEach((el) => el.classList.remove("font-size_active"));
       const fontSize = item.getAttribute("data-size");
       switch (fontSize) {
           case "big":
               book.classList.remove("book_fs-small");
               book.classList.add("book_fs-big");
               break;
           case "small":
               book.classList.add("book_fs-small");
               book.classList.remove("book_fs-big");
               break;
           default:
               book.classList.remove("book_fs-small");
               book.classList.remove("book_fs-big");
       }
       item.classList.add("font-size_active");
       event.preventDefault();
   });
});