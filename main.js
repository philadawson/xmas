let myButton = document.querySelector("button");
let imgTop = document.querySelector(".img-top");
let imgBottom = document.querySelector(".img-bottom");

myButton.onclick = function () {
  let topSrc = imgTop.getAttribute("src");
  if (topSrc === "phils-cards-xmas2021.png") {
    imgTop.setAttribute("src", "phils-cards-xmas2021-clicked.png");
  } else {
    imgTop.setAttribute("src", "phils-cards-xmas2021.png");
  }
  let bottomSrc = imgBottom.getAttribute("src");
  if (bottomSrc === "phils-cards-xmas2021-penguin.png") {
    imgBottom.setAttribute("src", "phils-cards-xmas2021-penguin-clicked.png");
  } else {
    imgBottom.setAttribute("src", "phils-cards-xmas2021-penguin.png");
  }
};
