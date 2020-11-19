import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';

export default function LoginForm(props) {
  const {
    values,
    change,
    submit,
    disabled,
    errors,
  } = props

//   onSubmit
  const formSubmit = evt => {
    evt.preventDefault();
    submit();
    history.push("/signup");
  }

//   onChange
  const formChange = evt => {
    const { name, value, type, checked } = evt.target;
    // debugger;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  const history = useHistory();

  const routeToSignup = () => {
    history.push("/signup");
  }

  return (
    <form className='form container' onSubmit={formSubmit}>
      <div className='form-group submit headerbox'>
        <h2>Login</h2>
        <div name="errors" className='errors'>
          <div name="usernameError">{errors.username}</div>
          <div name="passwordError">{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <label>Username:&nbsp;
          <input
            value={values.username}
            onChange={formChange}
            name='username'
            type='text'
          />
        </label>
        <br></br>
        <label>Password:&nbsp;
          <input
            value={values.password}
            onChange={formChange}
            name='password'
            type='text'
          />
        </label>
        <br></br><br></br>
        <Button name="disabledButtSignup" disabled={disabled}>Submit</Button>
        <br></br><br></br>
        <p>
            Console log should return success message if the username and password submitted above
            can both be found in any given entry of the dummy api ("https://reqres.in/api/users") —— 
            which, notably, is currently populated BOTH with users AND with the items being sold.
        </p>
        <h4>If you don't have login credentials, sign up <button id="signUpBtn">here.</button></h4>
      </div>
    </form>
  )
}

// export default withRouter(SignupForm);