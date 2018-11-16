import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import NumberForces from './Numbers';
import History from './History';

import House from './House';
import Navbar from './NavBar';
import Home from './Home';


/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){

  return (
    <div>
      <style global jsx >{`
        @import url('https://fonts.googleapis.com/css?family=Cinzel:400,700');
        * {
          font-family: 'Cinzel', serif;
          border-radius: 10px;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;  
          background-size: cover;
        }

        body {
          background-image: url("https://static1.srcdn.com/wordpress/wp-content/uploads/2018/02/Game-of-Thrones-Map-Room.jpg");
        }

        div.container {
          margin-top: 5%;
          background-color: #ccc;
        }

        `}
      </style>

      <Navbar/>
      <div className="container">
        {/* <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/02/Game-of-Thrones-Map-Room.jpg" alt=""/> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/houses' component={House} />
          <Route path='/history' component={History} />
          <Route path='/forces' component={NumberForces} />
          {/* <Route path='/wiki' component={Wiki} /> */}
          {/* <Route exact='/' component={Home}/> */}
        </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
