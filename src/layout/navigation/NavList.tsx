import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

import NavItem from './NavItem';

const NavList: React.FC = () => {
  return (
    <>
      <NavItem to="/" icon={<DashboardIcon />} primaryText="Profile" />
      <NavItem
        to="/technologies"
        icon={<AssignmentIcon />}
        primaryText="Technologies"
      />
      <NavItem
        to="/experience"
        icon={<AssignmentIcon />}
        primaryText="Experience"
      />
      <NavItem
        to="/education"
        icon={<AssignmentIcon />}
        primaryText="Education"
      />
      <NavItem to="/connect" icon={<AssignmentIcon />} primaryText="Connect" />
    </>
  );
};

export default NavList;
