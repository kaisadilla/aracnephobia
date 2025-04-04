import React from 'react';
import styles from './TaskbarTabs.module.scss';
import Tab from './Tab';

export interface TaskbarTabsProps {
    
}

function TaskbarTabs (props: TaskbarTabsProps) {

    return (
        <div className={styles.taskbarTabs}>
            <Tab />
        </div>
    );
}

export default TaskbarTabs;
