import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



import { useStyles } from './benevole.style'

export const Benevole = () => {
    const classes = useStyles()
   
  return (
    <div className={classes.ensemble}>
        <Paper className={classes.paper}> 
            <FormControl>
                 <InputLabel htmlFor="my-input" required="true" >Prenom</InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                 <InputLabel htmlFor="my-input" required="true" >Nom</InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                 <InputLabel htmlFor="my-input" required="true">Adresse e-mail</InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                 <InputLabel htmlFor="my-input" required="true">Confirmation adresse e-mail</InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                 <InputLabel htmlFor="my-input" required="true">Objet</InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                 <InputLabel htmlFor="my-input" required="true">Lien du site Internet/portfolio</InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl className={classes.ensembleDeroulant}  >
                 <InputLabel   required="true" >
                   Amateur/Professionnel :
                   <select className={classes.listeDeroulante}>
                    <option >Amateur</option>
                    <option>Professionnel</option>           
                  </select> 
                  </InputLabel>
             </FormControl>
            <TextField
                placeholder="Contenu du message"
                required={true}
                multiline={true}
                rows={2}
                rowsMax={4}
            />
            <div className={classes.button}>
                <Button variant="contained" color="primary">Soumettre</Button>
            </div>
        </Paper> 
        
    </div>
  )
}

