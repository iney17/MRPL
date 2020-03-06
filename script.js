const btn = document.querySelector("#menu"); //объявляем конст. для  кнопки меню в документе
const modalOuter = document.querySelector(".modal-outer");
let mobileMenu = document.querySelector(".mobile-menu");
btn.addEventListener("click", openWindow);

function openWindow(e) {
  const btn = e.currentTarget; //объявляем конст. Определяем элемент, который получил клик

  modalOuter.classList.add("open"); //добавляем класс к константе, получаем класс .modal-outer.open (и окно становится видимым)
  btn.classList.add("open");
  btn.innerHTML = `x`;
}

modalOuter.addEventListener("click", cloceWindow);
mobileMenu.addEventListener("click", cloceWindow);
function cloceWindow(e) {
  if (e.target.classList.contains("open")) {
    modalOuter.classList.remove("open");
    btn.innerHTML = `<button id="menu-style">≡</button>`;
    btn.classList.remove("open"); //чтобы вернуть первоначальные стили
  }
}

/* счётчик */
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector(".days");
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = "2020-07-31";
initializeClock("countdown", deadline);

/*слайдер*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
