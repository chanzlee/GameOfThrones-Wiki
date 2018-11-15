import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NumberForces from './Numbers';
import History from './History';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles} className="jumbotron">
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      {/* <h1>GameOfThrones</h1> */}
      <History/>
      <NumberForces/>
      {/* <Switch>
        <Route exact path='/' component={} />
      </Switch> */}
    </div>
  );
}

//App.propTypes = {
//};

export default App;
