import { Link } from 'react-router-dom'
import { AppBar, Typography, Button } from '@material-ui/core'

import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Inventory</Typography>
      <Button component={Link} to="/" variant="contained" color="secondary">Logout</Button>
    </AppBar>
  )
}

export default Header