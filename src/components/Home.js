import React from "react";
import { Link} from "react-router-dom";


import Item from "./Item";


export default function Home(props) {
  return (
    <div>
      
      <div className="hometext">
        <h2 className="currentListing">Current Listings:</h2>
      </div>
      {props.items.length === 0 ? (
        <div className="none">No items listed</div>
      ) : (
        props.items.map((order) => {
          return <Item className="container" key={order.id} details={order} />;
        })
      )}
    </div>
  );
}
