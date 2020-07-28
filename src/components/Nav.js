import React from 'react';
import {makeStyles, AppBar, Typography, Toolbar} from '@material-ui/core';


export default function Navbar(props){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>                
                <Typography variant="h6" className={classes.title}>
                    Nimble
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
    },
}))