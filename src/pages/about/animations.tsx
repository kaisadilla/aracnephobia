import { DivProps } from "types";
import { $cl } from "utils";
import styles from './animations.module.scss';
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface EnterFromAnimationProps extends DivProps {
    from: 'left' | 'right';
    children: React.ReactNode;
}

export function EnterFromAnimation ({
    from,
    children,
    className,
    ...divProps
}: EnterFromAnimationProps) {
    const [ref, inView, entry] = useInView({ threshold: 0 });

    return (
        <div
            ref={ref}
            className={$cl(
                styles.enterFrom,
                from === 'left' && styles.enterFromLeft,
                from === 'right' && styles.enterFromRight,
                inView && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}

interface EnterByScalingUpProps extends DivProps {
    children: React.ReactNode;
}

export function EnterByScalingUp ({
    children,
    className,
    ...divProps
}: EnterByScalingUpProps) {
    const [ref, inView, entry] = useInView({ threshold: 0 });

    useEffect(() => console.log(inView), [inView]);

    return (
        <div
            ref={ref}
            className={$cl(
                styles.enterByScalingUp,
                inView && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}
