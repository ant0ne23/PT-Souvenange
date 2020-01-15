import React from 'react'
import { Link } from '@k-redux-router/react-k-ramel'
import AppBar from '@material-ui/core/AppBar'
import { Home } from 'screens/home'
import { Todo } from 'screens/todo'
import { Temoignages } from 'screens/temoignages'
import { Error404 } from 'screens/error404'
import { Apropos } from 'screens/apropos'
import { News } from 'screens/news'
import { Friends } from 'screens/friends'
import { Parrain } from 'screens/parrain'
import { Donations } from 'screens/donations'
import { CarteConvention } from 'screens/carteConvention'
import { CarteBenevole } from 'screens/carteBenevole'
import { Mecenes } from 'screens/mecenes'
import { Contact } from 'screens/contact'
import { Article } from 'screens/article'
import { Partenaire } from 'screens/partenaire'
import { Particulier } from 'screens/particulier'
import { Benevole } from 'screens/benevole'
import { Cgu } from 'screens/CGU'
import { Presse } from 'screens/presse'
import { Autres } from 'screens/autres' 
import { Connexion } from 'screens/connexion'
import { Trombinoscope } from 'screens/trombinoscope' 
import { TrombinoscopeDetail } from 'screens/trombinoscope-detail' 
import { useStyles } from './body.style'
import MenuItem from '@material-ui/core/MenuItem'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';




export const Body = () => 
{

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef2 = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleToggle2 = () => {
    setOpen2(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleClose2 = event => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }
    setOpen2(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleListKeyDown2(event2) {
    if (event2.key === 'Tab') {
      event2.preventDefault();
      setOpen2(false);
    }
  }


  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const prevOpen2 = React.useRef(open2);
  React.useEffect(() => {
    if (prevOpen2.current === true && open2 === false) {
      anchorRef2.current.focus();
    }

    prevOpen2.current = open2;
  }, [open2]);


 
  
 
  
 
  return (
    <div className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Link code="HOME">
          <img className={classes.logo} src="/logo.svg" alt="logo" />
        </Link>
        <Link code="CONNEXION" >
         <p>Connexion</p>
        </Link>
            <div className ={classes.test}>
              <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className ={classes.button}
                >
                <a> L'association</a>

                 </Button>
                </div>
              
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <Link code="ARTICLE">
                          <MenuItem onClick={handleClose}>Articles</MenuItem>
                        </Link>
                        <Link code="TROMBINOSCOPE">
                          <MenuItem onClick={handleClose}>Trombinoscope</MenuItem>
                        </Link>
                        <Link code="APROPOS">
                          <MenuItem onClick={handleClose}>A propos</MenuItem>
                        </Link>
                        <Link code="PARRAIN">
                          <MenuItem onClick={handleClose}>Parrain</MenuItem>
                        </Link>
                        <Link code="CARTEBENEVOLE">
                            <MenuItem onClick={handleClose}>Carte des bénévoles</MenuItem>
                          </Link>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>

        <Link code="DONATIONS">
        <p>Nous soutenir</p>  
        </Link>
        <Link code="NEWS">
        <p>Actualités</p> 
        </Link>
        <Link code="TEMOIGNAGES">
        <p>Témoignages</p> 
        </Link>
        <div>
              <div>
              <Button
                ref={anchorRef2}
                aria-controls={open2 ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle2}
                className ={classes.button}
                >
                <a>Partenaires</a>

                 </Button>
                </div>
              
              <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      
                      <ClickAwayListener onClickAway={handleClose2}>
                        <MenuList autoFocusItem={open2} id="menu-list-grow" onKeyDown={handleListKeyDown2}>
                        <Link code="MECENES">
                          <MenuItem onClick={handleClose2}>Mécènes</MenuItem>
                        </Link>
                        <Link code="FRIENDS">
                          <MenuItem onClick={handleClose2}>Association amies</MenuItem>
                        </Link>
                        <Link code="CARTECONVENTION">
                            <MenuItem onClick={handleClose2}>Carte des conventions</MenuItem>
                          </Link>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
        <Link code="CONTACT">
        <p>Nous contacter</p> 
        </Link>
        <div className={classes.droit}>
        <img src="/droit.png" alt="droit" />
        </div>
      </AppBar>
        
      
      

      <div className={classes.content}>
        <Home />
        <Todo />
        <Connexion />
        <Trombinoscope />
        <TrombinoscopeDetail />
        <News />
        <CarteBenevole />
        <CarteConvention />
        <Temoignages />
        <Contact />
        <Cgu />
        <Partenaire />
        <Particulier />
        <Donations />
        <Mecenes />
        <Friends />
        <Benevole />
        <Parrain />
        <Article />
        <Presse />
        <Autres />
        <Apropos />
        <Error404 />
      </div>
      <StickyFooter />
    </div>
    
    
  )
}

const useStylesFooter = makeStyles(theme => ({
 
  main: {
   
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:
    '#948EBA',
  },

  texte : 
  {
    marginRight : '60%',
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link code="CGU">
      Conditions générale d'utilisation
      </Link>
    </Typography>
  );
}

export default function StickyFooter() {
  const classes = useStylesFooter();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
      <div className={classes.texte}>
        <Container maxWidth="sm">
          <Typography variant="body1">Souvenange {' '}{new Date().getFullYear()}{'.'}</Typography> 
          <Copyright />
        </Container>
       </div> 
      </footer>
    </div>
  );
}
