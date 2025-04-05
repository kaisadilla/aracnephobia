import React, { useEffect } from 'react';
import styles from './Tab.module.scss'
import { OsWindow, useOsContext } from 'context/usePortfolioContext';
import { $cl } from 'utils';

export interface TabProps {
    window: OsWindow;
}

function Tab ({
    window,
}: TabProps) {
    const ctx = useOsContext();
    
    useEffect(() => {
        console.log(ctx.focusedWindow);
    }, [ctx.focusedWindow])

    return (
        <div
            className={$cl(
                styles.tab,
                ctx.focusedWindow === window.id && window.isMinimized === false && styles.focused
            )}
            onPointerDown={handlePointerDown}
        >
            {window.file.name}
        </div>
    );

    function handlePointerDown () {
        ctx.setWindowOnTop(window.id);
        ctx.updateWindow(window.id, {
            ...window,
            isMinimized: false,
        })
    }
}

export default Tab;
