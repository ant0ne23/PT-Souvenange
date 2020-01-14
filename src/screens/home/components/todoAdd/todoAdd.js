import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

import { useStyles } from './todoAdd.style'

export const TodoAdd = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const classes = useStyles()

  const handleOnSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    onSubmit(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleOnSubmit} className={classes.container}>
      <TextField
        className={classes.input}
        label="Tâche à réaliser"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  )
}
