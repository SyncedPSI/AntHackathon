import $ from 'jquery';
import banner from './banner';
import starBg from './starBg';
import navState from './nav';
import apply from './apply';
import toolbar from './toolbar';

import { runPage } from './tool';

$(() => {
  runPage('page-home', () => {
    starBg();
    banner();
    navState();
    toolbar();
  });
  runPage('page-apply', () => {
    apply();
  })
});
