const Icon = document.getElementById("icon");
const menu = document.querySelector(".menu");
Icon.onclick = function() {
    menu.classList.toggle("active");
    if(menu.classList.contains("active")) {
        Icon.src = "images/close.png.png";
    } else {
        Icon.src = "images/menu.png";
    }
   
}