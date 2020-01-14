import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  ensemble: 
  {
    
    '@global': 
    {
       maxWidth: '100%',
      'a, a:visited, a:focus': {
      textDecoration: 'none',
      marginLeft : '21%',
      color : '#948EBA',
    },
      
  },
},




partie2 : 
{
  
  display : 'flex',
  flexDirection : 'row',
  '@global':
  {
    
  },
},
    
partie3 :
{
  paddingTop : '20px',
  
},

partie1 :
{
  paddingTop : '2%',
  paddingBottom : '2%',
  textAlign : "center",
  marginLeft : '1%',
  marginRight : '1%'
},

partie4 :
{
  paddingTop : '2%',
  paddingBottom : '2%',
  textAlign : "center",
  marginLeft : '1%',
  marginRight : '1%',
  color : '#E096C1',
  fontWeight : 'bold',
 
},

'@global': 
{


  '.awssld__box ' :
  { 
  
  
  },
  
  '.awssld' : {
    
    width : '100%',
    height : '400px',
    '--loader-bar-color' : '#78D0E9',
    paddingBottom : '80px',
    marginBottom : '0%',
    
    
  },

  '.awssld__wrapper' : {
    
    
   
    
},


//les points
'.awssld__bullets' :{
  position : 'relative',
 
  display: 'flex',
  color : '#948EBA',
  alignItems: 'center',
  justifyContent: 'center',
  

 
  '& button' : 
  {
   
    background : '#78D0E9',
    
  }
  
},

'.awssld__controls button': {
  display: 'flex',
  alignitems: 'center',
  justifycontent: 'center',
  position: 'absolute',
  zIndex: '10',
  
  border: 'none',
  cursor: 'pointer',
  
  
  
},


//la couleur du bouton de l'image actif
'.awssld__bullets .awssld__bullets--active' : {
  background: '#948EBA',
  
},

//les couleurs des flèches
'.awssld__controls__arrow-left:after, .awssld__controls__arrow-left:before' : 
 {
  background : '#948EBA',
 },

 '.awssld__controls__arrow-right:after, .awssld__controls__arrow-right:before' : 
 {
  background : '#948EBA',
 }
    
 
  
},
}))

