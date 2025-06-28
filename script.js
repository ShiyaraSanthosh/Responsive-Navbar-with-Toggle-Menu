const Icon = document.getElementById("icon");
const menu = document.querySelector(".menu");
Icon.onclick = function() {
    menu.classList.toggle("active");
    if(menu.classList.contains("active")) {
        Icon.src = "images/close.png.png";
        Icon.classList.add("close_button");
    } else {
        Icon.src = "images/menu.png";
        Icon.classList.remove("close_button");
    }
   
}