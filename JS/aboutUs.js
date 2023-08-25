const offCanvassContainer = document.querySelector('.offCanvassContainer');
const buttonCanvass = document.querySelector('.toggleIconContainer');
let canvassCounter = 0;

buttonCanvass.addEventListener('click', () => {
  if (canvassCounter <= 0) {
    offCanvassContainer.style.opacity = '1';
    offCanvassContainer.style.zIndex = '2';
    canvassCounter++;
  } else {
    offCanvassContainer.style.opacity = '0';
    offCanvassContainer.style.zIndex = '-1';
    canvassCounter--;
  }
});