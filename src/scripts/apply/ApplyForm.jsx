import React from 'react';
import Input from './Input';
import SendCodeBtn from './SendCodeBtn';
import SelectCity from './SelectCity';

class ApplyForm extends React.Component {
  state = {
    name: '',
    city: '',
    phone: '',
    code: '',
    email: '',
    company: '',
    job: '',
    industry: '',
    intro: ''
  }

  valueChange = (value, type) => {
    this.setState({ [type]: value });
  }

  render() {
    return (
      <div className={`apply-form apply-form--${this.props.type}`}>
        <div className="apply-form__title text-pingfang">
          {`${this.props.type === 'program' ? '编程' : '创意'}赛报名`}
        </div>
        <div className="apply-form__content">
          <div className="apply-form__filed">
            <div className="apply-form__left">
              姓名：
            </div>
            <div className="apply-form__right">
              <Input
                onChange={value => this.valueChange(value, 'name')}
                value={this.state.name}
                rules={['required']}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              手机：
            </div>
            <div className="apply-form__right apply-form__right--phone">
              <Input
                placeholder="请输入你的手机号码"
                onChange={value => this.valueChange(value, 'phone')}
                value={this.state.phone}
              />
              <SendCodeBtn
                axUrl="/apply"
                axData={{
                  number: this.state.phone
                }}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              验证：
            </div>
            <div className="apply-form__right">
              <Input
                placeholder="请输入注册手机收到的验证码"
                onChange={value => this.valueChange(value, 'code')}
                value={this.state.code}
                rules={['required']}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              邮箱：
            </div>
            <div className="apply-form__right">
              <Input
                placeholder="电子邮箱"
                onChange={value => this.valueChange(value, 'email')}
                value={this.state.email}
                rules={['required', { type: 'email', msg: '请输入正确格式的邮箱地址！'}]}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              公司：
            </div>
            <div className="apply-form__right">
              <Input
                placeholder="公司名称"
                onChange={value => this.valueChange(value, 'company')}
                value={this.state.company}
                rules={['required']}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              职位：
            </div>
            <div className="apply-form__right">
              <Input
                onChange={value => this.valueChange(value, 'job')}
                value={this.state.job}
                rules={['required']}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              行业：
            </div>
            <div className="apply-form__right">
              <Input
                onChange={value => this.valueChange(value, 'industry')}
                value={this.state.industry}
                rules={['required']}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              省市：
            </div>
            <div className="apply-form__right">
              <SelectCity onChange={value => this.valueChange(value, 'city')}>
                <input value={this.state.city} />
              </SelectCity>
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              {`${this.props.type === 'program' ? '开发' : '创意'}方案简介：`}
            </div>
            <div className="apply-form__right">
              <Input
                placeholder="200-1000字"
                multiline
                onChange={value => this.valueChange(value, 'intro')}
                value={this.state.intro}
                rules={['required']}
              />
            </div>
          </div>
        </div>
        <div className="apply-form__submit text-pingfang">
          提交
        </div>
      </div>
    )
  }
}

export default ApplyForm;
