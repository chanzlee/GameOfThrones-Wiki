import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import NumberForces from './Numbers';
import History from './History';

import House from './House';


/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>

      {/* <h1>GameOfThrones</h1> */}

      {/* <Switch>
        <Route exact path='/' component={} />
      </Switch> */}

      <div className="jumbotron">
        <h1>GameOfThrones</h1>
      </div>
      <Switch>
        <Route path='/houses' component={House} />
        <Route path='/history' component={History} />
        <Route path='/forces' component={NumberForces} />
        {/* <Route path='/wiki' component={Wiki} /> */}
        {/* <Route exact='/' component={Home}/> */}
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
