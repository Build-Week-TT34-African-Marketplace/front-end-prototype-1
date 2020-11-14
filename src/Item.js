import React from 'react';

export default function Item({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className="container">
      <div className='user container'>
        <h2 name="cardName">{details.name}</h2>
        <p name="cardSize">Size: {details.size}</p>
        {
          !!details.toppings && !!details.toppings.length &&
          <div name="cardToppings">
            Toppings:
            <ul>
              {details.toppings.map((sel, idx) => <li key={idx}>{sel}</li>)}
            </ul>
          </div>
        }
        <p name="cardInstructions">Instructions: {details.instructions}</p>
      </div>
    </div>
  );
}
