import React from 'react';
import getHouses from '../services/housebackend';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const House = () => {
  const houses = getHouses();
  return (

    <div className="grid grid-zone">
        <style jsx>{`
        .grid-zone {
        display: grid;
        grid-template-columns: repeat(4, 25%); 
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 20px;
        grid-row-gap: 50px;
        margin-top: 6%;
        grid-auto-rows: 450px;
        justify-items: stretch;
        justify-content: space-evenly;
        align-items: start;
        align-content: space-evenly;
        grid-auto-flow: row;
      }
    `}
    </style>
      {houses.map((house, index) => {
        return ( 
          <div key={index} className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src={house.imgURL} alt="Card image cap"/>
          <div className="card-body">
              <h5 className="card-title">House: {house.name}</h5>
              <p className="card-text">Words: {house.words}</p>
              <p className="card-text">Region: {house.allegiance}</p>
              <p className="card-text">Strength: {house.strength} men</p>
              <Link to="#" className="btn btn-primary">View detail</Link>
            </div>
        </div>
      )})}
    </div>
  );
};
 
export default House;