import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyle=makeStyles({
    hh:{
        marginTop:'10%'
    }
})
const ExCategory= () =>{
    const classes=useStyle();
    return(
        <h1 className={classes.hh}>Hello</h1>
    );
}
export default ExCategory;