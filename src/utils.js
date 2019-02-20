const notUndefOrNull = val => val !== undefined && val !== null;
const getClientRect = elem => {
  if (!elem || !elem.getBoundingClientRect || typeof elem.getBoundingClientRect !== 'function') return {width: 0, x: 0};

  const {x, left = 0, width = 0} = elem.getBoundingClientRect();
  return {width, x: !isNaN(x) ? +x : +left};
};

const formatTranslate = val => +parseFloat(val).toFixed(3);
const translateIsValid = val =>
  typeof val === 'number' && !isNaN(parseFloat(val));
const validateTranslate = (value, defaultValue) =>
  translateIsValid(value)
    ? formatTranslate(value)
    : formatTranslate(defaultValue);

const testPassiveEventSupport = () => {
  let passiveSupported = false;

  try {
    let options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveSupported = true;
        return false;
      },
    };

    window.addEventListener('testPassiveEventSupport', options, options);
    window.removeEventListener('testPassiveEventSupport', options, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
};

export {
  formatTranslate,
  notUndefOrNull,
  getClientRect,
  testPassiveEventSupport,
  validateTranslate,
  translateIsValid,
};
