import React from 'react';
import { Typography, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid, List, ListItem, ListItemText, ListItemIcon, } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    sectionOne:{
        backgroundColor: '#a8dadc',
        padding: '15px',
        height: '100%',
    },
    footerDiv:{
        marginTop: '20px',
      },
}))

const Learn = () => {

    const classes = useStyles();

    return(
        <div>
            <div className={classes.sectionOne}>
                <Typography variant="h2" align="center">
                    Learn with us
                </Typography>
                <Typography className={classes.footerDiv}>
                Below are various links to resources to learn Web Development, enjoy!
                </Typography>
                <Typography>
                <ul>
                        <li><a href="https://teamtreehouse.com/">Team Treehouse</a></li>
                        <li><a href="https://www.lynda.com/">Lynda</a></li>
                        <li><a href="https://www.udemy.com/courses/development/">Udemy</a></li>
                        <li><a href="https://www.codecademy.com/">Code Academy</a></li>
                        <li><a href="https://www.theodinproject.com/">The Odin Project</a></li>
                        <li><a href="https://www.codewars.com/">Code Wars</a></li>

                    </ul>
                </Typography>
            </div>
        </div>
    );
}
export default Learn;