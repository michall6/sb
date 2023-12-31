import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';

// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class ContactDetails extends Component {
  continue = e => {
    e.preventDefault();

    // const isNotValid = this.props.isErrorwhatsapp() || this.props.isErrorcity()||this.props.isErrorCategory();



    //  if (! isNotValid  ) {
    this.props.nextStep();
    // }
  }

  render() {
    const {
      city,
      street,
      number,
      isErrornumber,
      errorMessagenumber,
      // hours,
      // isErrorhours,
      // errorMessagecategory,
      // errorMessagehours,
      img_url,
      isErrorimg_url,
      errorMessageimg_url,
      email,
      phone,
      whatsapp,
      isErrorcity,
      isErrorwhatsapp,
      errorMessagewhatsapp,
      isErrorstreet,
      errorMessagestreet,
      errorMessagecity,
      handleChange
    } = this.props;


    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: 'Business Details' }, { label: 'Contact details' }, { label: 'Summary' }]}
            activeStep={1}
            styleConfig={{
              activeBgColor: '#2b7cff',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '3em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <div className='form-group'>

            <div className='form-group__element'>
              <label htmlFor='city' className='form-group__label'>
                city
              </label>
              <input type='text' value={city} name=' city' onChange={handleChange('city')} className='form-group__input' />
              <p className='error'>{isErrorcity && errorMessagecity}</p>
            </div>
            <div className='form-group__element'>
              <label htmlFor='street' className='form-group__label'>
                street
              </label>
              <input type='text' value={street} name='street' onChange={handleChange('street')} className='form-group__input' />
              <p className='error'>{isErrorstreet && errorMessagestreet}</p>
            </div>
            <div className='form-group__element'>
              <label htmlFor='number' className='form-group__label'>
                number
              </label>
              <input type='text' value={number} name='number' onChange={handleChange('number')} className='form-group__input' />
              <p className='error'>{isErrornumber && errorMessagenumber}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='whatsapp' className='form-group__label'>
                whatsapp
              </label>
              <input type='text' value={whatsapp} name='whatsapp' onChange={handleChange('whatsapp')} className='form-group__input' />
              <p className='error'>{isErrorwhatsapp && errorMessagewhatsapp}</p>
            </div>

            {/* <div className='form-group__element'>
              <label htmlFor='img_url' className='form-group__label'>
                img_url
              </label>
              <input type='text' value={img_url} name='img_url' onChange={handleChange('img_url')} className='form-group__input' />
              <p className='error'>{isErrorimg_url && errorMessageimg_url}</p>
            </div> */}

            <div className='form-group__element'>
              <label htmlFor='email' className='form-group__label'>
                Email
              </label>
              <input type='email' value={email} name='email' onChange={handleChange('email')} className='form-group__input' />
            </div>

            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
                Phone
              </label>
              <input type='text' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' />
            </div>
            {/* <div className='form-group__element'>
              <label htmlFor='phone2' className='form-group__label'>
              Phone 2
              </label>
              <input type='text' value={phone2} name='phone2' onChange={handleChange('phone2')} className='form-group__input' />
            </div> */}
          </div>


          <div className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </div>

        </form>
      </div>
    )
  }
}

export default ContactDetails;