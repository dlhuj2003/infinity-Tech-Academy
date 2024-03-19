
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
}

let refreshInterval = setInterval(() => {
  next.click();

}, 3000)
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

}, 5000)

thumnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    shoowSlider();
  });
});
