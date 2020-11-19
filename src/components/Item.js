import React from 'react';

export default function Item({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className="container">
      <p name="cardOwner">Owner: {details.owner}</p>
      <p name="cardItemName">Item name: {details.itemName}</p>
      <p name="cardItemDescription">Item Description: {details.itemDescription}</p>
      <p name="cardItemCurrency">Item Currency: {details.itemCurrency}</p>
      <p name="cardItemPrice">Item Price: {details.itemPrice}</p>
    </div>
  );
}
