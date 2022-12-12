// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-persons', {
  loop: false,
  spaceBetween: 30,
  slidesPerView: "auto",
});

const secondSwiper = new Swiper('.swiper-video-gallery', {
  loop: false,
  spaceBetween: 30,
  slidesPerView: "auto",
});

const thirdSwiper = new Swiper('.swiper-video-gallery__three-videos', {
  loop: false,
  spaceBetween: 30,
  slidesPerView: "auto",
});

const performancesSwiper = new Swiper('.swiper-performances', {
  loop: false,
  slidesPerView: "auto",
});

