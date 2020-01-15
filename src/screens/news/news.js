import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './news.style'



  
    
        
export const News = ({ news}) => {
  
    
  const classes = useStyles()
  return (
  <div className={classes.page}>
    <div className={classes.titre}>
      <h1>Actualités</h1>
    </div>
      <div className={classes.ensemble}>
          {news.map(({id,titre,description,date,image}) => {
            return(

            <div key={id}> 
              <Grid container spacing={3} >
                    <Grid item xs>
                      <Paper className={classes.paper}> 
                          <img className={classes.img} src={image.url}  alt="souvenange"/>
                          <div className={classes.contenu}>
                            <div><h1>{titre}</h1>
                            <h4>{date}</h4></div> 
                            <div ><p className={classes.description} >{description}</p></div>  
                          </div>
                      </Paper>
                    </Grid>
              </Grid>
            </div>

            )
            })
          }
      </div>
  </div>
  )
}


