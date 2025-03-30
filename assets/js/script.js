// Hide navbar when scrolling up
if (window.scrollY < lastScrollY && Math.abs(window.scrollY - lastScrollY) > 10) {
  navbar.classList.add("hide");
} else {
  navbar.classList.remove("hide");
}

// Show navbar when at the top
if (window.scrollY === 0) {
  navbar.classList.remove("hide");
}

lastScrollY = window.scrollY;
