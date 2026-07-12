import { useEffect, useState } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

function useVisible (options?: IntersectionOptions) {
  const VH = window.innerHeight / 2;

  const [ref, inView, entry] = useInView(options);
  const [isVisible, setVisible] = useState(false);

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
  }, [inView, entry]);

  return {
    ref,
    isVisible,
    element: entry,
  }
}

export default useVisible;
