import React from 'react';
import { AppBar,Toolbar,Typography,makeStyles } from '@material-ui/core';
import {Link, link} from 'react-router-dom';
import HomeIcon  from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import VisibilityIcon from '@material-ui/icons/Visibility';
import  Marquee from 'react-fast-marquee';
import Blink from "react-blink";
const useStyles = makeStyles({
    component: {
        background: "grey",
        color: "Black",
    },
    container: {
        justifyContent:"center",
        '& > *':{
            padding: 10,       
        }
    },
    link:{
        textDecoration:"none",
        color:"inherit"
    },
    space:{
        paddingRight:"50%",
        fontSize:'40px',
        fontFamily: 'Open Sans',
        transform:'rotate(0deg)'
    },
 })
 
const Header= () =>{
    const classes = useStyles();
    return(
        <>
        <AppBar className={classes.component}>
             <Toolbar className={classes.container}>
             <Typography className={classes.icon}><VisibilityIcon /></Typography>
             <Typography className={classes.space}><Marquee>GuideMe!</Marquee></Typography>
             <Link className={classes.link} to="/"><Typography><HomeIcon />Home</Typography></Link>
                <Typography><ContactMailIcon />Contact</Typography>
                <Typography><InfoIcon />AboutUs</Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}
export default Header;