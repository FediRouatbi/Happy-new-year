"use strict";
const today = new Date();

const newYear = new Date(`1 janv ${today.getFullYear() + 1}`);

const Timer = function () {
  const timeNow = new Date();
  const timeLeft = (newYear - timeNow) / 1000; // in Seconds
  const days = timeLeft / 86400;
  const hours = (timeLeft % 86400) / 3600;
  const minutes = ((timeLeft % 86400) % 3600) / 60;
  const seconds = ((timeLeft % 86400) % 3600) % 60;
  document.querySelector(".days").textContent = `${Math.floor(days)}`.padStart(
    2,
    0
  );
  document.querySelector(".hours").textContent = `${Math.floor(
    hours
  )}`.padStart(2, 0);
  document.querySelector(".minutes").textContent = `${Math.floor(
    minutes
  )}`.padStart(2, 0);
  document.querySelector(".seconds").textContent = `${Math.floor(
    seconds
  )}`.padStart(2, 0);
};
setInterval(Timer, 1000);
