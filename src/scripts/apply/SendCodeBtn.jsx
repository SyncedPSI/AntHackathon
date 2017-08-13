import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendCodeBtn extends Component {
  static defaultProps ={
    label: '发送验证码',
    codeCycle: 30,
    className: '',
    onSendSuccess: () => {},
    onSendFail: () => {}
  }

  state = {
    label: this.props.label,
    isWaiting: false
  }

  componentWillUnmount() {
    if (this.countdown) clearInterval(this.countdown);
  }

  sendVerificationCode = () => {
    if (this.state.isWaiting) return;

    $.ajax({
      url: this.props.axUrl,
      method: 'POST',
      data: this.props.axData
    })
    .done(() => {
      let time = this.props.codeCycle;
      this.setState({ label: `重新发送(${time})`, isWaiting: true });
      this.props.onSendSuccess();
      this.countdown = setInterval(() => {
        time -= 1;
        if (time <= 0) {
          this.setState({ label: '重新发送', isWaiting: false });
          clearInterval(this.countdown);
          return;
        }
        this.setState({ label: `重新发送(${time})` });
      }, 1000);
    })
    .fail(xhr => {
      this.props.onSendFail(xhr);
    });
  }

  render() {
    return (
      <a
        className={`send-code-btn ${this.props.className}`}
        href="javascript:;"
        onClick={this.sendVerificationCode}
      >
        {this.state.label}
      </a>
    );
  }
}

SendCodeBtn.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  axUrl: PropTypes.string.isRequired,
  axData: PropTypes.object.isRequired,
  codeCycle: PropTypes.number,
  onSendSuccess: PropTypes.func,
  onSendFail: PropTypes.func
};

export default SendCodeBtn;
