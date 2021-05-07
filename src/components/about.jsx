import React from 'react';
import { Typography, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid, List, ListItem, ListItemText, ListItemIcon, } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    sectionOne:{
        backgroundColor: '#a8dadc',
        padding: '15px',
        height: '100%',
    },
}))

const About = () => {

    const classes = useStyles();

    return(
        <div>
            <div className={classes.sectionOne}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center">
                        Who we are
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        We partner with businesses who aspire to unlock the unique value of their brand and maximise their digital output. Our digital journey began as many of the best things do – in a haze of frantic ideas and brainstorming late at night.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        It all began back in 2015, with a dream of offering web-based solutions which operated efficiently and effectively. We aim to provide real value and tangible results to clients who wanted both style and substance for their online business.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        We still focus on our core message and what spurred the creation of Hot Beans. Our in-house team take their time to understand you, but most importantly, the consumer.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        At the end of the day, clients are the people who matter the most. Their views and opinions shape business right to their core. So, doesn’t it make sense to listen to their needs?
                    </Typography>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
export default About;