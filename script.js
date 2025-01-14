const navList = document.querySelector(".nav-list");
const closeIcon = document.querySelector(".close-icon");
const burgerBytesMenuConatiner = document.querySelector(
  ".burger-bytes-menu-container"
);

burgerBytesMenuConatiner.addEventListener("click", (e) => {
  navList.style.display = "block";
  burgerBytesMenuConatiner.style.display = "none";
});

closeIcon.addEventListener("click", (e) => {
  navList.style.display = "none";
  burgerBytesMenuConatiner.style.display = "block";
});
