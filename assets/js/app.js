let sideMenu = document.querySelector(".side");
let closeTab = sideMenu.firstElementChild;
let burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
});
closeTab.addEventListener("click", () => {
  sideMenu.classList.add("hidden");
});
let header = document.querySelector("header");
let ScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > ScrollPosition) {
    header.classList.remove("up");
  } else {
    header.classList.add("up", "readable");
    setTimeout(() => {
        header.classList.remove("readable")
    }, 200);
  }
  ScrollPosition = currentScrollPosition;
});
