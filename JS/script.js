// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2500,
  delay: 0,
});
ScrollReveal().reveal(".revealHeading", { delay: 800, origin: "left" });
ScrollReveal().reveal(".revealSub", { delay: 900, origin: "bottom" });

ScrollReveal().reveal(".wedoBox", {
  delay: 600,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".courseBox", {
  delay: 600,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".valueItem", {
  delay: 600,
  origin: "bottom",
  interval: 200,
});
// navbar toggle mode
window.addEventListener("scroll", () => {
  let nav = document.querySelector("#bigscreenNav");
  nav.classList.toggle("newNav", window.scrollY > 500);
});

const ShowNav = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);
  toggle.addEventListener("click", () => {
    nav.classList.toggle("showMenu");
    hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("fa-times");
  });
};
ShowNav("navToggle", "navMenu");

// about page slider
let items = document.querySelectorAll(".slider .list .item");
let thumnails = document.querySelectorAll(".thumbNail .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  shoowSlider();
};

prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  shoowSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function shoowSlider() {
  let ItemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbNailActiveOld = document.querySelector(".thumbNail .item.active");
  ItemActiveOld.classList.remove("active");
  thumbNailActiveOld.classList.remove("active");

  items[itemActive].classList.add("active");
  thumnails[itemActive].classList.add("active");
}
clearInterval(refreshInterval);
refreshInterval = setInterval(() => {
  next.click();
}, 5000);

thumnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    shoowSlider();
  });
});
