import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import clsx from "clsx";
import useStyles from "../styles/style";

interface sidebarProps {
  drawerOpen: boolean;
  handleDrawerClose: () => void;
}
function LeftSideBar(props: sidebarProps) {
  const styleClasses = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          styleClasses.drawerPaper,
          !props.drawerOpen && styleClasses.drawerPaperClose
        ),
      }}
      open={props.drawerOpen}
    >
      <div className={styleClasses.toolbarIcon}>
        <IconButton onClick={props.handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
}

export default LeftSideBar;
