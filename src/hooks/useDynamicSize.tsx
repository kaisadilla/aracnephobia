import { useEffect, useState } from "react";

export default function useDynamicHook(ref: React.RefObject<HTMLElement | null>) {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);

    useEffect(() => {
        if (ref.current === null) return;

        const handleResize = () => {
            if (ref.current === null) return;

            const rect = ref.current?.getBoundingClientRect();

            setTop(rect.top);
            setLeft(rect.left);
            setHeight(ref.current.clientHeight);
            setWidth(ref.current.clientWidth);
        }

        const observer = new ResizeObserver(handleResize);
        observer.observe(ref.current);

        handleResize();

        return () => observer.disconnect();
    }, [ref.current, ref.current?.clientWidth])

    return {
        top,
        left,
        height,
        width,
    };
}