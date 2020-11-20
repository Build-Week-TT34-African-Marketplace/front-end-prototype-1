import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from "reactstrap";



export default function SignupForm(props) {
  const history = useHistory()
  const {
    values,
    change,
    submit,
    disabled,
    errors,
  } = props

  const [toggleState, setToggleState] = useState({
    toggle: "",
  })
  const [selectionState, setSelectionState] = useState({
    selection: "Select department",
  })

  const toggle = () => {
    setToggleState({ dropDownOpen: !toggleState.dropDownOpen })
  }

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
    console.log(value);
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
    if (name === "department"){
      setSelectionState({ selection: evt.target.value });
    }
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
        <h4>User information</h4>
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
        <ButtonDropdown >
          <Dropdown isOpen={toggleState.dropDownOpen} toggle={toggle} >
            <DropdownToggle color="primary" caret className="dropdown-toggle">
                {selectionState.selection}
            </DropdownToggle>
            <DropdownMenu className="currency-dropdown">
              <DropdownItem name="department" onClick={formChange} value="Select Department">Select Department</DropdownItem>
              <DropdownItem name="department" onClick={formChange} value="buyer">buyer</DropdownItem>
              <DropdownItem name="department" onClick={formChange} value="seller">seller</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonDropdown>
        <br></br>
        <br></br>
        <Button name="disabledButtSignup" disabled={disabled}>Submit</Button>
      </div>
    </form>
  )
}

// export default withRouter(SignupForm);
