import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './todo.style'

export const Todo = ({ todo }) => {
  const classes = useStyles()
  const { title } = todo
  return (
    <div className={classes.container}>
      <Card raised className={classes.card}>
        <Typography variant="h4">{title}</Typography>
      </Card>
    </div>
  )
}
