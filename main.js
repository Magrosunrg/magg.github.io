const images = Array.from({ length: 360 }, (_, i) => `${String(i + 1).padStart(4, '0')}.png`);

const preloadedImages = [];
images.forEach((image) => {
  const img = new Image();
  img.src = image;
  preloadedImages.push(img);
});

let currentIndex = 0;

function changeBackground(delta) {
  currentIndex += delta;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= images.length) {
    currentIndex = images.length - 1; 
  }

  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
}

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    changeBackground(1);
  } else {
    changeBackground(-1);
  }
});

document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
