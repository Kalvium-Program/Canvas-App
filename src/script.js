const buttonBackground = document.getElementById("button-background");
const imgBackground = document.getElementById("background");

buttonBackground.oninput = () => {
  imgBackground.style.fill = buttonBackground.value;
}

const buttonFacePlate = document.getElementById("button-face-plate");
const facePlate = document.getElementById("face-plate");

buttonFacePlate.oninput = () => {
  facePlate.style.fill = buttonFacePlate.value;
}

const buttonEyes = document.getElementById("button-eyes");
const eyes = document.getElementById("eyes");

buttonEyes.oninput = () => {
  eyes.style.fill = buttonEyes.value;
}

const buttonHelmet = document.getElementById("button-helmet");
const helmet = document.getElementById("helmet");

buttonHelmet.oninput = () => {
  helmet.style.fill = buttonHelmet.value;
}
