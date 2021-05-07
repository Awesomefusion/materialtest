import React from 'react';
import { Typography, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid, List, ListItem, ListItemText, ListItemIcon, } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import bugImage from "../img/bug.png"
import cloudflareImage from "../img/cloudflare.png"
import smartphonesImage from "../img/smartphones.png"


const useStyles = makeStyles((theme) => ({
    homePara: {
        marginTop: '15px',
        textAlign: 'center',
    },
    homeDivider:{
        marginTop: '15px',
    },
    sectionOne:{
        backgroundColor: '#a8dadc',
        padding: '15px',
    },
    sectionTwo:{
        backgroundColor: '#f1faee',
        padding: '15px',
    },
    sectionThree:{
        backgroundColor: '#457b9d',
        padding: '15px',
        color: 'white',
    },
    homeList:{
        listStyle: 'none',
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
                    </Grid>
                </Grid>
            </div>
            <div className={classes.sectionTwo}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={bugImage}
                                    alt="Icon"
                                    title="Icon"
                                    height="256"
                                />
                                <CardContent>
                                    <Typography>
                                        No worries about bugs or messy code with Hot Beans
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={cloudflareImage}
                                    alt="Icon"
                                    title="Icon"
                                    height="256"
                                />
                                <CardContent>
                                    <Typography>
                                        Avoid DDoS attacks by using cloudflare protection services
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={smartphonesImage}
                                    alt="Icon"
                                    title="Icon"
                                    height="256"
                                />
                                <CardContent>
                                    <Typography>
                                        Responsive web designs that look good no matter the screen size
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                </Grid>
            </div>

            <div className={classes.sectionThree}>
                <Grid container alignItems="center">
                    <Grid item xs={12}>
                        <Typography className={classes.homePara}>
                        We offer a wide range of standardized and bespoke packages:
                            <ul className={classes.homeList}>
                                <li>Standard static Web Package £300</li>
                                <li>Bespoke static Web Package £500</li>
                                <li>Standard eCommerce Package £800</li>
                                <li>Bespoke eCommerce Package £1200</li>
                            </ul>
                        Contact us for more information and recieve a quote today!
                        </Typography>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}
export default Home;