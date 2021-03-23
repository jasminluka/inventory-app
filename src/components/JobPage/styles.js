import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  paper: {
    padding: '10px 20px'
  },
  name: {
    fontWeight: 500,
    margin: '10px 0'
  },
  categories: {
    marginBottom: 5
  },
  category: {
    padding: 5,
    margin: '4px 0',
    borderRadius: 5,
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
      background: "#c0c0c0",
    },
    '&.active': {
      background: "#c0c0c0"
    }
  }
})