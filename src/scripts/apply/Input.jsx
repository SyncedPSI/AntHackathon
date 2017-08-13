import React from 'react';
import PropTypes from 'prop-types';
import { validation } from 'value-validate';

class Input extends React.Component {
  static defaultProps = {
    value: '',
    disabled: false,
    multiline: false,
    className: '',
    status: 'default',
    msg: '',
    rules: '',
    onChange: () => {}
  }

  changeHandle = e => {
    const new_value = e.target.value;
    this.props.onChange(new_value);
  }

  render() {
    const { value, className, disabled, multiline, name, placeholder, status, msg } = this.props;

    const inputElementProps = {
      name,
      className: this.props.className,
      onChange: this.changeHandle,
      disabled,
      value,
      placeholder
    };
    const messageElement = <div className="message">*{msg}</div>;

    return (
      <div className="apply-input">
        {React.createElement(multiline ? 'textarea' : 'input', inputElementProps)}
        { status === 'error' ? messageElement : '' }
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ]),
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  status: PropTypes.string,
  msg: PropTypes.string
};

export default Input;
