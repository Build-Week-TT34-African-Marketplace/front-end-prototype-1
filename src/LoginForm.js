import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

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
  }

//   onChange
  const formChange = evt => {
    const { name, value, type, checked } = evt.target;
    // debugger;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={formSubmit}>
      <div className='form-group submit'>
        <h2>Login</h2>
        {/* onClick={() => props.history.push("/")} */}
        <button name="disabledButtSignup" disabled={disabled}>submit</button>
        <br></br>

        <div name="errors" className='errors'>
          <div name="usernameError">{errors.username}</div>
          <div name="passwordError">{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>If you don't have login credentials, go to `/signup`.</h4>
        <p>
            Console log should return success message if the username and password submitted below
            can both be found in any given entry of the dummy api ("https://reqres.in/api/users") —— 
            which, notably, is currently populated BOTH with users AND with the items being sold.
        </p>

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
      </div>
    </form>
  )
}

// export default withRouter(SignupForm);