import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({

 ensemble:
 {
   
  paddingBottom : '25px',

   
 },


paper: {
  padding: 'theme.spacing(2)',
  textAlign: 'center',
  color: 'theme.palette.text.secondary',
  display : 'flex',
  flexDirection : 'row',
  paddingBottom : '20px',
  paddingTop : '20px',
  marginRight : '4%',
  marginLeft : '4%',
  
},

titre :
{
  marginLeft : '5%',
  color : '#E096C1',
  textAlign : 'justify',
},

contenu :
{
 
 marginLeft : '1%',
 textAlign : 'center',
},

description :
{
  marginRight : '1%',
},

 img: {
  width: '30%',
  borderRadius : '5px',
  marginLeft : '1%',
 
},

}));