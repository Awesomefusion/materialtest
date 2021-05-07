import React from 'react';
import { Typography, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid, List, ListItem, ListItemText, ListItemIcon, FormControl, TextField,  } from '@material-ui/core'
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
    contactStyle:{
        minWidth: '100%',
    },
}))

const Contact = () => {

    const classes = useStyles();

    return(
        <div>
            <div className={classes.sectionOne}>
                <Typography variant="h2" align="center" className={classes.footerDiv}>
                    Enquiries
                </Typography>
                <TextField id="filled-full-width" label="Email" helperText="We will never share your email." className={classes.contactStyle}/>
                <Typography variant="h6" className={classes.footerDiv}>
                    Message
                </Typography>
                <TextField id="filled-full-width" multiline={true} className={classes.contactStyle}/>
                <Button variant="contained" className={classes.footerDiv}>
                    Submit
                </Button>
            </div>
        </div>
    );
}
export default Contact;