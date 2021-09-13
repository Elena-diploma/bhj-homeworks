const windowHalfHeight = document.documentElement.clientHeight/2;
document.addEventListener("scroll", function (event) {
   event.target.querySelectorAll("div.reveal").forEach(function (element) {
       const coords = element.getBoundingClientRect();
       if(coords.y < windowHalfHeight && !element.classList.contains("reveal_active")) {
           element.classList.add("reveal_active");
       }
   });

});