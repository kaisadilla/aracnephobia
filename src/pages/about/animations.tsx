import { DivProps } from "types";
import { $cl } from "utils";
import styles from './animations.module.scss';
import { useCallback, useEffect, useRef, useState } from "react";
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

interface AppearFromAnimationProps extends DivProps {
    from: 'left' | 'right';
    children: React.ReactNode;
}

export function AppearFromAnimation ({
    from,
    children,
    className,
    ...divProps
}: AppearFromAnimationProps) {
    const VH = window.innerHeight / 2;

    const regRef = useRef<HTMLDivElement>(null);

    const [ref, inView, entry] = useInView({ threshold: 0.8 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!entry) return;

        const top = entry.target.getBoundingClientRect().top;

        setVisible(prev => {
            // If the element is already visible.
            if (prev) {
                // If the element is now above the viewport, we keep it visible,
                // even if it's no longer in view.
                // We determine the element to be above the viewport if it's top
                // is above 50% of the page's viewport.
                if (top < VH) return true;
            }

            // In all other cases, whether it's visible depends on whether it's
            // currently in view.
            return inView;
        });
    }, [inView]);

    return (
        <div
            ref={ref}
            className={$cl(
                styles.appearFrom,
                from === 'left' && styles.appearFromLeft,
                from === 'right' && styles.appearFromRight,
                visible && styles.visible,
                className
            )}
            {...divProps}
        >
            {children}
        </div>
    );
}