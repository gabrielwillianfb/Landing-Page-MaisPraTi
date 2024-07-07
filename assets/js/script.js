// Função para mover os slides
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesToShow = 3; // Quantidade de slides a serem mostrados por vez
const slideWidth = slides[0].clientWidth; // Largura de cada slide
const slideMargin = 20; // Margem entre os slides

function moveSlide(n) {
  slideIndex += n;

  // Verifica limites do slideIndex
  if (slideIndex < 0) {
    slideIndex = totalSlides - slidesToShow;
  } else if (slideIndex > totalSlides - slidesToShow) {
    slideIndex = 0;
  }

  const slidePosition = -slideIndex * (slideWidth + slideMargin);
  document.querySelector(".slider").style.transform = `translateX(${slidePosition}px)`;
}

document.querySelector(".prev-button").addEventListener("click", () => {
  moveSlide(-1);
});

document.querySelector(".next-button").addEventListener("click", () => {
  moveSlide(1);
});
