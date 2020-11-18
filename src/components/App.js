import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { PrivateRoute } from "../utils/PrivateRoute";

import SellForm from "./SellForm";
import Validation from "./Validation";
import Item from "./Item";
import Home from "./Home";

import SignupForm from "./Signup/SignupForm";
import SignupValidation from "./Signup/SignupValidation";

import LoginForm from "./Login/LoginForm";
import LoginValidation from "./Login/LoginValidation";

import * as yup from "yup";

// Item to be sold state initialization values (edited by SellForm)
// We may want to include a key more specific than "owner"
// (e.g., username, firstname-lastname,
// or some other distinguishing tag derived from the data attached
// to each user at signup).
const initialFormValues = {
  owner: "",
  itemName: "",
  itemDescription: "",
  itemPrice: "",
  itemCurrency: "",
};
const initialFormErrors = {
  owner: "",
  itemName: "",
  itemDescription: "",
  itemPrice: "",
  itemCurrency: "",
};
const initialDisabled = true;
const initialItems = [];

// User form state initialization values (edited by SignupForms)
const initialSignupFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};
const initialSignupFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};
const initialSignupDisabled = true;
const initialUsers = [];

// Login form state initialization values (edited by LoginForm)
const initialLoginFormValues = {
  username: "",
  password: "",
};
const initialLoginFormErrors = {
  username: "",
  password: "",
};
const initialLoginDisabled = true;

export default function App() {
  // State for `SellForms` and for listed `items`
  const [items, setItems] = useState(initialItems);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // State for `users` and for `SignupForm`
  const [users, setUsers] = useState(initialUsers);
  const [signupFormValues, setSignupFormValues] = useState(
    initialSignupFormValues
  );
  const [signupFormErrors, setSignupFormErrors] = useState(
    initialSignupFormErrors
  );
  const [signupFormDisabled, setSignupFormDisabled] = useState(
    initialSignupDisabled
  );

  // State for `LoginForm`
  // To be checked against `users` state array
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [loginFormErrors, setLoginFormErrors] = useState(
    initialLoginFormErrors
  );
  const [loginFormDisabled, setLoginFormDisabled] = useState(
    initialLoginDisabled
  );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { history } = useHistory();
  // State (set in submitLogin, located here in App.js, below) for redirect to items list/home page
  // on LoginForm submission button click

  // State (set in postNewUser, located here in App.js, below) for redirect to items login page
  // on SignupForm submission button click

  // ****** SELLFORM FUNCTIONALITY BELOW ******
  const getItems = () => {
    axios
      // This is just dummy data for SellForms...
      .get("/items-get")
      .then((res) => {
        // In fact, we don't use it whatsoever, hence the `setItems([]);` below
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  const postNewItem = (newItem) => {
    axios
      .post("/item-post", newItem)
      .then((res) => {
        setItems([res.data, ...items]);
        setFormValues(initialFormValues);
        console.log(items);
        history.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // For expand/collapse functionality of the main SellForm div

  // Uses yup to check for validity.
  // If invalid, sets error message to state with `setFormErrors`.
  // If valid, sets form values for SellForm.
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
    setFormValues({ ...formValues, [name]: value });
  };

  // Adds new item based on formValues submitted from SellForm
  const submitIt = () => {
    const newItem = {
      owner: formValues.owner.trim(),
      itemName: formValues.itemName.trim(),
      itemDescription: formValues.itemDescription.trim(),
      itemPrice: formValues.itemPrice.trim(),
      itemCurrency: formValues.itemCurrency.trim(),
    };
    console.log(newItem);
    postNewItem(newItem);
  };

  // Submission button should only work if entries are valid (we're dealing with SellForm, still)
  useEffect(() => {
    Validation.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  // ****** SELLFORM FUNCTIONALITY ABOVE ******

  // ****** SIGNUPFORM FUNCTIONALITY BELOW ******

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const postNewUser = (newUser) => {
    axiosWithAuth()
      .post("register", newUser)
      .then((res) => {
        console.log("postNewUser promise:", res);
        localStorage.setItem("owner_id", res.data);
        setSignupFormValues(initialSignupFormValues);
        // console.log(users);
      })
      .catch((err) => {
        console.log("postNewUser catch", err);
      });
  };

  const changeSignup = (name, value) => {
    yup
      // SignupValidation.js, we need ******
      .reach(SignupValidation, name)
      .validate(value)
      .then(() => {
        // console.log(value);
        setSignupFormErrors({
          ...signupFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setSignupFormErrors({
          ...signupFormErrors,
          [name]: err.errors[0],
        });
      });
    setSignupFormValues({ ...signupFormValues, [name]: value });
  };

  const submitSignup = () => {
    const newUser = {
      firstName: signupFormValues.firstName.trim(),
      lastName: signupFormValues.lastName.trim(),
      email: signupFormValues.email.trim(),
      username: signupFormValues.username.trim(),
      password: signupFormValues.password.trim(),
    };
    console.log(newUser);
    postNewUser(newUser);
  };

  useEffect(() => {
    SignupValidation.isValid(signupFormValues).then((valid) => {
      setSignupFormDisabled(!valid);
    });
  }, [signupFormValues]);

  // ****** SIGNUPFORM FUNCTIONALITY ABOVE ******

  // ****** LOGINFORM FUNCTIONALITY BELOW ******

  const checkLogin = (loginObj) => {
    axiosWithAuth()
      .post("user-post", loginObj)
      .then((res) => {
        console.log("checkLogin res:", res);
        setUsers(res);
        localStorage.setItem("token", res.data.token);
        history.push("/");
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeLogin = (name, value) => {
    yup
      .reach(LoginValidation, name)
      .validate(value)
      .then(() => {
        // console.log(value);
        setSignupFormErrors({
          ...loginFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: err.errors[0],
        });
      });
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const submitLogin = () => {
    const loginInfo = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim(),
    };
    console.log(loginInfo);
    checkLogin(loginInfo);
  };

  useEffect(() => {
    LoginValidation.isValid(loginFormValues).then((valid) => {
      setLoginFormDisabled(!valid);
    });
  }, [loginFormValues]);

  // ****** LOGINFORM FUNCTIONALITY ABOVE ******

  // console.log(users);

  const showListing = () => {
    if (isLoggedIn) {
      return (
        <Link
          to={"/sellform"}
          style={{ color: "black", textDecoration: "none" }}
        >
          <p>Add a listing!</p>
        </Link>
      );
    } else {
      return <div>log in nerd lol</div>;
    }
  };

  return (
    <div>
      <nav className="container">
        <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link to={"/login"} style={{ color: "black", textDecoration: "none" }}>
          <p>Sign in</p>
        </Link>
        <Link to={"/signup"} style={{ color: "black", textDecoration: "none" }}>
          <p>Need an account?</p>
        </Link>
        {showListing()}
      </nav>
      <Route exact path="/login">
        <LoginForm
          values={loginFormValues}
          change={changeLogin}
          submit={submitLogin}
          disabled={loginFormDisabled}
          errors={loginFormErrors}
          className="form"
        />
      </Route>
      <Route path="/signup">
        <SignupForm
          values={signupFormValues}
          change={changeSignup}
          submit={submitSignup}
          disabled={signupFormDisabled}
          errors={signupFormErrors}
          className="form"
        />
      </Route>
      <Route path="/">
        <Home items={items} />
      </Route>
      <PrivateRoute
        path="/sellform"
        render={(props) => {
          return (
            <SellForm
              {...props}
              values={formValues}
              change={changeIt}
              submit={submitIt}
              disabled={disabled}
              errors={formErrors}
            />
          );
        }}
      />
    </div>
  );
}

{
  /* <Switch>
<Route path="/login">
  {
    loginRedirect ?
    <Redirect to="/" /> :
    <LoginForm
    values={loginFormValues}
    change={changeLogin}
    submit={submitLogin}
    disabled={loginFormDisabled}
    errors={loginFormErrors}
    className="form"
  />
  } */
}
{
  /* <Link to="/">Click here to continue to path `/` (home/items page) 
  after submitting login information.
  (I can't add the link to the submit button without cancelling the 
  form submission, for some reason.)</Link> */
}
// </Route>
// <Route path="/signup">
//   {/* <Link to="/login">Click here to continue to path `/login` (home/items page)
//   after submitting signup information.
//   (I can't add the link to the submit button without cancelling the
//   form submission, for some reason.)</Link> */}
//   {
//     signupRedirect ?
//     <Redirect to="/login" /> :
//     <SignupForm
//     values={signupFormValues}
//     change={changeSignup}
//     submit={submitSignup}
//     disabled={signupFormDisabled}
//     errors={signupFormErrors}
//     className="form"
//   />
//   }
// </Route>
// <Route exact path="/">
//   <nav className="container">
//     <Link to={"/"} style={{ color: "black", textDecoration: 'none' }}>
//       <p>Home</p>
//     </Link>
//     <Link to={"/profile"} style={{ color: "black", textDecoration: 'none' }}>
//       <p>User Profile</p>
//     </Link>
//   </nav>

{
  /* HERE BELOW */
}
// <div>
// {
//   expand ?
//   <>
//   <div className="expandedBar container" onClick={clickExpand}>Click to collapse form</div>
//   <SellForm
//     values={formValues}
//     change={changeIt}
//     submit={submitIt}
//     disabled={disabled}
//     errors={formErrors}
//     onClick={clickExpand}
//     className="form"
//   />
//   </>
//   : <div className="collapsedBar container" onClick={clickExpand}>Click to sell item</div>
// }
// </div>
{
  /* {HERE ABOVE} */
}

// <div className="hometext">
//   <h2 className="currentListing">Current Listings:</h2>
// </div>
// {
//   items.length === 0 ? <div className="none">No items listed</div> : items.map((order) => {
//     return <Item className="container" key={order.id} details={order} />
//   })
// }
// </Route>
{
  /* <Route path="/login">
  <LoginForm
  />
</Route> */
}
// </Switch>
