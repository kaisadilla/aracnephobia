import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { DivProps } from 'types';
import styles from './UfoGame.module.scss';

export interface UfoGameProps extends DivProps {
    
}

function UfoGame (props: UfoGameProps) {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "/unity/ufo-game/aracnephobia-game.loader.js",
        dataUrl: "/unity/ufo-game/aracnephobia-game.data",
        frameworkUrl: "/unity/ufo-game/aracnephobia-game.framework.js",
        codeUrl: "/unity/ufo-game/aracnephobia-game.wasm",
    })

    return (
        <div className={styles.ufoGame}>
            <Unity
                unityProvider={unityProvider}
                style={{width: "100%", aspectRatio: "1075 / 410" }}
            />
        </div>
    );
}

export default UfoGame;
