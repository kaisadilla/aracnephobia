import React, { useEffect } from 'react';
import styles from './Tab.module.scss'
import { getWindowTitle, OsWindow, useOsContext } from 'context/usePortfolioContext';
import { $cl } from 'utils';

export interface TabProps {
    window: OsWindow;
}

function Tab ({
    window,
}: TabProps) {
    const ctx = useOsContext();

    return (
        <div
            className={$cl(
                styles.tab,
                ctx.focusedWindow === window.id && window.isMinimized === false && styles.focused
            )}
            onPointerDown={handlePointerDown}
        >
            {getWindowTitle(window.content)}
        </div>
    );

    function handlePointerDown () {
        if (ctx.focusedWindow === window.id) {
            ctx.setWindowOnTop('0');
            ctx.updateWindow(window.id, {
                ...window,
                isMinimized: true,
            })
        }
        else {
            ctx.setWindowOnTop(window.id);
            ctx.updateWindow(window.id, {
                ...window,
                isMinimized: false,
            })
        }
    }
}

export default Tab;
