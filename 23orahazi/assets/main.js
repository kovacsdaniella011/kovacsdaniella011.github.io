function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


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

// Modal elemek
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalImage = document.querySelector('.modal-image');
const colorSelect = document.querySelector('.color-select');
const closeBtn = document.querySelector('.close');

let currentImages = [];

// Minden modal gombra listener
const openBtns = document.querySelectorAll('.open-modal');
openBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.product');

    const title = product.dataset.title;
    const colors = JSON.parse(product.dataset.colors);
    currentImages = JSON.parse(product.dataset.images);

    modalTitle.textContent = title;
    modalImage.src = currentImages[0];
    modalImage.alt = title;

    // Színek feltöltése
    colorSelect.innerHTML = "";
    colors.forEach((color, index) => {
      const option = document.createElement('option');
      option.textContent = color;
      option.value = index;
      colorSelect.appendChild(option);
    });

    modal.classList.add('show');
  });
});

// Színváltás képcseréhez
colorSelect.addEventListener('change', (e) => {
  const selectedIndex = Number(e.target.value);
  modalImage.src = currentImages[selectedIndex];
});

// Modal bezárás
closeBtn.addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show');
});




function showPopup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const checkboxes = document.querySelectorAll(".checkbox input[type='checkbox']");
  const errorDiv = document.getElementById("error-message");


  // legalább egy checkbox legyen bejelölve
  let oneChecked = false;
  checkboxes.forEach(cb => {
    if (cb.checked) oneChecked = true;
  });

  // email regex!!!!!!!!!!!!
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name !== "" && emailPattern.test(email) && oneChecked) {
    errorDiv.textContent = "";
    document.getElementById("popup").style.display = "flex";
  } else {
    errorDiv.textContent = "❌ kérlek add meg a neved, egy érvényes email címet és válassz legalább egy kategóriát!";
  }
}


function closePopup() {
  document.getElementById("popup").style.display = "none";
}
