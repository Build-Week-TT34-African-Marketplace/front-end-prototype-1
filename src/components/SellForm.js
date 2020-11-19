import React from 'react'
import { Link } from "react-router-dom";
import SelectCurrency from 'react-select-currency';
import { Button } from 'reactstrap';

export default function SellForm(props) {
  const {
    values,
    change,
    submit,
    disabled,
    errors,
  } = props

  const onSelectedCurrency = currencyAbbrev => {}

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
        <h2>Add Details for Item to Be Sold</h2>
        {/* <Link to="/">
            Go back home to see listings.
        </Link>
        <br></br><br></br> */}
        <Button name="disabledButt" disabled={disabled}>Submit</Button>

        <div name="errors" className='errors'>
          <div name="ownerError">{errors.owner}</div>
          <div name="itemNameError">{errors.itemName}</div>
          <div name="itemDescriptionError">{errors.itemDescription}</div>
          <div name="itemPriceError">{errors.itemPrice}</div>
          <div name="itemCurrencyError">{errors.itemCurrency}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>Owner:&nbsp;
          <input
            value={values.owner}
            onChange={formChange}
            name='owner'
            type='text'
          />
        </label>
        <br></br>
        <label>Item Name:&nbsp;
          <input
            value={values.itemName}
            onChange={formChange}
            name='itemName'
            type='text'
          />
        </label>
        <br></br>
        <label>Item Description:&nbsp;
          <input
            value={values.itemDescription}
            onChange={formChange}
            name='itemDescription'
            type='text'
          />
        </label>
        <br></br>
        <label>Item Price:&nbsp;
          <input
            value={values.itemPrice}
            onChange={formChange}
            name='itemPrice'
            type='text'
          />
        </label>
        <br></br>
        <label>Currency:&nbsp;
          <input
            value={values.itemCurrency}
            onChange={formChange}
            name='itemCurrency'
            type='text'
          />
            <p>Search here for currency abbreviation:
                <SelectCurrency value={'USD'} onChange={formChange} onSelectedCurrency={onSelectedCurrency} />
            </p>
        </label>
        {/* <br></br>
        <label>Item Price:&nbsp;
          <input
            value={values.itemPrice}
            onChange={formChange}
            name='itemPrice'
            type='text'
          />
        </label> */}
      </div>
    </form>
  )
}