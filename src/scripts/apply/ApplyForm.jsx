import React from 'react';
import Input from './Input';
import SelectCity from './SelectCity';
import { translate } from 'react-i18next';

import { validation } from 'value-validate';
import { isEn } from '../tool';

@translate()
class ApplyForm extends React.Component {
  state = {
    name: { value: '', status: 'default', msg: '', rules: ['required'] },
    phone: { value: '', status: 'default', msg: '', rules: ['required', 'phone'] },
    email: { value: '', status: 'default', msg: '', rules: ['required', 'email'] },
    company: { value: '', status: 'default', msg: '', rules: ['required'] },
    job: { value: '', status: 'default', msg: '', rules: ['required'] },
    industry: { value: '', status: 'default', msg: '', rules: ['required'] },
    city: { value: '', status: 'default', msg: '', rules: ['required'] },
    intro: { value: '', status: 'default', msg: '', rules: ['required', 'count-gts-200', 'count-lts-1000'] }
  }

  onSubmit = () => {
    ['name', 'phone', 'email', 'company', 'job', 'industry', 'city', 'intro'].forEach(type => {
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
    const { t } = this.props;
    const { name, phone, code, email, company, job, industry, city, intro} = this.state;

    return (
      <div className={`apply-form apply-form--${this.props.type}`}>
        <div className="apply-form__title text-pingfang">
          {`${this.props.type === 'program' ? t('program') : t('creative')}`}
        </div>
        <div className="apply-form__content">
          <div className="apply-form__filed">
            <div className="apply-form__left">
              {t('form.p1')}
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
              {t('form.p2')}
            </div>
            <div className="apply-form__right">
              <Input
                placeholder={t('form.p10')}
                onChange={value => this.valueChange(value, 'phone')}
                value={phone.value}
                status={phone.status}
                msg={phone.msg}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              {t('form.p4')}
            </div>
            <div className="apply-form__right">
              <Input
                placeholder={t('form.p12')}
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
              {t('form.p5')}
            </div>
            <div className="apply-form__right">
              <Input
                placeholder={t('form.p13')}
                onChange={value => this.valueChange(value, 'company')}
                value={company.value}
                status={company.status}
                msg={company.msg}
              />
            </div>
          </div>
          <div className="apply-form__filed">
            <div className="apply-form__left">
              {t('form.p6')}
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
              {t('form.p7')}
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


          {
            isEn() ?
              <div className="apply-form__filed">
                <div className="apply-form__left">
                  {t('form.p8')}
                </div>
                <div className="apply-form__right">
                  <Input
                    onChange={value => this.valueChange(value, 'city')}
                    value={city.value}
                    status={city.status}
                    msg={city.msg}
                  />
                </div>
              </div>
             :
            <div className="apply-form__filed">
              <div className="apply-form__left">
                {t('form.p8')}
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
          }


          <div className="apply-form__filed">
            <div className="apply-form__left">
              {`${this.props.type === 'program' ? t('form.p16') : t('form.p9')}`}
            </div>
            <div className="apply-form__right">
              <Input
                placeholder={t('form.p14')}
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
          {t('form.p15')}
        </a>
      </div>
    )
  }
}

export default ApplyForm;
