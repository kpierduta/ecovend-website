import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const StyledFrom = styled.form`
  padding: 0.5rem 0rem;
  .input {
    padding: 0;
    height: 2.5rem;
    border-bottom: 1px solid ${props => props.theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.secondaryColor};
      opacity: 1;
    }
  }
  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: ${props => props.theme.secondaryColor};
  }

  .select select {
    color: ${props => props.theme.secondaryColor};
    padding-left: 0.5rem;
    background-color: #fff;
    border-color: #fff;
    border-bottom: 1px solid ${props => props.theme.secondaryColor} !important;

    :active,
    :focus {
      box-shadow: none;
      border: 1px solid ${props => props.theme.secondaryColor} !important;
    }
  }

  textarea {
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.secondaryColor};
      opacity: 1;
    }
    :hover {
      border-color: #fff;
    }
  }

  .control {
    padding: 0.5rem;
    :hover {
      border-color: #fff;
    }
  }

  .map {
    padding-bottom: 0rem;
  }

  .button {
    margin-left: 0.5rem;
  }

  .textarea,
  .first {
    padding-left: 0rem;
  }

  form,
  .field {
    width: 100%;
  }
`;

const SectorList = [
  'Food manufacturing',
  'Food distribution',
  'Distribution',
  'Leisure',
  'Zoos',
  'Leisure Centre',
  'Hotels',
  'Defence',
  'Transport',
  'Hospitality',
  'Retail',
  'Utilities',
  'Telecoms',
  'Power',
  'Construction',
  'Public services',
  'Universities',
  'Local Authority',
  'Facilities Management',
  'Cleaning',
  'Property management',
  'Shopping centres',
  'Office blocks',
  'Schools',
  'Hospitals',
  'Prisons',
  'Airports',
  'Healthcare',
  'Restaurants',
  'Civil & infrastructure',
  'Stadia',
  'Other',
];

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <StyledFrom data-netlify="true" name="contact Form" onSubmit={handleSubmit}>
      <div className="is-flex">
        <div className="field">
          <div className="control">
            <input
              className="input"
              name="name"
              placeholder="Name*"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="help is-danger">{errors.name}</p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              name="email"
              placeholder="Email*"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="help is-danger">{errors.email}</p>
            )}
          </div>
        </div>
      </div>
      <div className="is-flex">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="Telephone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              name="address"
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            name="company"
            placeholder="Company*"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.company && touched.company && (
            <p className="help is-danger">{errors.company}</p>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select">
            <select
              value={values.sector}
              onChange={handleChange}
              name="sector"
              onBlur={handleBlur}
            >
              <option value="">Select Sector</option>
              {SectorList.map(items => (
                <option value={items}>{items}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input"
            name="find"
            placeholder="How did you find us?*"
            value={values.find}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.find && touched.find && (
            <p className="help is-danger">{errors.find}</p>
          )}
        </div>
      </div>
      <div className="field has-text-left">
        <div className="control">
          <textarea
            className="textarea"
            name="message"
            placeholder="Type your message here..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button
          type="submit"
          className="button  is-medium is-primary"
          disabled={isSubmitting}
          style={{ marginTop: '1.5rem' }}
        >
          Submit Now
        </button>
      </div>
    </StyledFrom>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    sector: '',
    address: '',
    company: '',
    find: '',
    message: '',
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required('Full name is required!'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    company: yup.string().required('company is required!'),
    find: yup.string().required('required field'),
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact Form', ...values }),
    });
    alert('done');
    console.log(values, 'vlaues');
    resetForm(false);
    // props.addContact(values);
    setSubmitting(false);
  },
  // displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);
