const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");
const navlogo = document.querySelector("#navbar__logo");
const body = document.querySelector("body");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//animations
gsap.registerPlugin(ScrollTrigger);
gsap.form(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.form(".animate-services", {
  ScrollTrigger: ".animate - services",
  duration: 0.5,
  opacity: 1,
  y: -150,
  stagger: 0.12,
});

gsap.form(".animate-services", {
  ScrollTrigger: ".animate - services",
  duration: 0.5,
  opacity: 1,
  y: -150,
  stagger: 0.12,
});
