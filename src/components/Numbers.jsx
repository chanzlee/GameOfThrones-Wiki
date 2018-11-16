import React from 'react';
import getNumbers from '../kservices/forcesbackend';

const NumberForces = () => {
  const getNumberForces = getNumbers();
  
  return (  
    <div>
      {getNumberForces.map((props, index) => {
        return (
          <div key={index}>
            <h1>{props.title}</h1>
            <h4>{props.text}</h4>
          </div>
        );
      })}
    </div>
  );
};
 
export default NumberForces;