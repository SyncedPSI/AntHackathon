import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { isMobileUA } from 'mdetect';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { isEn } from './tool';

import ModalLayer from 'modal-layer';
import ApplyForm from './apply/ApplyForm';

if (isEn()) i18n.changeLanguage('en');

const apply = () => {
  if (isMobileUA()) return;

  render(
    <I18nextProvider i18n={i18n}>
      <ApplyForm type="program" />
    </I18nextProvider>,
    document.getElementById('js-apply-program-modal')
  );

  render(
    <I18nextProvider i18n={i18n}>
      <ApplyForm type="creative" />
    </I18nextProvider>,
    document.getElementById('js-apply-creative-modal')
  );

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
