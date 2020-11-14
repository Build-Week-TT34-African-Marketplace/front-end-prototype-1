import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import Item from "./Item";
import Validation from "./Validation";

import * as yup from "yup";

const initialFormValues = {
  owner: "",
  itemName: "",
  itemDescription: "",
  itemPrice: "",
};

const initialFormErrors = {
  owner: "",
  itemName: "",
  itemDescription: "",
  itemPrice: "",
};

const initialDisabled = true;
const initialItems = [];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [expand, setExpand] = useState(false);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setItems([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const postNewItem = (newItem) => {
    axios
      .post("https://reqres.in/api/users", newItem)
      .then((res) => {
        setItems([res.data, ...items]);
        setFormValues(initialFormValues);
        console.log(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

// HERE BELOW
  const clickExpand = () => {
    setExpand(!expand);
  }
// HERE ABOVE

  const changeIt = (name, value) => {
    yup
      .reach(Validation, name)
      .validate(value)
      .then(() => {
        // console.log(value);
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({...formValues, [name]: value});
  };

  const submitIt = () => {
    const newItem = {
      owner: formValues.owner.trim(),
      itemName: formValues.itemName.trim(),
      itemDescription: formValues.itemDescription.trim(),
      itemPrice: formValues.itemPrice.trim(),
    }
    console.log(newItem);
    postNewItem(newItem);
  };

  useEffect(() => {
    Validation.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  // useEffect(() => {
  //   setExpand(!expand);
  // }, [expand]);

  return (
    <div>
      <nav>
        <ul>
          <Link to={"/pizza"} style={{ color: "black", textDecoration: 'none' }}>
            <li>Place Order</li>
          </Link>
          <Link to={"/"} style={{ color: "black", textDecoration: 'none' }}>
            <li>Home</li>
          </Link>
        </ul> 
      </nav>
      <Switch>
        {/* <Route path="/pizza">

        </Route> */}
        <Route path="/">

          {/* HERE BELOW */}
          {/* {
            expand ? 
            <Form
              values={formValues}
              change={changeIt}
              submit={submitIt}
              disabled={disabled}
              errors={formErrors}
            />
            : null
          } */}
          {/* {HERE ABOVE} */}

          <div className="hometext">
            <h2>Current Listings:</h2>
          </div>
          {
            items.length === 0 ? <div className="none">None — select "Place Order" to place order.</div> : items.map((order) => {
              console.log(order);
              return <Item key={order.id} details={order} />
            })
          }
        </Route>
      </Switch>
    </div>
  );
};
