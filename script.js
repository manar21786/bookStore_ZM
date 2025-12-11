
const colorIcon = document.getElementById("colorIcon");
const colorPicker = document.getElementById("colorPicker");

colorIcon.addEventListener("click", () => {
  colorPicker.classList.toggle("active");
});

colorPicker.addEventListener("input", (e) => {
 
  const newColor = e.target.value;
  const body = document.querySelector("body");

  body.style.setProperty("--primary-blue", newColor);
});


const themeToggling = document.getElementById("theme");

themeToggling.addEventListener("click", () => {
  
  const body = document.querySelector("body");
  body.classList.toggle("dark-theme");
});


const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
