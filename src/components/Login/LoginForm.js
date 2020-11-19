import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';


export default function LoginForm(props) {
  const history = useHistory();
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
    history.push("/");
  }

//   onChange
  const formChange = evt => {
    const { name, value, type, checked } = evt.target;
    // debugger;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }


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
        {/* Works without the onClick in mine? */}
        <h4>If you don't have login credentials, sign up <button id="signUpBtn" onClick={()=>{routeToSignup()}}>here.</button></h4>
      </div>
    </form>
  )
}

// export default withRouter(SignupForm);