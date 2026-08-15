import { useRef, useState } from 'react';
import type { DivProps } from 'types';
import { $cl } from 'utils';
import styles from './LeftPanel.module.scss';

const DRAG_THRESHOLD = 50;

export interface LeftPanelProps extends DivProps {
  open: boolean;
  onChangeOpen: (open: boolean) => void;
  children: React.ReactNode;
}

function LeftPanel ({
  open,
  onChangeOpen,
  children,
  className,
  ...divProps
}: LeftPanelProps) {
  if (window.innerWidth >= 768) open = true;
  
  const [ dragDelta, setDragDelta ] = useState(0);
  const [ dragging, setDragging ] = useState(false);

  const xStart = useRef<number>(null);

  return (
    <div
      className={$cl(styles.panel, className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      data-open={open}
      {...divProps}
    >
      {open === false && <div className={styles.dragger} />}
      {open && children}
    </div>
  );

  function onPointerDown (evt: React.PointerEvent) {
    if (window.innerWidth >= 768) return;

    xStart.current = evt.clientX;
    setDragging(true);
  }

  function onPointerMove (evt: React.PointerEvent) {
    if (!dragging || xStart.current === null) return;

    setDragDelta(evt.clientX - xStart.current);
  }

  function onPointerUp () {
    if (!dragging) return;

    if (open === false && dragDelta >= DRAG_THRESHOLD) {
      onChangeOpen(true);
    }
    else if (open && dragDelta <= -DRAG_THRESHOLD) { 
      onChangeOpen(false);
    }

    xStart.current = null;
  }
}

export default LeftPanel;
