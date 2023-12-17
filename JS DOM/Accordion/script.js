const accordions = document.querySelectorAll(".accordion");


let i = 0
for (i; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function(){
        this.classList.toggle('active');
    })
}