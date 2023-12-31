import React, { Component } from 'react';

import BusinessDetails from './BusinessDetails';
import  ContactDetails from './ContactDetails';
import Summary from './Summary';


class Form extends Component {
  state = {
    step: 1,
    bizname: '',
    Description: '',
    email: '',
    phone: '',
    phone2: '',
 
    isErrorbizname: false,
    isErrorDescription: false,
    isErrorCategory: false,
    isErrorImg_url: false,
    isErrorHours: false,
    isErrorwebsite_URL: false,
    errorMessagebizname: 'Type bizname (at least 2 characters)',
    errorMessageDescription: 'Type Description (at least 2 characters)',
    errorMessageCategory: 'Type  Category (at least 2 characters)',
    errorMessageImg_url: 'Type Img_url (at least 2 characters)',
    errorMessageHours: 'Type Hours (at least 2 characters)',
    errorMessagewebsite_URL: 'Type website_URL (at least 2 characters)'
    
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })

    if (input === 'bizname') {
      if (this.state.bizname.length >= 1) {
        this.setState({
          isErrorbizname: true
        })
      }
    }

    else if (input === 'description') {
      if (this.state.Description.length <= 1) {
        this.setState({
          isErrorDescription: true
        })
      }
    }
    else if (input === 'category') {
      if ( this.state.category &&  this.state.category.length >= 1) {
        this.setState({
          isErrorCategory: true
        })
      }
    }
    else if (input === 'img_url') {
      if (this.state.img_url &&   this.state.img_url.length >= 1) {
        this.setState({
          isErrorImg_url: true
        })
      }
    }
    else if (input === 'Hours') {
      if (this.state.Hours.length >= 1) {
        this.setState({
          isErrorHours: true
        })
      }
    }
    else if (input === 'website_URL') {
      if (this.state.website_URL && this.state.website_URL.length >= 1 ) {
        this.setState({
          isErrorwebsite_URL: true
        })
      }
    }
 
  }
 

 
  

  submitData = e => {
    e.preventDefault();
    alert('Data sent');
  }

  render() {
    const {
      step,
      bizname,
      Description,
      email,
      phone,
      website_URL,
      img_url,
      whatsapp,
      category,
      street,
      number,
      hours,
      city,
      isErrorbizname,
      isErrorDescription,
      errorMessagebizname,
      errorMessageDescription,
 
    isErrorCategory,
    // isErrorImg_url: true,
    // isErrorHours: true,
    // isErrorwebsite_URL: true,
    // errorMessagebizname: 'Type bizname (at least 2 characters)',
    // errorMessageDescription: 'Type Description (at least 2 characters)',
    errorMessageCategory,
    // errorMessageImg_url: 'Type Img_url (at least 2 characters)',
    // errorMessageHours: 'Type Hours (at least 2 characters)',
    // errorMessagewebsite_URL: 'Type website_URL (at least 2 characters)'
    
    } = this.state;


    switch (step) {
      case 1:
        return (
          <BusinessDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            bizname={bizname}
            Description={Description}
            category={category}     
            img_url={img_url}
            hours={hours}
          
            website_URL={website_URL}

            isErrorbizname={isErrorbizname}
            isErrorDescription={isErrorDescription}
            errorMessagebizname={errorMessagebizname}
            errorMessageDescription={errorMessageDescription}

            isErrorCategory={isErrorCategory}
            errorMessageCategory={errorMessageCategory}

            // errorMessagebizname={errorMessagebizname}
            // errorMessageDescription={errorMessageDescription}
            // isErrorbizname={isErrorbizname}
            // isErrorDescription={isErrorDescription}
            // errorMessagebizname={errorMessagebizname}
            // errorMessageDescription={errorMessageDescription}
          />
        )
      case 2:
        return (
          < ContactDetails
            whatsapp={whatsapp}
            email={email}
            phone={phone}
            city={city}
            street={street}
            number={number}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
           />
        )
      case 3:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            bizname={bizname}
            Description={Description}
            category={category}     
            img_url={img_url}
            hours={hours}
            whatsapp={whatsapp}
            email={email}
            phone={phone}
            city={city}
            street={street}
            number={number}
            website_URL={website_URL}

             submitData={this.submitData}
          />
        )
      default: return null
    }
  }
}

export default Form;
