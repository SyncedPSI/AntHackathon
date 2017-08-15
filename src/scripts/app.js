import $ from 'jquery';
import header from './header';
import banner from './banner';
import starBg from './starBg';
import navState from './nav';
import apply from './apply';
import applyProgram from './apply_program';
import applyCreative from './apply_creative';

import toolbar from './toolbar';

import { runPage } from './tool';

$(() => {
  header();

  runPage('page-home', () => {
    starBg();
    banner();
    navState();
    toolbar();
  });
  runPage('page-apply', () => {
    apply();
  })

  runPage('page-apply-creative', () => {
    applyCreative();
  })

  runPage('page-apply-program', () => {
    applyProgram();
  })
});
