import convertMs from './convertms.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/confetti.css';

import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

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
    const selectedDateUnix = selectedDates[0].getTime();
    // console.log(selectedDateUnix);
    // console.log(Date.now());
    let id = null;

    if (Date.now() > selectedDateUnix) {
      Notiflix.Notify.failure('Please choose a date in the future');

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
      const delta = selectedDateUnix - Date.now();
      if (delta < 0) {
        clearInterval(id);
        return;
      }

      renderTimer(convertMs(delta));
    }

    startBtnref.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function renderTimer(date) {
  Object.keys(date).forEach(
    key => (fieldRefs[key].textContent = addLeadingZero(date[key]))
  );
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
