import React from 'react';
import getHistory from '../kservices/historybackend';

const History = () => {
  const historyArticles = getHistory();
  
  return (  
    <div>
      {historyArticles.map((props, index) => {
        return (
          <div key={index}>
            <h1>{props.title}</h1>
            <p><em>{props.quote}</em></p>
            <h4>{props.text}</h4>
          </div>
        );  
      })}
    </div>
  );
}
 
export default History;