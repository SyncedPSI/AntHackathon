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
