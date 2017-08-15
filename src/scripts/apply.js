import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { isMobileUA } from 'mdetect';

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


  if (isMobileUA()) return;
  const $programBtn = $('#js-apply-program-btn');
  const programModal = new ModalLayer('#js-apply-program-modal');

  $programBtn.on('click', e => {
    e.preventDefault();
    programModal.open();
  });

  const $creativeBtn = $('#js-apply-creative-btn');
  const creativeModal = new ModalLayer('#js-apply-creative-modal');

  $creativeBtn.on('click', e => {
    e.preventDefault();
    creativeModal.open();
  });
}

export default apply;
