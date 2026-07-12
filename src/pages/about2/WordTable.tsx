import React, { forwardRef } from 'react';
import { $cl } from 'utils';
import styles from "./WordTable.module.scss";

export interface WordTableProps {
  className?: string;
  children?: React.ReactNode;
}

const WordTable = forwardRef<HTMLDivElement, WordTableProps>(function WordTable ({
  className,
  children,
}: WordTableProps, ref) {

  return (
    <div ref={ref} className={$cl(styles.wordTable, className)}>
      {children}
    </div>
  );
})

export default WordTable;
