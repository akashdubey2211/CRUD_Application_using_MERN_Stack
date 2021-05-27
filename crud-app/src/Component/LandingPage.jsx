import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import './landing.css'
import React from 'react'

import HeroImg from '../Assets/agency-1.svg';
import {Link} from 'react-router-dom';
 const useStyle = makeStyles({
btn:{
    marginLeft:"2rem",
    backgroundColor:"#21094e",
    width:"300px"
    
}
 })
const Landing = () => {
   const classes = useStyle();
    return (
    <div>
         <section id="home" className="section-showcase">
      <div className="container">
        <div>
          <h1>The headphones of the future.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          <Link to='/add'>
          <Button variant="contained" className={classes.btn} color="primary"> Add Users</Button>
          </Link>
          
 

        </div>
        <img src={HeroImg} alt={HeroImg} />
      </div>
    </section>


  
    </div>
   

    )
}


export default Landing
