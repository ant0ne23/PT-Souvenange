import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './friends.style'
import Button from '@material-ui/core/Button';



  
    
        
export const Friends = ({ friends}) => {
  
    
  const classes = useStyles()
  return (
  <div className={classes.page}>
    <div className={classes.titre}>
      <h1>Associations amies</h1>
    </div>
      <div className={classes.ensemble}>
          {friends.map(({id,lien,description,logo}) => {
            return(

            <div key={id}> 
              <Grid container spacing={3} >
                    <Grid item xs>
                      <Paper className={classes.paper}> 
                          <img className={classes.img} src={logo.url}  alt="souvenange"/>
                          <div className={classes.contenu}>
                            <div ><p className={classes.description} >{description}</p></div>  
                            <div className={classes.button}>
                              <Button href={lien} variant="contained" color="primary">Aller sur le site de l'association</Button>
                            </div>
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


