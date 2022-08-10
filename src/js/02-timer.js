import flatpickr from 'flatpickr';
require('flatpickr/dist/themes/confetti.css');

import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtnref = document.querySelector('[data-start]');
const fieldRefs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

startBtnref.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const today = new Date();
    const selectedDateUnix = selectedDates[0].getTime();
    let id = null;

    if (today.getTime() > selectedDateUnix) {
      console.log(
        Notiflix.Notify.failure('Please choose a date in the future')
      );
      startBtnref.disabled = true;
      return;
    }

    startBtnref.addEventListener('click', onStartBtnClick);
    function onStartBtnClick() {
      if (id) {
        clearInterval(id);
      }

      id = setInterval(getDelta, 1000);
      startBtnref.disabled = true;
    }

    function getDelta() {
      const today = new Date();
      const delta = convertMs(selectedDateUnix - today.getTime());

      renderTimer(delta);
    }

    startBtnref.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function renderTimer(date) {
  Object.keys(date).forEach(
    key => (fieldRefs[key].textContent = addLeadingZero(date[key]))
  );
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
