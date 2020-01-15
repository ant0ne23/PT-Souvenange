import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './trombinoscopeDetail.style'



  
    
        
export const TrombinoscopeDetail = ({titre, photo, description, role, sexe, nom, prenom, date_naissance, date_adhesion, tel, email}) => {
  
    
  const classes = useStyles()
  return (
  <div className={classes.page}>
    <div className={classes.titre}>
      <h1>{titre} </h1>
      <h2>{role}</h2>
    </div>
      <div className={classes.ensemble}>
            <div> 
              <Grid container spacing={3} >
                    <Grid item xs>
                      <Paper className={classes.paper}> 
                          <div className={classes.contenu}>
                            <div><h1>{prenom} {nom}</h1>
                            <p>{description}</p></div> 
                          </div>
                      </Paper>
                      <br />
                      <Paper className={classes.paper}> 
                          <div className={classes.contenu}>
                            <div><h1>Détails : {prenom} {nom}</h1>
                              <ul>
                                <li>Sexe :/ {sexe}</li>
                                <li>Date de naissance : {date_naissance}</li>
                                <li>Date d'adhesion : {date_adhesion}</li>
                                <li>Numéro de téléphone : {tel}</li>
                                <li>Email : {email}</li>
                              </ul>
                            </div>
                          </div>
                      </Paper>
                    </Grid>
              </Grid>
            </div>

            
      </div>
  </div>
  )
}


