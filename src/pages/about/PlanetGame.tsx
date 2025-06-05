import React, { useEffect, useRef } from 'react';
import styles from './PlanetGame.module.scss';
import Phaser from "phaser";
import { IMG } from 'assets/img/img';

export interface PlanetGameProps {
    
}

function PlanetGame (props: PlanetGameProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current === null) return;

        const game = new Phaser.Game({
            type: Phaser.AUTO,
            width: 800,
            height: 500,
            parent: ref.current,
            scene: Scene,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 300 },
                    debug: false,
                },
            },
        });

        return () => {
            game.destroy(true);
        }
    }, [ref]);

    return (
        <div className={styles.game}>
            <div ref={ref} />
        </div>
    );
}

export default PlanetGame;

class Scene extends Phaser.Scene {
    player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    preload () {
        this.load.image("planet", IMG.planetGame.planet);
    }

    create () {
        this.player = this.physics.add.sprite(100, 450, "planet");
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

    }

    update () {

    }
}