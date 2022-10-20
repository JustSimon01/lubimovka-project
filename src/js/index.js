console.log('Входящий JS файл работает.');

  // import Swiper JS
  import Swiper, { Navigation, Pagination } from 'swiper';
  Swiper.use([Navigation, Pagination]);
  
  const swiper = new Swiper('.persons__swiper', {
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
  });