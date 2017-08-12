import $ from 'jquery';
import banner from './banner';
import starBg from './starBg';
import navState from './nav';

import { runPage } from './tool';

$(() => {
  runPage('page-home', () => {
    starBg();
    banner();
    navState();
  })
});
