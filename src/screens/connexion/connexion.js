import React from 'react'
import { useStyles } from './connexion.style'
import Button from '@material-ui/core/Button'

export const Connexion = ({loginFn, logoutFn, status, name, picture, group}) => {
    const classes = useStyles()


  const login = (
    <Button onClick={loginFn} >
      <span className={classes.buttonText}>connexion</span>
    </Button>
  )

  const connected = (
    <div className={classes.accountContainer}>
      { picture && <img src={picture} alt="profil" className={classes.picture} /> }
      <div className={classes.nameContainer}>
          <div className={classes.name}>{name}</div>
          {(group && group.id) && <div className={classes.member}>membre Souvenange</div>}
        </div>
      <Button onClick={logoutFn}>
        deconnexion
      </Button>
    </div>
  )

  return (
    <div className={classes.container}>
      {(!status || ['not_authorized', 'unknown'].includes(status)) && login}
      {(status && status === 'connected') && connected}
    </div>
  )
  }