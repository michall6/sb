import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';

class BusinessDetails extends Component {
  continue = e => {
    e.preventDefault();
    // const isNotValid = this.props.isErrorbizname && this.props.isErrorDescription;

    // const iscategoryValid = this.props.validatecategory();


    if (!this.props.isErrorCategory) {
      // if (! isNotValid  ) {
      this.props.nextStep();
    }
  }

  render() {
    const {
      bizname,
      isErrorbizname,
      isErrorDescription,
      isErrorCategory,
      isErrorImg_url,
      isErrorHours,
      errorMessagebizname,
      errorMessageDescription,
      errorMessagewebsite_URL,
      errorMessage,
      errorMessageCategory,
      errorMessageImg_url,
      errorMessageHours,
      Description,
      category,
      img_url,
      hours,
      website_URL,
      errorMessagecategory,
      isErrorhours,
      errorMessagehours,
      isErrorimg_url,
      errorMessageimg_url,

      isErrorwebsite_URL,
      handleChange,

    } = this.props;

    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: 'Business Details' }, { label: 'Contact details' }, { label: 'Summary' }]}
            activeStep={0}
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
              <label htmlFor='Business name' className='form-group__label'>
                Business Name
              </label>
              <input type='text' value={bizname} name='Business name' onChange={handleChange('bizname')} className='form-group__input' />
              <p className='error'>{isErrorbizname && errorMessagebizname}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='website_URL' className='form-group__label'>
                Website_URL
              </label>
              <input type='text' value={website_URL} name=' website_URL' onChange={handleChange('website_URL')} className='form-group__input' />
              <p className='error'>{isErrorwebsite_URL && errorMessagewebsite_URL}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='Description' className='form-group__label'>
                Description
              </label>
              <input type='text' value={Description} name=' Description' onChange={handleChange('Description')} className='form-group__input' />
              <p className='error'>{isErrorDescription && errorMessageDescription}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='category' className='form-group__label'>
                Category
              </label>
              <input type='text' value={category} name=' category' onChange={handleChange('category')} className='form-group__input' />
              <p className='error'>{isErrorCategory && errorMessagecategory}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='hours' className='form-group__label'>
                hours
              </label>
              <input type='text' value={hours} name='hours' onChange={handleChange('hours')} className='form-group__input' />
              <p className='error'>{isErrorhours && errorMessagehours}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='img_url' className='form-group__label'>
                img_url
              </label>
              <input type='text' value={img_url} name='img_url' onChange={handleChange('img_url')} className='form-group__input' />
              <p className='error'>{isErrorimg_url && errorMessageimg_url}</p>
            </div>



         
          </div>


          <div style={{ textAlign: 'center' }}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </div>

        </form>
      </div>
    )
  }
}

export default BusinessDetails;