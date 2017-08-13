import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

import ModalLayer from 'modal-layer';
import ApplyForm from './apply/ApplyForm';

const apply = () => {
  render(
    <ApplyForm type="program" />,
    document.getElementById('js-apply-program-modal')
  );

  render(
    <ApplyForm type="creative" />,
    document.getElementById('js-apply-creative-modal')
  );


  const $programBtn = $('#js-apply-program-btn');
  const programModal = new ModalLayer('#js-apply-program-modal');

  $programBtn.on('click', () => {
    programModal.open();
  });

  const $creativeBtn = $('#js-apply-creative-btn');
  const creativeModal = new ModalLayer('#js-apply-creative-modal');

  $creativeBtn.on('click', () => {
    creativeModal.open();
  });
}

export default apply;
