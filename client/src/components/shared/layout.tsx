import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  mainListItems,
  secondaryListItems,
} from "./listItems";
import Dashboard from "../pages/dashboard/Dashboard";
import SiteHeader from "./header";
import clsx from "clsx";
import useStyles from "../styles/style";
import LeftSideBar from "./leftSifeBar";

function Layout() {
  const styleClasses = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    console.log("df");
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={styleClasses.root}>
      <CssBaseline />
      <SiteHeader
        drawerOpen={open}
        handleDrawerOpen={handleDrawerOpen}
      ></SiteHeader>
      <LeftSideBar
        drawerOpen={open}
        handleDrawerClose={handleDrawerClose}
      ></LeftSideBar>
      <main className={styleClasses.content}>
        <div className={styleClasses.appBarSpacer} />
        <Container maxWidth="lg" className={styleClasses.container}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={styleClasses.paper}>
                <Dashboard></Dashboard>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://material-ui.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Layout;
