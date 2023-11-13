let scrollContainer = document.getElementById("gallery");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
nextBtn.style.cursor = "pointer";
prevBtn.style.cursor = "pointer";
nextBtn.addEventListener("click", () => {
    let cardWidth = document.querySelector('.gallery-col').offsetWidth;
    scrollContainer.scrollLeft += cardWidth;
});
prevBtn.addEventListener("click", () => {
    let cardWidth = document.querySelector('.gallery-col').offsetWidth;
    scrollContainer.scrollLeft -= cardWidth;
});
