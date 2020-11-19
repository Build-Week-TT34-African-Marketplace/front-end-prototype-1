import React from 'react';

export default function Item({ details }) {




  
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className="container">
      <div className='item container'>
        <p name="cardOwner">Category: {details.category}</p>
        <p name="cardItemName">Item name: {details.name}</p>
        <p name="cardItemCurrency">Item Location: {details.location}</p>
        <p name="cardItemPrice">Item Price: {details.price}</p>
      </div>
    </div>
  );
}
