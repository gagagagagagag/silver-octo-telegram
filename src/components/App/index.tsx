import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../pages/Home'

const App = () => {
  return (
    <Switch>
      <Route path={'/'} component={Home} />
      <Redirect to={'/'} />
    </Switch>
  )
}

export default App
