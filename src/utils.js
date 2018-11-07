const notUndefOrNull = val => val !== undefined && val !== null;
const getClientRect = elem => {
  const { x, left, width } = elem.getBoundingClientRect();
  return { width, x: !isNaN(x) ? +x : +left };
};

const testPassiveEventSupport = () => {
  let passiveSupported = false;

  try {
    let options = {
      get passive() { // This function will be called when the browser
        // attempts to access the passive property.
        passiveSupported = true;
        return false;
      }
    };

    window.addEventListener('testPassiveEventSupport', options, options);
    window.removeEventListener('testPassiveEventSupport', options, options);
  } catch(err) {
    passiveSupported = false;
  }
  return passiveSupported;
};

export { notUndefOrNull, getClientRect, testPassiveEventSupport };
