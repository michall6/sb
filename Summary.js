import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';

class Summary extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { 
      bizname, 
      Description,  
      email, 
      phone,  
       category, 
         img_url, 
         hours, 
      website_URL, 
      city,  
      street, 
       number, 
        whatsapp, 
      submitData,
    } = this.props;

    return (
      <div className='form'>
        <div>
          <Stepper
            steps={[{ label: 'Business Details' }, { label: 'Contact Details' }, { label: 'Summary' }]}
            activeStep={2}
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

          <div className='summary'>
            <h2 className='summary__heading'>Confirm your Business Details</h2>
            <div>
              <div>
                <p><span className='summary__item-title'>Business Name:</span> { bizname }  </p>
              </div>
              <div>
                <p><span className='summary__item-title'>Business Description:</span>  { Description }</p>
              </div>
              <div>
                <p><span className='summary__item-title'>Business category:</span>  { category }</p>
              </div>
              <div>
                <p><span className='summary__item-title'>Business website_URL:</span>  { website_URL }</p>
              </div>
              <div>
                <p><span className='summary__item-title'>Business img_url:</span>  { img_url }</p>
              </div>
              <div>
                <p><span className='summary__item-title'>hours:</span> { hours }</p>
              </div>
             
             
            </div>
          </div>

          <div className='summary'>
            <h2 className='summary__heading'>Confirm your Contact details</h2>
            <div>
            <div>
                <p><span className='summary__item-title'>Phone:</span> { phone }</p>
              </div>
            <div>
                <p><span className='summary__item-title'>street:</span> { street }</p>
              </div>
            <div>
                <p><span className='summary__item-title'>number:</span> { number }</p>
              </div>
            <div>
                <p><span className='summary__item-title'>whatsapp:</span> { whatsapp }</p>
              </div>
            <div>
            <p><span className='summary__item-title'>Email:</span> { email }</p>
              </div>
            <div>
            <p><span className='summary__item-title'>city:</span> {  city }</p>
              </div>
            </div>
          </div>

          <div className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' type='submit' onClick={submitData}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;