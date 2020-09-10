import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import ShareIcon from '@material-ui/icons/Share';
import { useTranslation } from 'react-i18next';

import NavItem from './NavItem';

const NavList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavItem
        to="/"
        icon={<AccountCircleIcon />}
        primaryText={t('nav_profile')}
      />
      <NavItem
        to="/technologies"
        icon={<CodeIcon />}
        primaryText={t('nav_technologies')}
      />
      <NavItem
        to="/experience"
        icon={<WorkOutlineIcon />}
        primaryText={t('nav_experience')}
      />
      <NavItem
        to="/education"
        icon={<SchoolIcon />}
        primaryText={t('nav_education')}
      />
      <NavItem
        to="/connect"
        icon={<ShareIcon />}
        primaryText={t('nav_connect')}
      />
    </>
  );
};

export default NavList;
