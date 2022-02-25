import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface IProps {
  children: ReactNode
}

function Layout({ children }: IProps) {
  return (
    <div className={styles['main-layout']}>
      {children}
    </div>
  );
}

export default Layout;
