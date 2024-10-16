import "./style.css";

const slide = document.querySelector(".carousel-slide");
const slideLeft = document.querySelector(".carousel-left");
const slideRight = document.querySelector(".carousel-right");
let x = 0;
const slideWidth = slide.offsetWidth;
const numberOfSlides = Math.floor(slide.childNodes.length / 2);
const rightLimit = slideWidth * (numberOfSlides - 1);

slideLeft.addEventListener("click", () => {
  slide.scroll({
    left: x > 0 ? (x -= slideWidth) : (x = rightLimit),
    behavior: "smooth",
  });
});

slideRight.addEventListener("click", () => {
  slide.scroll({
    left: x < rightLimit ? (x += slideWidth) : (x = 0),
    behavior: "smooth",
  });
});

// =========================== Menu List code =======================

const menuButton = document.querySelectorAll(".menu-button");
const menuButtonArray = Array.from(menuButton);

for (let i = 0; i < menuButtonArray.length; i += 1) {
  const parent = menuButtonArray[i].parentNode.id;
  let toggleDisplay = true;
  menuButtonArray[i].addEventListener("click", () => {
    const menuItems = document.querySelectorAll(`#${parent} > .menu-item`);
    const menuItemArray = Array.from(menuItems);
    let displayValue = "none";
    for (let j = 0; j < menuItemArray.length; j += 1) {
      if (toggleDisplay) {
        displayValue = "none";
      } else {
        displayValue = "block";
      }
      menuItemArray[j].style.display = displayValue;
    }
    toggleDisplay = !toggleDisplay;
  });
}
