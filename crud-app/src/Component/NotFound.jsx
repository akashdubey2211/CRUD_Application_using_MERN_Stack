import React from 'react'
import NotFounda from '../Assets/notFound.jpg'
import {makeStyles} from '@material-ui/core'
const useStyle = makeStyles({
    img:{
        alignItems:'center',
        width:"40%",
        justifyContent:'center',
        marginLeft:"30%"
    }
});

const NotFound = () => {
    const classes = useStyle();
    return (
        <div>
          
            <img  className={classes.img} src={NotFounda} alt={NotFounda}/>
        </div>
    )
}

export default NotFound;
