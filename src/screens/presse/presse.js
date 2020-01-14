import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



import { useStyles } from './presse.style'

export const Presse = () => {
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
                 <InputLabel htmlFor="my-input" required="true" size="20">Nom de l'organe de presse </InputLabel>
                 <Input id="my-input" aria-describedby="my-helper-text" />
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
