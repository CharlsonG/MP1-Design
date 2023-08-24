const buttonNext = document.querySelector(".buttonNext");
const buttonBack = document.querySelector(".buttonBack");
const optionsForYou = document.querySelector(".optionsForYou");
const slideWidth = 100;
let slideIndex = 0;

buttonNext.addEventListener("click", moveProjectsRight);
buttonBack.addEventListener("click", moveProjectsLeft);

function moveProjectsRight() {
  slideIndex++;

  if (slideIndex > 3) { // Adjust this value based on the number of slides
    slideIndex = 0;
  }

  optionsForYou.style.left = (-slideIndex * slideWidth) + "%";
}

function moveProjectsLeft() {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = 3; // Adjust this value based on the number of slides
  }

  optionsForYou.style.left = (-slideIndex * slideWidth) + "%";
}

let intervalId1 = setInterval(() => {
  const viewportWidth = window.innerWidth;
  if (viewportWidth <= 750) {
    moveProjectsLeft();
  }
}, 7500);


const buttonNext2 = document.querySelector(".buttonNext2");
const buttonBack2 = document.querySelector(".buttonBack2");
const popularOptions = document.querySelector(".popularOptions");
const slideWidth2 = 100;
let slideIndex2 = 0;

buttonNext2.addEventListener("click", moveProjectsRight2);
buttonBack2.addEventListener("click", moveProjectsLeft2);

function moveProjectsRight2() {
    slideIndex2++;

  if (slideIndex2 > 7) { // Adjust this value based on the number of slides
    slideIndex2 = 0;
  }

  popularOptions.style.left = (-slideIndex2 * slideWidth2) + "%";
}

function moveProjectsLeft2() {
    slideIndex2--;

  if (slideIndex2 < 0) {
    slideIndex2 = 7; // Adjust this value based on the number of slides
  }

  popularOptions.style.left = (-slideIndex2 * slideWidth2) + "%";
}

let intervalId2 = setInterval(() => {
  const viewportWidth = window.innerWidth;
  if (viewportWidth <= 750) {
    moveProjectsRight2();
  }
}, 15000);

// Additional code to handle viewport width changes
function handleViewportChange() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth > 750) {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
  }
}

window.addEventListener('resize', handleViewportChange);

/* offCanvass JS */
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

const seeOfferDisplay = document.querySelectorAll('.popularOptionsContainer');
const seeOffer = document.querySelector('#pricing');
const seeMorePlaces = document.querySelector('.seeMorePlaces');
const section2 = document.querySelector('.section2');

seeOfferDisplay.forEach((div) => {
  div.addEventListener('click', () => {
    seeOffer.style.display = 'inline';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});

seeOffer.addEventListener('click', () => {
  seeMorePlaces.style.display = 'inline-block';
  window.scrollTo({
    top: document.documentElement.scrollHeight - window.innerHeight - 200,
    left: 0,
    behavior: 'smooth'
  });
});

seeMorePlaces.addEventListener('click', () => {
  section2.scrollIntoView({ behavior: 'smooth' });
});



const france = document.querySelector('.popular1')
france.addEventListener('click', () => {

  document.querySelector('#mainTitle').innerText = "France: A Tapestry of Culture, History, and Beauty";
  document.querySelector('#mainTitleDescription').innerText = "A captivating nation that weaves together rich history, world-renowned art and architecture, delectable cuisine, diverse landscapes, and a vibrant tapestry of cultural experiences that leave a lasting impression";
  document.documentElement.style.setProperty('--section1BackgroundImage', `url('../Images/France-Section1.jpg')`);
  document.documentElement.style.setProperty('--section2BackgroundImage', `url('../Images/France-Section2.jpg')`);
  document.documentElement.style.setProperty('--section3BackgroundImage', `url('../Images/France-Section3.jpg')`);
  document.querySelector('.option1Title').innerText = "The City of Light and Love";
  document.querySelector('.option2Title').innerText = "Charming Villages and Lavender Fields";
  document.querySelector('.option3Title').innerText = "Savoring French Delicacies";
  document.querySelector('.option4Title').innerText = "Historical Grandeur and Gastronomic Delights";
  document.querySelector('.option1Description').innerText = "Explore Iconic Landmarks, Artistic Treasures, and Savory Cuisine.";
  document.querySelector('.option2Description').innerText = "Discover the Provencal Delights and Rustic Beauty of Southern France.";
  document.querySelector('.option3Description').innerText = "Experience the gastronomic delights of France, from creamy Camembert to freshly baked bread and heavenly pastries found in charming patisseries.";
  document.querySelector('.option4Description').innerText = "Unveiling France's Cultural Heritage through Castles, Wine, and Gourmet Cuisine.";
  document.documentElement.style.setProperty('--option1Image', `url('../Images/France-Option1.jpg')`);
  document.documentElement.style.setProperty('--option2Image', `url('../Images/France-Option2.jpg')`);
  document.documentElement.style.setProperty('--option3Image', `url('../Images/France-Option3.jpg')`);
  document.documentElement.style.setProperty('--option4Image', `url('../Images/France-Option4.jpg')`);
})

const italy = document.querySelector('.popular2')
italy.addEventListener('click', () => {

  document.querySelector('#mainTitle').innerText = "Italy: Timeless Elegance, Enchanting Landscapes, Culinary Mastery";
  document.querySelector('#mainTitleDescription').innerText = "Embark on an enchanting journey through Italy, where timeless elegance exudes from historic treasures, breathtaking landscapes captivate, and culinary mastery delights the senses with every bite";
  document.documentElement.style.setProperty('--section1BackgroundImage', `url('../Images/Italy-Section1.jpg')`);
  document.documentElement.style.setProperty('--section2BackgroundImage', `url('../Images/Italy-Section2.jpg')`);
  document.documentElement.style.setProperty('--section3BackgroundImage', `url('../Images/Italy-Section3.jpg')`);
  document.querySelector('.option1Title').innerText = "Romantic Venice";
  document.querySelector('.option2Title').innerText = "Eternal City";
  document.querySelector('.option3Title').innerText = "Italian Gastronomy Delights";
  document.querySelector('.option4Title').innerText = "Tuscany's Enchanting Countryside";
  document.querySelector('.option1Description').innerText = "Serenade Gondola Rides, Byzantine Architecture, and Hidden Canals in the City of Love.";
  document.querySelector('.option2Description').innerText = "Exploring Rome's Timeless Treasures, From Colosseum to Vatican City and Pasta on Every Corner.";
  document.querySelector('.option3Description').innerText = "Indulge in a Culinary Symphony of Pizza, Pasta, Gelato, and Fine Wines From Every Corner of Italy.";
  document.querySelector('.option4Description').innerText = "Rolling Hills, Vineyards, and Renaissance Splendors Embrace You in this Picturesque Region.";
  document.documentElement.style.setProperty('--option1Image', `url('../Images/Italy-Option1.jpg')`);
  document.documentElement.style.setProperty('--option2Image', `url('../Images/Italy-Option2.jpg')`);
  document.documentElement.style.setProperty('--option3Image', `url('../Images/Italy-Option3.jpg')`);
  document.documentElement.style.setProperty('--option4Image', `url('../Images/Italy-Option4.jpg')`);
})




const japan = document.querySelector('.popular3')
japan.addEventListener('click', () => {

  document.querySelector('#mainTitle').innerText = "Japan: The Land of the Rising Sun";
  document.querySelector('#mainTitleDescription').innerText = "Japan's Cultural Riches, Stunning Landscapes, and Technological Marvels";
  document.documentElement.style.setProperty('--section1BackgroundImage', `url('../Images/Japan-Section1.jpg')`);
  document.documentElement.style.setProperty('--section2BackgroundImage', `url('../Images/Japan-Section2.jpg')`);
  document.documentElement.style.setProperty('--section3BackgroundImage', `url('../Images/Japan-Section3.jpg')`);
  document.querySelector('.option1Title').innerText = "Exploring Ancient Wonders";
  document.querySelector('.option2Title').innerText = "Innovative Technology and Futuristic Cityscapes";
  document.querySelector('.option3Title').innerText = "Savoring Culinary Delights";
  document.querySelector('.option4Title').innerText = "Nature's Paradise";
  document.querySelector('.option1Description').innerText = "Dive into Japan's enchanting past as you explore historic temples, traditional art forms, and elegant gardens that reflect the country's deep cultural roots.";
  document.querySelector('.option2Description').innerText = "Get ready for a technological adventure in Japan, where sleek architecture, bullet trains, and cutting-edge innovations blend seamlessly with ancient traditions.";
  document.querySelector('.option3Description').innerText = "Embark on a tantalizing culinary expedition in Japan, treating your taste buds to a myriad of flavors, from delicate sushi to hearty ramen and exquisite tea ceremonies.";
  document.querySelector('.option4Description').innerText = "Immerse yourself in the awe-inspiring natural beauty of Japan, from the iconic cherry blossoms of spring to the serene landscapes of Mount Fuji and the tranquil bamboo forests.";
  document.documentElement.style.setProperty('--option1Image', `url('../Images/Japan-Option1.jpg')`);
  document.documentElement.style.setProperty('--option2Image', `url('../Images/Japan-Option2.jpg')`);
  document.documentElement.style.setProperty('--option3Image', `url('../Images/Japan-Option3.jpg')`);
  document.documentElement.style.setProperty('--option4Image', `url('../Images/Japan-Option4.jpg')`);
})