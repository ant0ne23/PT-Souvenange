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
          marginLeft : '12px',
          color : '#948EBA',
          fontWeight : 'bold',
        },
       
       img : 
       {
         
         height : theme.spacing(8),
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
         marginLeft : '410px',
       },

  

 

  content: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}))
