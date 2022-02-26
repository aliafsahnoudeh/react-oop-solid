import React, { ReactNode } from 'react';

import styles from './CardLayout.module.scss';

interface IProps {
  children: ReactNode
}

function CardLayout({ children }: IProps) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export default CardLayout;
