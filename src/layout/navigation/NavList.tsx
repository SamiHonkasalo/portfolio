import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CodeIcon from '@material-ui/icons/Code';
import { useTranslation } from 'react-i18next';

import NavItem from './NavItem';

const NavList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavItem to="/" icon={<DashboardIcon />} primaryText={t('nav_profile')} />
      <NavItem
        to="/technologies"
        icon={<CodeIcon />}
        primaryText={t('nav_technologies')}
      />
      <NavItem
        to="/experience"
        icon={<AssignmentIcon />}
        primaryText={t('nav_experience')}
      />
      <NavItem
        to="/education"
        icon={<AssignmentIcon />}
        primaryText={t('nav_education')}
      />
      <NavItem
        to="/connect"
        icon={<AssignmentIcon />}
        primaryText={t('nav_connect')}
      />
    </>
  );
};

export default NavList;
