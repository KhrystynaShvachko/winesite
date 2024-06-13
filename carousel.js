document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".winemaking-process__carousel");
  const slides = document.querySelectorAll(".winemaking-process__slide");
  const prevButton = document.querySelector(".winemaking-process__carousel-control--left");
  const nextButton = document.querySelector(".winemaking-process__carousel-control--right");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * (100 / 3);
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", function() {
    if (currentIndex < slides.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });

  const buttons = document.querySelectorAll(".winemaking-process__button");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const details = this.nextElementSibling;
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "-";
      } else {
        details.style.display = "none";
        this.textContent = "+";
      }
    });
  });
});
