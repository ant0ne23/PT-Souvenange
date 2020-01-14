import React from 'react'
import { useStyles } from './contact.style'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



export const Contact = ({OnClickPartenaire,OnClickParticulier,OnClickBenevole,OnClickPresse,OnClickAutres }) => {
    const classes = useStyles()
    return (
    <div className={classes.page}>
        <div className={classes.titre}>
            <h1>Nous contacter</h1>
         </div>
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid  item xs={4}>
             
                <Paper onClick={OnClickPartenaire} className={classes.paperPartenaire}><h2>Partenaire</h2></Paper>
          
          </Grid>
          <Grid item xs={4}>
          
            <Paper onClick={OnClickParticulier} className={classes.paperParticulier}><h2>Particulier</h2></Paper>
         
          </Grid>
          <Grid item xs={4}>
          
            <Paper onClick={OnClickBenevole} className={classes.paperBenevole}> <h2>Benevole</h2></Paper>
           
          </Grid>
          <Grid item xs={6}>
          
            <Paper onClick={OnClickPresse} className={classes.paperPresse}><h2>Presse</h2></Paper>
            
          </Grid>
          <Grid item xs={6}>
          
            <Paper onClick={OnClickAutres} className={classes.paperAutres}><h2>Autres</h2></Paper>
         
          </Grid>
        </Grid>
      </div>
    </div>
    )
  }