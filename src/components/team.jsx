import React from 'react';
import { Typography, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid, List, ListItem, ListItemText, ListItemIcon, } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";
import four from "../img/4.png";
import five from "../img/5.png";
import six from "../img/6.png";


const useStyles = makeStyles((theme) => ({
    sectionOne:{
        backgroundColor: '#a8dadc',
        padding: '15px',
        height: '100%',
    },
}))

const Team = () => {

    const classes = useStyles();

    return(
        <div>
            <div className={classes.sectionOne}>
                <Typography variant="h2" align="center">
                    Say hello to our team!
                </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={one}
                                        alt="Icon"
                                        title="Icon"
                                        height="256"
                                    />
                                    <CardContent>
                                        <Typography align="center">
                                            John Davies - Senior Manager
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
                                        image={two}
                                        alt="Icon"
                                        title="Icon"
                                        height="256"
                                    />
                                    <CardContent>
                                        <Typography align="center">
                                            Tom Owens - Database Manager
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
                                        image={three}
                                        alt="Icon"
                                        title="Icon"
                                        height="256"
                                    />
                                    <CardContent>
                                        <Typography align="center">
                                            Mike Grafford - Lead Designer
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
                                        image={four}
                                        alt="Icon"
                                        title="Icon"
                                        height="256"
                                    />
                                    <CardContent>
                                        <Typography align="center">
                                            Shane Tolstoy - System Admin
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
                                        image={five}
                                        alt="Icon"
                                        title="Icon"
                                        height="256"
                                    />
                                    <CardContent>
                                        <Typography align="center">
                                            Lindsay Carrol - Trainee Web Developer
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
                                        image={six}
                                        alt="Icon"
                                        title="Icon"
                                        height="256"
                                    />
                                    <CardContent>
                                        <Typography align="center">
                                            Stephen Baker - Trainee Web Developer
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
export default Team;