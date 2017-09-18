import $ from 'jquery';
import countdown from 'countdown';

const format = v => v < 10 ? `0${v}` : v;

const banner = () => {
  // Current month
  const month = 10;
  const end = new Date(2017, month - 1, 12, 8);

  const $countdownElem = $('#js-countdown');
  const $daysElem = $countdownElem.find('.days-num');
  const $hrsElem = $countdownElem.find('.hrs-num');
  const $minsElem = $countdownElem.find('.mins-num');
  const $secsElem = $countdownElem.find('.secs-num');

  const countId = setInterval(() => {
    const now = new Date()
    const duration = countdown(now, end);

    if (duration.value <= 0) {
      clearInterval(countId)
      return;
    };

    $daysElem.text(format(duration.days));
    $hrsElem.text(format(duration.hours));
    $minsElem.text(format(duration.minutes));
    $secsElem.text(format(duration.seconds));
  }, 1000);
}

export default banner;
