import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import JobForm from './components/JobForm/JobForm'
import JobPage from './components/JobPage/JobPage'

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth='lg'>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/new-job' component={JobForm} />
          <Route exact path='/:jobId' component={JobPage} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App