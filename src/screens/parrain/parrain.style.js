import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({

    ensemble :
      {
          marginTop : '2%',
          marginBottom : '2%',
          width : '100%',
          height : '25%'
      },

    paper :
      {
         paddingLeft : '2%',
         paddingRight : '2%',
         paddingBottom : '5%',
         marginLeft : '5%',
         marginRight : '5%',

      },

      titre :
      {
        marginLeft : '5%',
        color : '#E096C1',
      
      },

      texte : 
      {
        textAlign : 'justify',
        paddingLeft : '2%',
        paddingRight : '2%',
      },

      titresection : 
      {
        color : '#948EBA',
        paddingLeft : '2%',
        paddingTop : '2%',
      },

      photo :
      {
        marginTop: '2%',
        width:'40%',
        borderRadius : '1%',
      },

      flex :
      {
        display:"flex"
      },

      biographie :
      {
        padding:'1%'
      }

}));