import React from 'react';
import Cascader from 'rc-cascader';
import 'rc-cascader/assets/index.css';

const addressOptions = [{
  label: '福建',
  value: 'fj',
  children: [{
    label: '福州',
    value: 'fuzhou',
    children: [{
      label: '马尾',
      value: 'mawei',
    }],
  }, {
    label: '泉州',
    value: 'quanzhou',
  }],
}, {
  label: '占位1',
  value: 'zw1',
}, {
  label: '占位2',
  value: 'zw2',
}, {
  label: '占位3',
  value: 'zw3',
}, {
  label: '占位4',
  value: 'zw4',
}, {
  label: '占位5',
  value: 'zw5',
}, {
  label: '浙江',
  value: 'zj',
  children: [{
    label: '杭州',
    value: 'hangzhou',
    children: [{
      label: '余杭',
      value: 'yuhang',
    }],
  }],
}, {
  label: '北京',
  value: 'bj',
  children: [{
    label: '朝阳区',
    value: 'chaoyang',
  }, {
    label: '海淀区',
    value: 'haidian',
  }],
}];

const defaultOptions = [{
  label: '浙江',
  value: 'zj',
}, {
  label: '杭州',
  value: 'hangzhou',
}, {
  label: '余杭',
  value: 'yuhang',
}];

class SelectCity extends React.PureComponent {
  onChange = (value, selectedOptions) => {
    const inputValue = selectedOptions.map(o => o.label).join(', ');
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
