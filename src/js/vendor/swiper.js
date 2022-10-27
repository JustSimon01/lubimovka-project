  // import Swiper JS
  import Swiper, { Navigation, Pagination } from 'swiper';
  
  Swiper.use([Navigation, Pagination]);
  
  const swiper = new Swiper('.swiper-persons', {
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
  });
  