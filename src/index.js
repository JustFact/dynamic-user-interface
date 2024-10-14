const menuButton = document.querySelectorAll(".menu-button");
const menuButtonArray = Array.from(menuButton);

for (let i = 0; i < menuButtonArray.length; i += 1) {
  const parent = menuButtonArray[i].parentNode.className;
  let toggleDisplay = true;
  menuButtonArray[i].addEventListener("click", () => {
    const menuItems = document.querySelectorAll(`.${parent} > .menu-item`);
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
