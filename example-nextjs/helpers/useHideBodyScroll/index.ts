import React from 'react';

// import './style.css'
// NOTE: styles in nextjsRoot/styles/globals.css

const noScroll = 'no-scroll';

const getBody = () => {
  if (window !== undefined) {
    return window.document.body;
  }

  return new HTMLElement();
};

const hideBodyScrollBar = () => getBody().classList.add(noScroll);

const showBodyScrollBar = () => getBody().classList.remove(noScroll);

function useHideBodyScroll() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    hidden ? hideBodyScrollBar() : showBodyScrollBar();

    return showBodyScrollBar;
  }, [hidden]);

  const hideScroll = React.useCallback(() => setHidden(true), []);
  const showScroll = React.useCallback(() => setHidden(false), []);
  return { hideScroll, showScroll };
}

export default useHideBodyScroll;
