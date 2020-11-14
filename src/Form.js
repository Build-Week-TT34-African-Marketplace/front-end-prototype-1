import React from 'react'
import { Link } from "react-router-dom";


export default function Form(props) {
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
        <h2>Add an Order</h2>
        <Link to="/">
            Go back home to see orders.
        </Link>
        <br></br><br></br>
        <button name="disabledButt" disabled={disabled}>submit</button>

        <div name="errors" className='errors'>
          <div name="nameError">{errors.name}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={formChange}
            name='name'
            type='text'
          />
        </label>

        <label>Size
          <select
            onChange={formChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='8"'>8"</option>
            <option value='12"'>12"</option>
            <option value='14"'>14"</option>
            <option value='16"'>16"</option>
          </select>
        </label>

        <div className='form-group checkboxes'>
            <h4>Toppings</h4>
            <label>Pepperoni
                <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={formChange}
                />
            </label>
            <label>Olives
                <input
                    type="checkbox"
                    name="olives"
                    checked={values.olives}
                    onChange={formChange}
                />
            </label>
            <label>Onions
                <input
                    type="checkbox"
                    name="onions"
                    checked={values.onions}
                    onChange={formChange}
                />
            </label>
            <label>Peppers
                <input
                    type="checkbox"
                    name="peppers"
                    checked={values.peppers}
                    onChange={formChange}
                />
            </label>
        </div>


        <label>Special Instructions
          <input
            value={values.instructions}
            onChange={formChange}
            name='instructions'
            type='text'
          />
        </label>
      </div>
    </form>
  )
}