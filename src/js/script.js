import '../css/fonts.css';
import '../css/style.min.css';
import initActiveMenu from './initActiveMenu';
import toggleSlider from './toggleSlider';

document.addEventListener('DOMContentLoaded', () => {
  initActiveMenu();
  window.addEventListener('load', toggleSlider);
  window.addEventListener('resize', toggleSlider);
});