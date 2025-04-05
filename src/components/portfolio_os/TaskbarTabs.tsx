import React from 'react';
import styles from './TaskbarTabs.module.scss';
import Tab from './Tab';
import { useOsContext } from 'context/usePortfolioContext';

export interface TaskbarTabsProps {
    
}

function TaskbarTabs (props: TaskbarTabsProps) {
    const ctx = useOsContext();

    return (
        <div className={styles.taskbarTabs}>
            {Object.keys(ctx.openWindows).map(k => ctx.openWindows[k]).map(w => (
                <Tab
                    key={w.id}
                    window={w}
                />
            ))}
        </div>
    );
}

export default TaskbarTabs;
