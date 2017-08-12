import $ from 'jquery';
import banner from './banner';
import starBg from './starBg';
import navState from './nav';

$(() => {
  starBg();
  banner();
  navState();
});
