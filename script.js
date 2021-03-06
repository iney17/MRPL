const btn = document.querySelector("#menu"); //объявляем конст. для  кнопки меню в документе
const modalOuter = document.querySelector(".modal-outer");
let mobileMenu = document.querySelector(".mobile-menu");
btn.addEventListener("click", openWindow);

function openWindow(e) {
  const btn = e.currentTarget; //объявляем конст. Определяем элемент, который получил клик

  modalOuter.classList.add("open"); //добавляем класс к константе, получаем класс .modal-outer.open (и окно становится видимым)
  btn.classList.add("open");
  btn.innerHTML = `x`; //меняю кнопку меню на 'x'
}

modalOuter.addEventListener("click", cloceWindow);
mobileMenu.addEventListener("click", cloceWindow);
function cloceWindow(e) {
  if (e.target.classList.contains("open")) {
    modalOuter.classList.remove("open");
    btn.innerHTML = `<button id="menu-style">≡</button>`; //возвращаем исходную кнопку
    btn.classList.remove("open"); //чтобы вернуть первоначальные стили
  }
}

/* счётчик */
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()); //пееводим в милисек, и вычитаем дату
  let seconds = Math.floor((t / 1000) % 60); // переводим милисек в сек
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

let deadline = "2020-07-31"; // вводим число оканчания счётчика
initializeClock("countdown", deadline);

/*слайдер фото*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

/* второй слайдер (галлерея афиши)*/
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("demo2");
  let captionText = document.getElementById("caption2");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2";
  captionText.innerHTML = dots2[slideIndex2 - 1].alt;
}

/* форма обратной связи*/

$(document).ready(function() {
  /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
  $("#btn_submit").click(function() {
    // собираем данные с формы
    let user_name = $("#name").val();
    let user_email = $("#email").val();
    let user_phone = $("#phone").val();
    let text_comment = $("#text_comment").val();
    // отправляем данные
    $.ajax({
      url: "./send.php", // куда отправляем
      type: "post", // метод передачи
      data: {
        // что отправляем
        name: user_name,
        email: user_email,
        phone: user_phone,
        text_comment: text_comment
      },
      error: function() {
        $("#erconts").html("Произошла ошибка!");
      },
      /* если произойдет ошибка в элементе с id erconts выведится сообщение*/

      beforeSend: function() {
        $("#erconts").html("Отправляем данные...");
      },
      success: function(result) {
        /* В случае удачной обработки и отправки выполнится следующий код*/

        $("#erconts").html(result);
        console.log("ntcn");
      }
    });
  });
});
