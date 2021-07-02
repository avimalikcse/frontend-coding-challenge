import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import useStyles from "./../styles/style";
import clsx from "clsx";

interface siteHeaerProps {
    drawerOpen:boolean,
    handleDrawerOpen:()=>void
}
const SiteHeader = (props:siteHeaerProps) => {
  const styleClasses = useStyles() 
  const open = props.drawerOpen
  return (
    <AppBar
      position="absolute"
      className={clsx(styleClasses.appBar, open && styleClasses.appBarShift)}
    >
      <Toolbar className={styleClasses.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          className={clsx(
            styleClasses.menuButton,
            props.drawerOpen && styleClasses.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={styleClasses.title}
        >
          Absence Manager Tool
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
