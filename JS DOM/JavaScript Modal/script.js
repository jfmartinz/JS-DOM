let modalContainer = document.querySelector(".modal");
let closeBtn = document.getElementById("closeModal");
let openBtn = document.getElementById("openModal");
var overlay = document.getElementById("overlay");


document.addEventListener("DOMContentLoaded", function() {
    openBtn.addEventListener("click", function () {
        modalContainer.style.display = "block";
        overlay.style.display = "block";
     });
     
     closeBtn.addEventListener("click", function () {
         modalContainer.style.display = "none";
         overlay.style.display = "none";
     });
     
     window.addEventListener("click", function (e) {
         if (e.target !== modalContainer && !modalContainer.contains(e.target) && e.target !== openBtn) {
             modalContainer.style.display = "none";
             overlay.style.display = "none";
         }
     });
});

