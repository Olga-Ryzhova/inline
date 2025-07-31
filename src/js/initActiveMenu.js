export default function initActiveMenu() {
  const items = document.querySelectorAll('.header__menu-link');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(el => el.classList.remove('header__menu-link--active'));
      item.classList.add('header__menu-link--active');
    });
  });
}