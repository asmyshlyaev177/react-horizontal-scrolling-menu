import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

Enzyme.configure({adapter: new Adapter()});

global.shallow = shallow;
global.mount = mount;
global.React = React;
global.PropTypes = PropTypes;

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};

