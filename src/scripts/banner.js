import $ from 'jquery';
import countdown from 'countdown';

const format = v => v < 10 ? `0${v}` : v;

const banner = () => {
  const end = new Date(2017, 8, 25);

  const $countdownElem = $('#js-countdown');
  const $daysElem = $countdownElem.find('.days-num');
  const $hrsElem = $countdownElem.find('.hrs-num');
  const $minsElem = $countdownElem.find('.mins-num');
  const $secsElem = $countdownElem.find('.secs-num');

  const countId = setInterval(() => {
    const duration = countdown(new Date(), end);
    $daysElem.text(format(duration.days));
    $hrsElem.text(format(duration.hours));
    $minsElem.text(format(duration.minutes));
    $secsElem.text(format(duration.seconds));
  }, 1000);
}

export default banner;
