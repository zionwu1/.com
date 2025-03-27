// Simple JavaScript for auto-scrolling carousel
const carousel = document.querySelector('.carousel');
let scrollPosition = 0;

function scrollCarousel() {
    scrollPosition += 220; // adjust the scroll distance based on image width
    if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
        scrollPosition = 0; // reset scroll position when it reaches the end
    }
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Scroll the carousel every 3 seconds
setInterval(scrollCarousel, 3000);
function openModal(thumbnail) {
    var modal = document.getElementById("fullscreenModal");
    var modalImg = document.getElementById("fullScreenImage");
    
    // Get the image source of the clicked thumbnail and display it in the modal
    modalImg.src = thumbnail.querySelector("img").src;
    
    // Display the modal
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
}
