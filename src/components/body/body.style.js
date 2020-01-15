import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    '&  $appBar': {  
      height: theme.spacing(10),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
     
  
      

      '@global': {
        'a, a:visited, a:focus': {
          textDecoration: 'none',
          marginLeft : '15px',
          color : '#948EBA',
          fontWeight : 'bold',
        },
       
    
       
      },
    },
    '@global': {
      '.MuiAppBar-colorPrimary': {
        background: theme.palette.common.white,
        
        
      },
    },
  },
  appBar: {
    
  },


  droit : 
  {
    marginTop : '1%',
    marginBottom : '0.5%',
    marginLeft : '26%',
  },

  logo : 
  {
    height: theme.spacing(7),
  },
 

  content: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  button : 
  {
    textTransform : 'none',
  
  }
}))
