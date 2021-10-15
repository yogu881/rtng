import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbr from './Navbr';
import Err from './Err'
import { Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={Contact} />
        <Route component={Err} />

      </Switch>
      
    </div>
  )
}

export default App;
