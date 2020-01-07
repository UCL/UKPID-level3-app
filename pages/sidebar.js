import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const SideBar = () => (
  <Drawer
    variant="permanent"
    anchor="left"
  >
    <Divider />
  </Drawer>
);

export default SideBar;
