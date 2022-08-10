function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.start.addEventListener('click', onStartBtnClick);
refs.stop.addEventListener('click', onStopBtnClick);

let randomBodyColorIntervalId = null;

function onStartBtnClick() {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  generateIntervalBodyColor();
}

function onStopBtnClick() {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(randomBodyColorIntervalId);
}

function generateIntervalBodyColor() {
  randomBodyColorIntervalId = setInterval(generateColor, 1000);
  function generateColor() {
    document.body.style = `background-color: ${getRandomHexColor()};`;
  }
}
