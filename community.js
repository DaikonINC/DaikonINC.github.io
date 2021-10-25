//Nav bar
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile");
hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
});
//^Nav bar^


$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() <= 50) {
        $("nav").css("background-color", "transparent");
        $("nav").css("border-bottom", "0px solid white");
        $(".container").css("height", "8vh");
    } else {
        $("nav").css("background-color", "var(--dgreen)");
        $("nav").css("border-bottom", "1px solid white");
        $(".container").css("height", "max(40px, 10vh)");
    }
    $(".mobile").css("border-bottom", "1px solid white");
});

//questionnaire
function openquestionnaire() {
  window.open("community_questionnaire.html");
}