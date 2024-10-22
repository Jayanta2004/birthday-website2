let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function openGift() {
    document.querySelector('.message').style.display = 'block';
    document.querySelector('.gift-box').style.display = 'none';
}

// Optional: Auto-rotate slideshow images every 4 seconds
function rotateImages() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(rotateImages, 4000);
