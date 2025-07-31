let swiperInstance = null;

export default function toggleSlider() {
  const screenWidth = window.innerWidth;
  const container = document.querySelector('.services .swiper-wrapper');
  const cards = container.querySelectorAll('.swiper-slide');

  if (screenWidth <= 800) {
    // Получаем общую ширину карточек
    let totalWidth = 0;
    cards.forEach(card => {
      totalWidth += card.offsetWidth;
    });

    // Если карточки не вмещаются, то активируем Swiper
    if (totalWidth > container.offsetWidth) {
      if (!swiperInstance) {
        swiperInstance = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesOffsetAfter: 24, 
    
      });
      }
    } else {
      // Если вмещаются, то отключаем
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  } else {
    // Десктоп отключаем
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}