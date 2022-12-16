import './scss/index.scss';
import './js/index';
import { Burger } from './js/components/Burger';

const burgerElement = document.querySelector('.menu-burger');
const burgerTopNavigation = new Burger('root', 'menu-burger');
const burgerScrollNavigation = new Burger('header__body', 'menu-burger');

const activateNavigation = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 645) {
    burgerScrollNavigation.handleToggle();
    burgerScrollNavigation.disableScroll();
  } else {
    burgerTopNavigation.handleToggle();
  }
}

burgerElement.addEventListener('click', activateNavigation);
