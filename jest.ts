import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

Enzyme.configure({adapter: new Adapter()});

/*
declare global {
  namespace NodeJS {
    interface Global {
      [key: string]: any
    }
  }
};
*/

/* const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = new JSDOM(documentHTML);


global.window.resizeTo = (width: number, height: number): void => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};
*/

