let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function openSideNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("body").style.marginRight = "250px";
}

function closeSideNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("body").style.marginRight = "0";
}

function openDropNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeDropNav() {
  document.getElementById("myNav").style.height = "0%";
}