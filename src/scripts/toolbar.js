import $ from 'jquery';
import { share } from './tool';

const toolbar = () => {
  $('.share-btn').on('click', function () {
    const type = $(this).data('type');
    share.run({ type });
  });
}

export default toolbar;
