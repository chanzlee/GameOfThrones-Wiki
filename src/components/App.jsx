import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
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
      <div className="jumbotron">
        <h1>GameOfThrones</h1>
      </div>
      <Switch>
        <Route path='/houses' component={House} />
        {/* <Route path='/wiki' component={Wiki} /> */}
        {/* <Route exact='/' component={Home}/> */}
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
