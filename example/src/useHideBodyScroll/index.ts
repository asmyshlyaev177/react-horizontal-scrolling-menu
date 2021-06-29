import React from 'react';

import './style.css'

const noScroll = 'no-scroll'

const hideBodyScrollBar = () => document.body.classList.add(noScroll)
const showBodyScrollBar = () => document.body.classList.remove(noScroll)

function useHideBodyScroll() {
    const [hidden, setHidden] = React.useState(false)

    React.useEffect(() => {
        hidden ? hideBodyScrollBar() : showBodyScrollBar()

        return showBodyScrollBar
    }, [hidden])

    const hideScroll = React.useCallback(() => setHidden(true), [])
    const showScroll = React.useCallback(() => setHidden(false), [])
    return { hideScroll, showScroll }
}

export default useHideBodyScroll;
