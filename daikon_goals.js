//Photo gallery
const button = document.querySelector(".button");
const sides = document.querySelectorAll(".side");
var current = sides.length-1;
button.addEventListener("click", function(){
    sides[current].style.animation = "slide 3s";
    sides[current].style.animationFillMode = "forwards";
    current--;
    if(current < 0){
        current = sides.length-1;
        for(var i = 0; i < sides.length; i++){
            sides[i].style.animation = "none";
        }
    }
});