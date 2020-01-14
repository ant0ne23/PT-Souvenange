import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    maxWidth: '100%',
    width: '500px',
    margin: '2em auto 0',
    padding: '1em',
  },
}))
