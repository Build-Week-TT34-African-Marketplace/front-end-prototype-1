import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from "reactstrap";



export default function SignupForm(props) {
  const history = useHistory()
  const {
    values,
    change,
    submit,
    disabled,
    errors,
  } = props


  // const state = {
  //   currency: '',
  //   dropDownOpen: '',
  // }
  // const [staate, setStaate] = useState({
  //   currency: '',
  // })
  const [toggleState, setToggleState] = useState({
    toggle: "",
  })
  const [selectionState, setSelectionState] = useState({
    selection: "Select department",
  })

  
  // const handleChange = (evt) => {
  //   console.log(evt.target.value)
  //   setStaate({ currency: evt.target.value })
  //   // setSelectionState({ selection: evt.target.value })
  // }
  //from below: onClick={handleChange}

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
        <h4>General information</h4>

       
        {/* <label>Department:&nbsp;
          <input
            value={values.department}
            onChange={formChange}
            name='department'
            type='text'
          />
        </label> */}

        {/* <label>Department:&nbsp;
          <select
            value={values.department}
            onChange={formChange}
            name='department'
          />
          <option value=''>- Select an option -</option>
          <option value='buyer'>Buyer</option>
          <option value='seller'>Seller</option>
        </label> */}
{/* 
        <DropdownToggle>
          Select an option
        </DropdownToggle>
        <ButtonDropdown>
        <DropdownMenu name="department">
          <DropdownItem value="buyer" onClick={formChange}>
            Buyer
          </DropdownItem>
          <DropdownItem value="seller" onClick={formChange}>
            Seller
          </DropdownItem>
        </DropdownMenu>
        </ButtonDropdown> */}


        <ButtonDropdown >
          <Dropdown isOpen={toggleState.dropDownOpen} toggle={toggle} >
            <DropdownToggle color="primary" caret className="dropdown-toggle">
                {selectionState.selection}
            </DropdownToggle>
            <DropdownMenu className="currency-dropdown">
                    <DropdownItem name="department" onClick={formChange} value="buyer">buyer</DropdownItem>
                    <DropdownItem name="department" onClick={formChange} value="seller">seller</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonDropdown>





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
        <button name="disabledButtSignup" disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}

// export default withRouter(SignupForm);
