import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const Posts = () => {
    let  posts=[1,2,3,4,5,6,7,8]
    return(
        posts.map(post=>(
            <Grid  item lg={3} sm={4} xs={12}>
                 <Post  style={{textDecoraation: "none", color:"inherit", type:"outline",marginTop:'50%', marginHorizontal: 5 }} />
            </Grid>
        ))
    )
}

export default Posts;