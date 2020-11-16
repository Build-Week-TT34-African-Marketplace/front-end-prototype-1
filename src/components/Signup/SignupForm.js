import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';


export default function SignupForm(props) {
  const {
    values,
    change,
    submit,
    disabled,
    errors,
  } = props

//   onSubmit
  const formSubmit = evt => {
    evt.preventDefault()
    submit()
  }

//   onChange
  const formChange = evt => {
    const { name, value, type, checked } = evt.target
    // debugger;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={formSubmit}>
      <div className='form-group submit'>
        <h2>Sign Up</h2>
        <button name="disabledButtSignup" disabled={disabled}>Submit</button>
        <br></br>
        <br></br>

        <div name="errors" className='errors'>
          <div name="firstNameError">{errors.firstName}</div>
          <div name="lastNameError">{errors.lastName}</div>
          <div name="emailError">{errors.email}</div>
          <div name="usernameError">{errors.username}</div>
          <div name="passwordError">{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>First Name:&nbsp;
          <input
            value={values.firstName}
            onChange={formChange}
            name='firstName'
            type='text'
          />
        </label>
        <br></br>
        <label>Last Name:&nbsp;
          <input
            value={values.lastName}
            onChange={formChange}
            name='lastName'
            type='text'
          />
        </label>
        <br></br>
        <label>Email:&nbsp;
          <input
            value={values.email}
            onChange={formChange}
            name='email'
            type='email'
          />
        </label>
        <br></br>
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