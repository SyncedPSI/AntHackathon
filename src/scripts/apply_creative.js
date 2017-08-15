import React from 'react';
import { render } from 'react-dom';

import ApplyForm from './apply/ApplyForm';

const applyCreative = () => {
  render(
    <ApplyForm type="creative" />,
    document.getElementById('js-apply-creative')
  );
}

export default applyCreative;
