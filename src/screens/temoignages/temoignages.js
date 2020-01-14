import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './temoignages.style';



export const Temoignages = ({ temoignages}) => {

    const classes = useStyles()
    const [state, setState] = useState(true);
    function toggle() {
      setState(!state);
    }

  
    return(
      <div className={classes.page}>
        <div className={classes.titre}>
          <h1>Témoignages</h1>
        </div>
        <div className={classes.ensemble}>
        {temoignages.map(({id,description,title}) => {
          return(
          <div key={id}  > 
            <Grid>
                  <Grid item xs>
                    <Paper  className={classes.paper}>
                      <div onClick={toggle} alt="coeur" className={classes.titreTemoignage}><img src='/Coeur.png' className={classes.coeur}></img>
                      <h1 className={classes.title}>{title}</h1></div>
                      <div className="toggle">
                        {state ? <p> </p> : <p>{description}</p>}
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