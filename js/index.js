let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


// Function to validate form inputs
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var interested = document.getElementById("interested").value;
  var errorMessage = "";

  // Check if name, email, and interested fields are empty
  if (name.trim() === "") {
    errorMessage += "Please enter your name.\n";
  }
  // Check if email field is empty
  if (email.trim() === "") {
    errorMessage += "Please enter your email address.\n";
  } else {
    // Check if email is in valid format using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage += "Please enter a valid email address.\n";
    }
  }
  if (interested === "") {
    errorMessage += "Please select what you are interested in.\n";
  }

  // Display error message if any field is empty or email is invalid
  if (errorMessage !== "") {
    alert(errorMessage);
    return false;
  }
  return true;
}

// Attach validateForm function to form submission
document.querySelector("form").addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar-menu a");

  links.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});