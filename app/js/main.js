$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__btn-close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });
  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
  });

  $('.article-slider__box').slick({
    prevArrow: `<button type="button" class="article-slider__arrow article-slider__arrow--left"><img  class="article-slider__icon-arrow" src="images/icon-slide-back.svg" alt="arrow icon"></button>`,
    nextArrow: `<button type="button" class="article-slider__arrow article-slider__arrow--right"><img  class="article-slider__icon-arrow" src="images/icon-slide-next.svg" alt="arrow icon"></button>`,
    dots: false,
    arrows: true,
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.livingroom',
    },
  });
});
