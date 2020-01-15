import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './article.style'


export const Article = ({ article}) => {
  
    
  const classes = useStyles()
  return (
  <div className={classes.page}>
   
    <div className={classes.titre}>
      <h1>Articles</h1>
    </div>
      <div className={classes.ensemble}>
          {article.map(({id, titre,contenu,lien,image,logo}) => {
            return(
            <div key={id}> 
              <Grid container spacing={3} >
                    <Grid item xs>
                      <Paper className={classes.paper}> 
                          <img className={classes.img} src={image.url}  alt="souvenange"/>
                          <div className={classes.contenu}>
                          <div>
                          <img className={classes.logo} src={logo.url}  alt="souvenange"/>
                          </div>
                            <div><h1>{titre}</h1> </div>
                            <div ><p className={classes.description} >{contenu}</p></div>  
                            <div className={classes.button}>
                              <Button href={lien} variant="contained" color="primary">Lire l'article</Button>
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
