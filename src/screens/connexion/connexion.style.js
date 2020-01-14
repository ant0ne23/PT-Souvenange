import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles(() => ({
  container: {
    padding: '1em 0 0',
    minWidth: 50,
    '&.mobile': {
      margin: 0,
    },
  },
  icon: {
    fontSize: '1.8em',
  },
  picture: {
    borderRadius: 100,
  },
  buttonText: {
    paddingLeft: '.5em',
  },
  accountContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  nameContainer: {
    marginLeft: '1em',
  },
  member: {
    fontSize: '.9em',
    color: 'grey',
  },
}))