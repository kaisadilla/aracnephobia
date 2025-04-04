import React from 'react';
import styles from './window.module.scss';
import SiteImage from 'components/SiteImage';
import { IMG } from 'img/img';
import ChromaticAberrationImage from 'components/ChromaticAberrationImage';
import { Folder } from 'context/usePortfolioContext';

export interface WindowProps {
    folder: Folder;
}

function Window ({
    folder,
}: WindowProps) {

    return (
        <div className={styles.window}>
            <div className={styles.titlebar}>
                <div className={styles.back}>
                    &lt;
                </div>
                <div className={styles.title}>
                    {folder.name}
                </div>
                <div className={styles.minimize}>
                    _
                </div>
                <div className={styles.maximize}>
                    O
                </div>
                <div className={styles.close}>
                    X
                </div>
            </div>
            <div className={styles.content}>
                <_ListView folders={folder} />
            </div>
        </div>
    );
}

interface _ListViewProps {
    folders: Folder;
}

function _ListView ({
    folders,
}: _ListViewProps) {

    return (
        <div className={styles.listView}>
            {folders.content.map(f => <div key={f.name} className={styles.folder}>
                <ChromaticAberrationImage className={styles.icon} image={IMG.os.folder} />
                <span>{f.name}</span>
            </div>)}
        </div>
    );
}


export default Window;
