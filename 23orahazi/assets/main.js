const Nap = document.getElementById("nap");
const Ora = document.getElementById("ora");
const Perc = document.getElementById("perc");
const Masodperc = document.getElementById("masodperc");
const countDownDate = new Date("2026-01-01 00:00:00").getTime();    

function updateTimer() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const nap = Math.floor(distance / 1000 / 60 / 60 / 24);
  const ora = Math.floor(distance / 1000 / 60 / 60) % 24;
  const perc = Math.floor(distance / 1000 / 60) % 60;
  const masodperc = Math.floor(distance / 1000) % 60;

  Nap.innerHTML = nap;
  Ora.innerHTML = ora;
  Perc.innerHTML = perc;
  Masodperc.innerHTML = masodperc;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

}

const x = setInterval(updateTimer, 1000);


