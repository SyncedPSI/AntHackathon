import React from 'react';
import Cascader from 'rc-cascader';
import 'rc-cascader/assets/index.css';

import addressOptions from './cityData.json';

class SelectCity extends React.PureComponent {
  onChange = (value, selectedOptions) => {
    const inputValue = selectedOptions.map(o => o.label).join(' - ');
    this.props.onChange(inputValue);
  }

  render() {
    return (
      <div className="select-city">
        <Cascader
          options={addressOptions}
          onChange={this.onChange}
          popupClassName="select-city-popup"
        >
          {this.props.children}
        </Cascader>
      </div>
    )
  }
}

export default SelectCity;
