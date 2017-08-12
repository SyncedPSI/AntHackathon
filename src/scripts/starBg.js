import $ from 'jquery';

const starBg = () => {
  const stars = 50;
  const $starsBox = $('#js-starsBox');

  for (let i = 0; i <= stars; i++) {
    const size = Math.random() * 3;

    $starsBox.prepend(`<span style="width:${size}px; height: ${size}px; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;"></span>`);
  };

  setTimeout(() => {
    $starsBox.find('span').each(function() {
      $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
  }, 1);

  setInterval(() => {
    $starsBox.find('span').each(function() {
      $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
  }, 100000);
}

export default starBg;
