import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Grid, Typography, AppBar, Toolbar, Container } from "@material-ui/core"

import Home from "./components/home"
import About from "./components/about"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkText: {
    flexGrow: '1',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
    marginRight: '10px',
  },
  containerBody: {
    marginTop: '25px',
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <div>
        <Router>
      <Grid container direction="column">

        {/* NAVBAR START */}
        <Grid item container xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                <Link className={classes.linkText} to="/">Home</Link>
                <Link className={classes.linkText} to="/about">About</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        {/* NAVBAR END */}

            {/* BODY START */}
              <Grid container>
                <Grid item xs={0} md={1} lg={2}>
                </Grid>
                  <Grid item xs={12} md={10} lg={8}>
                    <Container className={classes.containerBody}>
                      <Switch>
                          <Route path="/" exact><Home/></Route>
                          <Route path="/about"><About/></Route>
                      </Switch>
                    </Container>
                  </Grid>
                <Grid item xs={0} md={1} lg={2}>
                </Grid>
              </Grid>
            {/* BODY END */}


                {/* FOOTER START */}



                {/* FOOTER END */}
      </Grid>
      </Router>
    </div>
  );
}

export default App;