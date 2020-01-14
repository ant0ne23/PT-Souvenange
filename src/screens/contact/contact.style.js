import { makeStyles } from '@material-ui/core/styles'
import particulier from './particulier.jpg'
import benevole from './benevole.png'
import presse from './presse.jpg'
import autres from './autres.jpg'
import partenaire from './partenaire.gif'

export const useStyles = makeStyles(() => ({
    root: {
        flexGrow: '1',
        paddingBottom : '3%',
        paddingTop : '3%',
        width : '75%',
        marginLeft : '200px',
      },
      titre :
        {
        marginLeft : '5%',
        color : '#E096C1',
        
        },

      paperPartenaire: {
        padding: 'theme.spacing(2)',
        textAlign: 'center',
        color: 'theme.palette.text.secondary',
        height : '100%',
        paddingBottom : '300px',
        borderRadius : '10px',
        backgroundImage: `url(${partenaire})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },

      paperParticulier: {
        padding: 'theme.spacing(2)',
        textAlign: 'center',
        color: 'theme.palette.text.secondary',
        height : '100%',
        paddingBottom : '300px',
        borderRadius : '10px',
        backgroundImage: `url(${particulier})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },

      paperBenevole: {
        padding: 'theme.spacing(2)',
        textAlign: 'center',
        color: 'theme.palette.text.secondary',
        height : '100%',
        paddingBottom : '300px',
        borderRadius : '10px',
        backgroundImage: `url(${benevole})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },

      paperPresse: {
        padding: 'theme.spacing(2)',
        textAlign: 'center',
        color: 'theme.palette.text.secondary',
        height : '100%',
        borderRadius : '10px',
        paddingBottom : '150px',
        backgroundImage: `url(${presse})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        
      },
      paperAutres: {
        padding: 'theme.spacing(2)',
        textAlign: 'center',
        color: 'theme.palette.text.secondary',
        height : '100%',
        borderRadius : '10px',
        paddingBottom : '150px',
        backgroundImage: `url(${autres})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
      },

    
  
}))