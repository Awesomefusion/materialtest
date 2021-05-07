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

const Jobs = () => {

    const classes = useStyles();

    return(
        <div>
            <div className={classes.sectionOne}>
                <Typography variant="h2" align="center" className={classes.footerDiv}>
                    Join Us! We are looking for developers
                </Typography>
                <Typography variant="h4" className={classes.footerDiv}>
                    Role Specification
                </Typography>
                <Typography className={classes.footerDiv}>
                    Designs and builds websites for corporate or individual clients. Works with colleagues and clients to understand website requirements and client needs. Writes, tests, and debugs code and applications. Maintains knowledge of programming languages and monitors website analytics.
                </Typography>
                <Divider className={classes.footerDiv}/>
                <Typography variant="h4" className={classes.footerDiv}>
                    Duties
                </Typography>
                <Typography className={classes.footerDiv}>
                    <ul>
                        <li>Meets with clients and colleagues to determine website needs and follows up with regular conversations and updates</li>
                        <li>Creates website layouts with computer or handmade sketches to organise information and allow for intuitive usage</li>
                        <li>Builds websites to client specifications by writing code, designing pages and widgets, and incorporating graphics and video elements</li>
                        <li>Determines the best plug-ins and applications to provide websites with new features and functionality, and installs them accordingly</li>
                        <li>Tests websites using a variety of browsers, including Internet Explorer, Google Chrome, Safari, and Mozilla Firefox; and debugs as necessary</li>
                        <li>Maintains fluency in one or more programming languages, such as HTML</li>
                    </ul>
                </Typography>
                <Divider className={classes.footerDiv}/>
                <Typography variant="h4" align="center" className={classes.footerDiv}>
                    Skills and Requirements
                </Typography>
                <Typography className={classes.footerDiv}>
                Bachelor's Degree and Relevant Coursework in Website Design and Information Technology, Knowledge of Digital Media Production and Graphic Design, Creativity, Teamwork, Analytical Thinking, Critical Thinking, Interpersonal Communication, Customer Service Skills, Attention to Detail
                </Typography>
            </div>
        </div>
    );
}
export default Jobs;