import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './mecenes.style'



  
    
        
export const Mecenes = ({ mecenes }) => {
  
    
  const classes = useStyles()
  return (
    <div className={classes.page}>
      <div className={classes.titre}>
        <h1>Mécènes</h1>
      </div>
        <div className={classes.ensemble}>
            {mecenes.map(({id,title,description,date,img}) => {
              return(
  
              <div key={id}> 
                <Grid container spacing={3} >
                      <Grid item xs>
                        <Paper className={classes.paper}> 
                            <img className={classes.img} src={img}  alt="souvenange"/>
                            <div className={classes.contenu}>
                              <div><h1>{title}</h1></div> 
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


