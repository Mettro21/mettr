const swiperTop = new Swiper(".swiper-top", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
});

var mixer = mixitup(".services__inner-box", {
  load: {
    filter: ".a",
  },
  animation: {
    animateResizeTargets: true,
  },
});

var swiperReviews = new Swiper(".swiper-reviews", {
  // loop: true,
  effect: "cards",
  // grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-prev",
  },
});

const accordeon = document.querySelector(".answers-accordeon");
const accordeonTitles = accordeon.querySelectorAll(".answers-accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText = accordeonTitle.parentElement.querySelector(
      ".answers-accordeon__text"
    );

    accordeonTitle.classList.toggle("answers-accordeon__title--active");
    currentText.classList.toggle("answers-accordeon__text--visible");

    if (currentText.classList.contains("answers-accordeon__text--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
