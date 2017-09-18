import $ from 'jquery';
import scrollTo from 'jquery-scroll';

const navState = () => {
  const $document = $(document);
  const $nav = $('.nav');

  const $item = $('body').find('.category');
  const $category = $nav.find('a.scroll-link');

  let activeIndex = 0;
  $category.eq(0).addClass('active');

  $document.on('scroll', () => {
    const position = $document.scrollTop();
    const oldIndex = activeIndex;

    $item.each((index, elem) => {
      const $elem = $(elem);

      if (position >= Math.floor($elem.offset().top - 120) && position <= Math.floor($elem.offset().top - 120) + Math.floor($elem.innerHeight())) {
        activeIndex = index;
      }
    });

    if (oldIndex !== activeIndex) {
      const $activeCategory = $category.eq(activeIndex);
      // const id = $item.eq(activeIndex).attr('id');
      // document.location.hash = id;
      $category.removeClass('active');
      $activeCategory.addClass('active');
    }
  });

  $category.on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    scrollTo({
      selector: $item.eq($this.data('index')),
      offset: 120
    });
  });
};

export default navState;
