import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Grid, Typography, AppBar, Toolbar, BottomNavigation } from "@material-ui/core"
import logo from "./img/hotbeans.png"

import Home from "./components/home"
import About from "./components/about"
import Team from "./components/team"
import Jobs from "./components/jobs"
import Contact from "./components/contact"
import Learn from "./components/learn"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkText: {
    textDecoration: 'none',
    color: 'white',
    margin: '2px',
    verticalAlign: 'middle',
  },
  headerStyle:{
    backgroundColor: '#1d3557',
  },
  footerStyle:{
    backgroundColor: '#1d3557',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: '30px',
    },
  footerText:{
    color: 'white',
    padding: '5px',
  },
  footerDiv:{
    marginTop: '30px',
  },
  logoStyle:{
    marginLeft: '10px',
  },
  contactStyle:{
    marginRight: '10px',
    textDecoration: 'none',
    color: 'white',
    verticalAlign: 'middle',
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Router>
      <Grid container direction="column">

            {/* NAVBAR START */}
              <Grid item container xs={12}>
              <AppBar position="static" className={classes.headerStyle}>
                  <Toolbar>
                    <Grid container>
                      <Grid item xs={8} md={2}>
                        <Typography variant="h4">
                          Hot Beans
                        </Typography>
                      </Grid>
                      <Grid item xs={4} md={1}>
                        <img src={logo} alt="logo" height="50px" className={classes.logoStyle}/>
                      </Grid>
                        <Grid item xs={2} md={1}>
                          <Link className={classes.linkText} to="/">Home</Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                          <Link className={classes.linkText} to="/about">About</Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                          <Link className={classes.linkText} to="/team">Team</Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                          <Link className={classes.linkText} to="/jobs">Jobs</Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                          <Link className={classes.contactStyle} to="/contact">Contact</Link>
                        </Grid>
                        <Grid item xs={2} md={1}>
                          <Link className={classes.linkText} to="/learn">Learn</Link>
                      </Grid>
                    </Grid>
                  </Toolbar>
              </AppBar>
              </Grid>
            {/* NAVBAR END */}

            {/* BODY START */}
            <div>
            <Grid container>
                <Grid item xs={0} md={1} lg={2}>
                </Grid>
                  <Grid item xs={12} md={10} lg={8}>
                      <Switch>
                          <Route path="/" exact><Home/></Route>
                          <Route path="/about"><About/></Route>
                          <Route path="/team"><Team/></Route>
                          <Route path="/jobs"><Jobs/></Route>
                          <Route path="/contact"><Contact/></Route>
                          <Route path="/learn"><Learn/></Route>
                      </Switch>
                  </Grid>
                <Grid item xs={0} md={1} lg={2}>
                </Grid>
              </Grid>
            </div>
            {/* BODY END */}

            <div className={classes.footerDiv}>
              <Grid item xs={12}>
                  {/* FOOTER START */}
                <BottomNavigation className={classes.footerStyle}>
                  <Typography className={classes.footerText}>
                  Copyright © 2021 Hot Beans Ltd.
                  </Typography>
                </BottomNavigation>
                  {/* FOOTER END */}
              </Grid>
            </div>
      </Grid>
      </Router>
    </div>
  );
}

export default App;