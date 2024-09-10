const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  console.log(this.window.scrollY);
  if (this.window.scrollY > 500) {
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    });

    // 상단으로 이동 버튼 보이기
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0,
    });
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    });

    // 상단으로 이동 버튼 숨기기
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100,
    });
  }
});

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper', {
  // Optional parameters

  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true, //1번슬라이드가 가운데 보이기

  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

gsap.to('.floating1', 1.5, {
  delay: 1, //얼마나 늦게 애니메이션을 시작할것인지
  y: 15,
  repeat: -1, //무한반복:-1 (몇번 반복할건지)
  yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInout,
});
gsap.to('.floating2', 1, {
  delay: 0.5, //얼마나 늦게 애니메이션을 시작할것인지
  y: 15,
  repeat: -1, //무한반복:-1 (몇번 반복할건지)
  yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInout,
});
gsap.to('.floating3', 2.5, {
  delay: 1.5, //얼마나 늦게 애니메이션을 시작할것인지
  y: 20,
  repeat: -1, //무한반복:-1 (몇번 반복할건지)
  yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInout,
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper', {
  // Optional parameters

  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,

  navigation: {
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
