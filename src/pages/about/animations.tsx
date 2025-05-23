import { DivProps } from "types";
import { $cl } from "utils";
import styles from './animations.module.scss';
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import useVisible from "hooks/useVisible";

interface EnterFromAnimationProps extends DivProps {
    from: 'left' | 'right';
    threshold?: number;
    children?: React.ReactNode;
}

export function EnterFromAnimation ({
    from,
    threshold = 0,
    children,
    className,
    ...divProps
}: EnterFromAnimationProps) {
    const { ref, isVisible } = useVisible({ threshold });

    return (
        <div
            ref={ref}
            className={$cl(
                styles.enterFrom,
                from === 'left' && styles.enterFromLeft,
                from === 'right' && styles.enterFromRight,
                isVisible && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}

interface EnterByScalingUpProps extends DivProps {
    threshold?: number;
    children?: React.ReactNode;
}

export function EnterByScalingUp ({
    threshold = 0.3,
    children,
    className,
    ...divProps
}: EnterByScalingUpProps) {
    const { ref, isVisible } = useVisible({ threshold });

    return (
        <div
            ref={ref}
            className={$cl(
                styles.enterByScalingUp,
                isVisible && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}

export function EnterByScalingDown ({
    threshold = 0.3,
    children,
    className,
    ...divProps
}: EnterByScalingUpProps) {
    const { ref, isVisible } = useVisible({ threshold });

    return (
        <div
            ref={ref}
            className={$cl(
                styles.enterByScalingDown,
                isVisible && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}

interface AppearFromAnimationProps extends DivProps {
    from: 'left' | 'right';
    threshold?: number;
    children?: React.ReactNode;
}

export function AppearFromAnimation ({
    from,
    threshold = 0.8,
    children,
    className,
    ...divProps
}: AppearFromAnimationProps) {
    const { ref, isVisible } = useVisible({ threshold });

    return (
        <div
            ref={ref}
            className={$cl(
                styles.appearFrom,
                from === 'left' && styles.appearFromLeft,
                from === 'right' && styles.appearFromRight,
                isVisible && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}