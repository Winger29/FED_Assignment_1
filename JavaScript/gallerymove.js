document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;

    window.moveGallery = (direction) => {
        console.log('moveGallery called with direction:', direction);

        const gallery = document.querySelector(".galleryimages");
        const images = document.querySelectorAll(".galleryimages img");
        const totalImages = images.length;

        if (totalImages === 0) {
            console.error("No images found in the gallery.");
            return;
        }

        // calculation for the wrapping
        currentIndex = (currentIndex + direction + totalImages) % totalImages;

        
        const offset = currentIndex * images[0].clientWidth;
        gallery.style.transform = `translateX(-${offset}px)`;
    };
});
