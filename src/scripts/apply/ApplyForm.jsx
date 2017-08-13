import React from 'react';
import Input from './Input';
import SendCodeBtn from './SendCodeBtn';
import SelectCity from './SelectCity';

import { validation } from 'value-validate';

class ApplyForm extends React.Component {
  state = {
    name: { value: '', status: 'default', msg: '', rules: ['required'] },
    phone: { value: '', status: 'default', msg: '', rules: ['required', 'phone'] },
    code: { value: '', status: 'default', msg: '', rules: ['required'] },
    email: { value: '', status: 'default', msg: '', rules: ['required', 'email'] },
    company: { value: '', status: 'default', msg: '', rules: ['required'] },
    job: { value: '', status: 'default', msg: '', rules: ['required'] },
    industry: { value: '', status: 'default', msg: '', rules: ['required'] },
    city: { value: '', status: 'default', msg: '', rules: ['required'] },
    intro: { value: '', status: 'default', msg: '', rules: ['required'] }
  }

  onSubmit = () => {
    ['name', 'code', 'email', 'company', 'job', 'industry', 'city', 'intro'].forEach(type => {
      this.verify(this.state[type].value, type);
    })
  }

  valueChange = (value, type) => {
    this.setState({ [type]: { ...this.state[type], value } }, () => {
      this.verify(value, type);
    });
  }

  verify = (value, type)  => {
    validation(value, this.state[type]['rules'], result => {
      const { isPass, msg } = result;
      this.setState({ [type]: {...this.state[type], msg, status: isPass ? 'pass' : 'error' }});
    });
  }

  render() {
    const { name, phone, code, email, company, job, industry, city, intro} = this.state;

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
                value={name.value}
                status={name.status}
                msg={name.msg}
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
                value={phone.value}
                status={phone.status}
                msg={phone.msg}
              />
              <SendCodeBtn
                axUrl="/apply"
                axData={{
                  number: phone
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
                value={code.value}
                status={code.status}
                msg={code.msg}
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
                value={email.value}
                status={email.status}
                msg={email.msg}
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
                value={company.value}
                status={company.status}
                msg={company.msg}
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
                value={job.value}
                status={job.status}
                msg={job.msg}
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
                value={industry.value}
                status={industry.status}
                msg={industry.msg}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              省市：
            </div>
            <div className="apply-form__right">
              <SelectCity onChange={value => this.valueChange(value, 'city')}>
                <div>
                  <Input
                    value={city.value}
                    status={city.status}
                    msg={city.msg}
                  />
                </div>
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
                value={intro.value}
                status={intro.status}
                msg={intro.msg}
              />
            </div>
          </div>
        </div>
        <a
          href="javascript:;"
          className="apply-form__submit text-pingfang"
          onClick={this.onSubmit}
        >
          提交
        </a>
      </div>
    )
  }
}

export default ApplyForm;
