import React from 'react'
import Paper from '@material-ui/core/Paper';



import { useStyles } from './parrain.style'


export const Parrain = () => {
    const classes = useStyles()
    
  return (
    <div className={classes.ensemble}>
      <div className={classes.titre}>
            <h1>Un parrain pour Souvenange</h1>
         </div>
        <Paper className={classes.paper}>
          <h2 className={classes.titresection}>Damien Jouillerot</h2>
          <div className={classes.flex}>
            <div className={classes.biographie}>
              <p className={classes.texte}>Damien Jouillerot est un jeune acteur français de talent, à la carrière déjà longue ! Découvert par Gérard Jugnot à l'âge de 16 ans, il commence sa carrière dans Monsieur Batignole. Puis il tourne sous la direction de Jean Becker, d'Alain Chabat, de Gilles Legrand, et de Jean-Jacques Zilbermann dans Les fautes d'orthographe. Pour ce film, dans lequel il partage la vedette avec Carole Bouquet, il est nominé aux Césars dans la catégorie du meilleur jeune espoir masculin. Depuis, il n'a pas cessé de tourner, avec les plus grands réalisateurs pour le cinéma, mais aussi dans de nombreux téléfilms et séries. Il a également joué dans quatre pièces de théâtre.</p>
              <p className={classes.texte}>Damien a un autre talent, celui du dessin. Il nous offre douceur et sensibilité dans ses Crobards d'amour qui seront bientôt publiés.</p>
              <p className={classes.texte}>Damien est un acteur au grand cœur touché par la cause du deuil périnatal. Il est marié et papa d'un petit garçon de 7 ans. Il a accepté d'être le parrain de l'association Souvenange sans aucune hésitation. </p>
              <p className={classes.texte}>Il témoigne de son engagement :</p>
              <p className={classes.texte}>J'ai toujours voulu être papa. J'ai eu la chance de le devenir jeune puisque, à 22 ans, Gabin est entré dans ma vie. Dès ce jour, j'ai commencé à avoir peur pour lui. Et depuis 8 ans, je mouche son nez à chaque égratignure. Quand on m'a proposé de devenir le parrain de Souvenange, je n'ai pas hésité. Bien sûr que, sur la forme, ça peut être étrange de prendre en photo un nouveau-né sans vie. Mais une maman qui a porté 9 mois dans son ventre un petit locataire, qui l'a couvé comme une louve, a le droit de mettre un visage sur son enfant. Elle a le droit d'emporter avec elle un souvenir. Une photo ne remplacera jamais la perte d'un être, mais je pense qu'elle aide à panser quelques plaies. Sans oublier le courage de ces photographes. Car il en faut. Ce sont des infirmières à leur façon ! Voilà pourquoi je soutiens Souvenange. Parce que l'altruisme est certainement le remède à ce monde morose actuel ! Ils ou elles permettent à des familles de faire leur deuil et de se rappeler à quel point leur bébé était un joli mélange d'eux. Merci, Souvenange. J'arrive à croire qu'il y a encore de belles personnes sur Terre grâce à vous.</p>
              <p className={classes.texte}>Un grand merci </p>
            </div>
            <img src="/parrain.jpg" className={classes.photo} alt="Damien Jouillerot"></img>
          </div>
        </Paper>

    </div>
  )
}
