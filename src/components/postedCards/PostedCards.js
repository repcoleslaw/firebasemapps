import React from 'react'

import './postedcards.css'

const PostedCard = ({good}) => {

  return(
    <div>
      <div className="push"></div>
    <div className="card-container">
     {good.map(good => (
      <div className="card">    <li key={good.id}>
      <p>This is the Name: {good.name}</p>
      <p>This is the Industry: {good.industry}</p>
      <p>This is the Service: {good.service}</p>
      <p>This is the Details: {good.details}</p>
     </li></div> 
       )
      
      )
    }
    </div>
    
    </div>

  );
}
  

export default PostedCard