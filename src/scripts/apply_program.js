import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { isEn } from './tool';

import ApplyForm from './apply/ApplyForm';

if (isEn()) i18n.changeLanguage('en');

const applyProgram = () => {
  render(
    <I18nextProvider i18n={i18n}>
      <ApplyForm type="program" />
    </I18nextProvider>,
    document.getElementById('js-apply-program')
  );
}

export default applyProgram;
