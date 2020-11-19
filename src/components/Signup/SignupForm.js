import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';



export default function SignupForm(props) {
  const history = useHistory()
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
    history.push('/login')
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
      <div className='form-group submit headerbox'>
        <h2>Sign Up</h2>
        <h4>Please sign up to sell items on the marketplace</h4>
        <br></br>
        <br></br>

        <div name="errors" className='errors'>
          <div name="departmentError">{errors.department}</div>
          <div name="usernameError">{errors.username}</div>
          <div name="passwordError">{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

       
        <label>Department:&nbsp;
          <input
            value={values.department}
            onChange={formChange}
            name='department'
            type='text'
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
        <br></br>
        <br></br>
        <Button name="disabledButtSignup" disabled={disabled}>Submit</Button>
      </div>
    </form>
  )
}

// export default withRouter(SignupForm);