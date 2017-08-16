import $ from 'jquery';

export const runPage = (path, fn) => {
  const pageID = $('body').attr('id');
  const map = {
    string: () => pageID === path,
    object: () => path.some(x => x === pageID)
  };
  const isAllow = map[typeof path]();

  if (isAllow) {
    fn();
  }
};

export const share = {
  setting: {
    width: 700,
    height: 400
  },
  getCoords: (type) => {
    if(type === 'top') return (window.innerHeight - share.setting.height)/2;
    if(type === 'left') return (window.innerWidth - share.setting.width)/2;
  },
  openWindow(url) {
    window.open(
      url, '',
      `width=${this.setting.width}, height=${this.setting.height}, top=${this.getCoords('top')}, left=${this.getCoords('left')}, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no`);
  },
  run({type, url, text, des, thumb, appkey}) {
    url = encodeURIComponent(url || document.location);
    text = encodeURIComponent(text || document.title);
    des = encodeURIComponent(des || '');
    thumb = thumb || '';
    appkey = appkey || '3896321144';

    let jump;
    switch (type) {
      case 'weibo':
        jump = `http://service.weibo.com/share/share.php?url=${url}&appkey=${appkey}&title=${text}&pic=${thumb}&ralateUid=5033169307`;
        break;
      case 'headlines':
        jump = `https://toutiao.io/contribute?url=${url}&title=${text}`;
        break;
      case 'sohu':
        jump = `http://i.sohu.com/a/app/mblog/add.htm?link=${url}&title=%C2%EC%D2%CF%BF%AA%B7%A2%D5%DF%B4%F3%C8%FC`;
        break;
    }

    share.openWindow(jump);
  }
};


export const isEn = () => {
  const lang = $('html').attr('lang');
  return lang === 'en';
}
