import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './trombinoscope.style'
import Grid from '@material-ui/core/Grid';


export const Trombinoscope = ({personnes, onClick }) => {
     console.log("personnes")
    const classes = useStyles();

    return (
     <Card className={classes.ensembleCard}>
   
          
           {personnes.map(({id,titre,role,photo}) => 
           { 
                return ( 
                    <div onClick={onClick(id)} className={classes.root} key={id}>
                         <Grid container spacing={3}>
                              <Grid item xs={12}>
                                   <Card  className={classes.card}>
                                        <CardActionArea>
                                        <CardMedia className={classes.media}>
                                        <img className={classes.img} src={photo.url}  alt="souvenange"/>
                                        </CardMedia>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        <div className={classes.contenuTexte}> 
                                        {titre}
                                        </div>    
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        <div className={classes.contenuTexte}> 
                                             {role}
                                        </div> 
                                        </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                   </Card>
                              </Grid> 
                         </Grid>
                    </div>
          
           ) 
		})
          }
    
      </Card>
    );
  }