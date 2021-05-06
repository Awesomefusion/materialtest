import React from 'react';
import { Typography, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    homePara: {
        marginTop: '15px',
    },
    homeDivider:{
        marginTop: '15px',
    },
    sectionOne:{
        backgroundColor: '#faf3f3',
        padding: '15px',
    },
    sectionTwo:{
        backgroundColor: '#e1e5ea',
        padding: '15px',
    },
  }));

const Home = () => {

    const classes = useStyles();

    return(
        <div>
            <div className={classes.sectionOne}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" xs={12}>
                            Designs with style
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.homePara}>
                            An award winning web design firm based out of Cambridgeshire, hot beans is at the cutting edge of UX design in 2021.
                        </Typography>
                        <Divider className={classes.homeDivider}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.sectionTwo}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image=""
                                    alt="Icon"
                                    title="Icon"
                                    height="240"

                                />
                                <CardContent>
                                    <Typography>
                                        Asdf
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Home;