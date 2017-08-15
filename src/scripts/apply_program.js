import React from 'react';
import { render } from 'react-dom';

import ApplyForm from './apply/ApplyForm';

const applyProgram = () => {
  render(
    <ApplyForm type="program" />,
    document.getElementById('js-apply-program')
  );
}

export default applyProgram;
