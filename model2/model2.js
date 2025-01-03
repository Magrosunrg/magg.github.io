const images = Array.from({ length: 360 }, (_, i) => `${String(i + 1).padStart(4, '0')}.jpg`);

let currentIndex = 0;
let prevMouseX = null;

const imageContainer = document.querySelector('.image-container');

const preloadedImages = [];
images.forEach((image) => {
  const img = new Image();
  img.src = image;
  preloadedImages.push(img);
});

function changeBackground(reverse = false) {
  if (!reverse) 
  {
    currentIndex = Math.min(currentIndex + 1, images.length - 1);
  } else 
  {
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  imageContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
}

imageContainer.addEventListener('mousemove', (event) => {
  if (prevMouseX !== null) {
    if (event.clientX > prevMouseX) {
      changeBackground(false);
    } else if (event.clientX < prevMouseX) {
      changeBackground(true);
    }
  }

  prevMouseX = event.clientX;
});
