import React from 'react';

export default function Item({ details }) {




  
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className="container">
      <p name="cardItemName">Item name: {details.name}</p>
      <p name="cardItemDescription">Item Description: {details.description}</p>
      <p name="cardItemPrice">Item Price: {details.price}</p>
      <p name="cardItemLocation">Item Location: {details.location}</p>
      <p name="cardItemCategory">Category: {details.category}</p>
    </div>
  );
}
