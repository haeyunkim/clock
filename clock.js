const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const minute = String(date.getMinutes()).padStart(2, 0);
  const second = String(date.getSeconds()).padStart(2, 0);

  hours.innerText = `${hour}`;
  minutes.innerText = `${minute}`;
  seconds.innerText = `${second}`;
}
getClock();
setInterval(getClock, 1000);
