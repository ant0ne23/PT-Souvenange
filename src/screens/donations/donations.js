import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



import { useStyles } from './donations.style'


export const Donations = () => {
    const classes = useStyles()
    
  return (
    <div className={classes.ensemble}>
      <div className={classes.titre}>
            <h1>Adhésions et Dons</h1>
         </div>
        <Paper className={classes.paper}>
            
          <div>
            <h2 className={classes.titresection} >Souvenange sur HelloAsso</h2>
            <p className={classes.texte}>Pour adhérer et/ou faire un don à l'association Souvenange Photographie France, </p>
            <p className={classes.texte}>vous pouvez vous rendre sur notre page sur HelloAsso en cliquant sur le lien ci-dessous. (paiement sécurisé par Carte Bancaire)</p>
            <Button className={classes.button1} href="https://www.helloasso.com/associations/souvenange-photographie-france" variant="contained" color="primary">HelloAsso</Button>
          </div>
          <h2 className={classes.titresection} >Facile de nous soutenir</h2>
          <div>
          <img className={classes.facil2soutenir} src="https://www.souvenange.fr/sites/all/themes/souvenange_materialize/images/banniere3-250x250.png" alt="soutenir" />
          <p className={classes.texte} >Soutenez nous gratuitement avec facile2soutenir.</p>
          <Button className={classes.button2} href="https://www.facile2soutenir.fr/accueil/inscription/?association=SOUV&utm_source=association&utm_medium=web&utm_campaign=banniere&utm_content=252x250-3%2F" variant="contained" color="primary">Facile 2 soutenir</Button>
          </div>
          <div>
            <h2  className={classes.titresection} >Bulletin d'adhésion</h2>
            <p className={classes.texte} >Remplissez le bulletin et renvoyez-le avec votre chèque par courrier à l'adresse indiquée.</p>
            <p className={classes.texte}>Ou remplissez le bulletin et renvoyez-le par mail en précisant le choix du versement par virement (case à cocher en bas du bulletin).</p>
            <p className={classes.texte}>Si vous le souhaitez, vous pourrez recevoir un reçu fiscal vous donnant droit à une remise de 66% du versement sur vos impôts.</p>
            <Button className={classes.button2} href="https://www.souvenange.fr/sites/default/files/documents/Bulletin-adhesion-don-2019.pdf" variant="contained" color="primary">Télécharger le bulletin</Button>
          </div>
          <h2 className={classes.remerciements} >Au nom de tous, merci de votre soutien</h2>
        </Paper>

    </div>
  )
}
