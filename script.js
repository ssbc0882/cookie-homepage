const hamburger = document.querySelector(".hamburger-menu");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const mobileNavMenu = document.querySelector(".mobile-middle-header");
const navigationHeight = document.querySelector(".navbar").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNavMenu.classList.toggle("hidden");
});
