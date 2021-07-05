import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Dashboard from "../pages/dashboard/Dashboard";
import SiteHeader from "./header";
import useStyles from "../styles/style";
import LeftSideBar from "./leftSifeBar";

// Main Layout File
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

      {/* include application's common header file */}
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
            <Grid item xs={12}>
              <Paper className={styleClasses.paper}>

                {/* this would be the place to introduce the router, in case of multi-route application  */}
                {/* could be a container  */}
                <Dashboard></Dashboard>

              </Paper>
            </Grid>
          </Grid>

          {/* application's common footer file */}
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
