const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".list");
const menuItem = document.querySelectorAll(".list li a");
const header = document.querySelector(".header-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    });
});

// adding background color to the navigation bar when the page is scrolled
document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#29323c";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });