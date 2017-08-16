import i18n from 'i18next';

i18n
  .init({
    lng: 'zh',
    debug: false,
    resources: {
      en: {
        translation: {
          "program": "Programming Contest",
          "creative": "Creativity Challenge",
          "form": {
            "p1": "Name:",
            "p2": "Cellphone:",
            "p3": "Verify",
            "p4": "Email:",
            "p5": "Company:",
            "p6": "Position:",
            "p7": "Industry:",
            "p8": "City:",
            "p9": "Technical Solution Pitch/ Idea Pitch:",
            "p10": "Please enter your Cellphone",
            "p11": "Please enter the verification code",
            "p12": "Email",
            "p13": "Company Name",
            "p14": "200-1000",
            "p15": "Apply",
            "p16": "Technical Solution Pitch/ Idea Pitch:"
          }
        }
      },
      zh: {
        translation: {
          "program": "编程赛报名",
          "creative": "创意赛报名",
          "form": {
            "p1": "姓名：",
            "p2": "手机：",
            "p3": "验证：",
            "p4": "邮箱：",
            "p5": "公司：",
            "p6": "职位：",
            "p7": "行业：",
            "p8": "省市：",
            "p9": "创意方案简介：",
            "p10": "请输入你的手机号码",
            "p11": "请输入注册手机收到的验证码",
            "p12": "电子邮箱",
            "p13": "公司名称",
            "p14": "200-1000字",
            "p15": "提交",
            "p16": "开发方案简介："
          }
        }
      },
    }
  });

export default i18n;
