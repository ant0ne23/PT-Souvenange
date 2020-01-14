import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from './apropos.style'


export const Apropos = () => {
    const classes = useStyles()
   
  return (
    <div className={classes.ensemble}>
      <div className={classes.titre}>
            <h1>A propos</h1>
         </div>
        <Paper className={classes.paper}>
            
          <div>
            <h2 className={classes.titresection} >Présentation</h2>
            <p className={classes.texte}>Constituée le 8 novembre 2014, dans l'intérêt des familles ayant subi un deuil périnatal, l'association a pour but : 
            <p></p>

            de former avec le personnel des maternités, les photographes et les familles concernées, une équipe qui créera les conditions favorables à une prise de vue photographique de qualité de l’enfant qui est décédé.
            d’organiser toute communication et information permettant de faire connaître son existence dans le respect et l’anonymat des familles concernées. L’association s’interdit toute diffusion publique, toute publication, par quel canal que ce soit, des prises de vue faites par les photographes. Les photographes ayant accès aux infrastructures médicales s’interdisent toute communication de ce qu’ils ont pu voir ou entendre à l’occasion de la prise de vue photographique et en respectent la confidentialité.
            <p></p>

            Les membres dirigeants à l'origine de la création sont :
            <p></p>
            Hélène Delarbre : Présidente
            <p></p>
            Jean Faugeras : Secrétaire-Trésorier
            <p></p>

            L'association est composée de membres photographes bénévoles et d'adhérents non photographes.
            Le nom de l'association est la contraction de "Souvenir" et "Ange" (nom donné aux enfants décédés).
            L'association a été déclarée d'intérêt général le 17 août 2015.

            <p></p>
          </p></div>
          <div>
            <h2  className={classes.titresection} >Activités</h2>
            <p className={classes.texte} >A l'appel des maternités qui ont signé une convention avec l'association, les photographes se rendent sur place pour prendre des photos du bébé décédé pour lesquelles la famille a donné son accord. La forme des clichés est à discrétion des familles : enfant seul ou avec les parents.
            <p></p>
            A la demande des familles qui ne disposent pas de clichés de qualité, les membres de l'association retouchent les photographies des enfants décédés.
          </p></div>
          <div>
          <h2  className={classes.titresection} >En savoir plus</h2>
            <p className={classes.texte}>
            Association loi de 1901 à but non lucratif
            <p></p>
            Constituée en novembre 2014
            <p></p>
            Reconnue d’intérêt général
            <p></p>
            Plus de 200 photographes bénévoles
            <p></p>
            Plus de 900 familles accompagnées
            </p>

            <p className={classes.texte}>
            Chaque année, en France, le deuil périnatal concerne plus de 7000 familles.
            </p>

            <p className={classes.texte}>
              Lorsqu’un bébé décède pendant la grossesse, à la naissance ou quelques jours après, commence un long et difficile travail de deuil.
              Le souvenir photographique est alors un soutien important. 
              L’image douce et tendre prise par nos photographes bénévoles pourra être regardée, montrée et placée dans l’album de famille. 
              Il est la preuve de l’existence de cet enfant et permet de lui donner sa place dans la famille.
            </p> 

            <p className={classes.texte}>
            Tous les photographes bénévoles ont été choisis pour leurs valeurs humaines. Ils sont formés techniquement et éthiquement, sont sensibilisés au deuil périnatal et s’engagent à la discrétion, à la confidentialité et au respect.
            </p> 
          </div>
        </Paper>
    </div>
  )
}
