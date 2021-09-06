import {Button ,Box, makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { categories } from '../constants/data';
import CategoryIcon from '@material-ui/icons/Category';
import { Link } from 'react-router-dom';
import Category from '@material-ui/icons/Category';

const userStyle=makeStyles({
    create : {
        margin: 0,
        background: "#6495ed",
        color: '#fff',
        width:'100%'
    },
    table:{
        border: '10px solid rgba(224,224,224,1)',
        background:'pink'

    },
    link:{
        textDecoration:'none',
        color:'inherit'
    },
    button:{
        paddingTop:'0%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:'35%'
    }
})
const Categories = () => {
    const classes= userStyle();
    return(
        <>
        <Box className={classes.button}>
        <Link to='/explore' className={classes.link}><Button varient="contained" className={classes.create}>Explore Category</Button></Link>
        </Box>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell><Link className={classes.link}><CategoryIcon />All Categories</Link></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {
                   categories.map(category => (
                       <TableRow>
                       <TableCell><Link className={classes.link} to="/explore">{category.icon}{category.name}</Link></TableCell>
                       </TableRow>
                   ))
               }
            </TableBody>
        </Table>
        </>
    )
}

export default Categories;