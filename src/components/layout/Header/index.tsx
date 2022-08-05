import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ROUTES } from '~/data/routes';
import { NavLink, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import useStyles from './styles';

const Header: React.FC = () => {
  const styles = useStyles();

  const navLinks = Object.values(ROUTES).filter(({ TOP_NAV }) => TOP_NAV);

  const renderLink = ({ PATH, LABEL }: typeof navLinks[number]) => (
    <ListItem css={styles.listItem}>
      <Button variant="text" color="secondary">
        <NavLink css={styles.listItemLink} to={PATH}>
          {LABEL}
        </NavLink>
      </Button>
    </ListItem>
  );

  return (
    <AppBar position="sticky" css={styles.appBar}>
      <IconButton css={styles.logo}>
        <Link to={ROUTES.LIST.PATH} css={styles.logoLink}>
          <Brightness7Icon />
        </Link>
      </IconButton>
      <nav>
        <List css={styles.list}>{navLinks.map(renderLink)}</List>
      </nav>
    </AppBar>
  );
};

export default Header;
