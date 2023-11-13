var navLinks = document.getElementById("navLinks");

function openMenu() {
    navLinks.style.right = "0";
}
function closeMenu() {
    navLinks.style.right = "-200px";
}
AOS.init({
    duration: 1500,
    easing: "ease",
    delay: 150,
});



