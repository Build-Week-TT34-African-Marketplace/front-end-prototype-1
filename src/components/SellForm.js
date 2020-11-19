import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

export default function SellForm(props) {
  const {
    values,
    change,
    submit,
    disabled,
    errors,
  } = props

  const history = useHistory()
  

//   onSubmit
  const formSubmit = evt => {
    evt.preventDefault();
    submit();
    history.push("/");
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
        <h2>Add Details for Item to Be Sold</h2>
        {/* <Link to="/">
            Go back home to see listings.
        </Link>
        <br></br><br></br> */}
        <Button name="disabledButt" disabled={disabled}>Submit</Button>

        <div name="errors" className='errors'>
          <div name="itemNameError">{errors.name}</div>
          <div name="itemDescriptionError">{errors.description}</div>
          <div name="itemPriceError">{errors.price}</div>
          <div name="itemLocationError">{errors.location}</div>
          <div name="itemCategoryError">{errors.category}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        
        <label>Item Name:&nbsp;
          <input
            value={values.name}
            onChange={formChange}
            name='name'
            type='text'
          />
        </label>
        <br></br>
        <label>Item Description:&nbsp;
          <input
            value={values.description}
            onChange={formChange}
            name='description'
            type='text'
          />
        </label>
        <br></br>
        <label>Item Price:&nbsp;
          <input
            value={values.price}
            onChange={formChange}
            name='price'
            type='text'
          />
        </label>
        <br></br>
        <label>Location:&nbsp;
          <input
            value={values.location}
            onChange={formChange}
            name='location'
            type='text'
          />
        </label>
        <br></br>
        <label>Category:&nbsp;
          <input
            value={values.category}
            onChange={formChange}
            name='category'
            type='text'
          />
        </label>
      </div>
    </form>
  )
}