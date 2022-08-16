import React from 'react';
import Header from '~/components/layout/Header';
import { ChildrenType } from '~/types';
import useStyles from './styles';

type LayoutPropsType = ChildrenType;

const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  const styles = useStyles();

  return (
    <div css={styles.layout}>
      <Header />
      <div css={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
