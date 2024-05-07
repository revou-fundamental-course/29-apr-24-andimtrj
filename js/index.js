document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      const nextSlideIndex = (currentSlide + 1) % slides.length;
  
      slides[currentSlide].style.transition = "transform 0.5s ease-in-out";
      slides[nextSlideIndex].style.transition = "transform 0.5s ease-in-out"; // Apply transition to next slide
  
      slides[currentSlide].style.transform = "translateX(-100%)";
      slides[nextSlideIndex].style.transform = "translateX(0)";
  
      currentSlide = nextSlideIndex;
  
      setTimeout(() => {
        showSlide(currentSlide);
      }, 500); // Wait for the transition to end (0.5s)
    }
  
    setInterval(nextSlide, 3000); // Auto slide every 3 seconds
  });
  