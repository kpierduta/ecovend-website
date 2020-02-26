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
    <StyledFrom onSubmit={handleSubmit}>
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
            {errors.phone && touched.phone && (
              <p className="help is-danger">{errors.phone}</p>
            )}
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
            {errors.address && touched.address && (
              <p className="help is-danger">{errors.address}</p>
            )}
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
            <select>
              <option>Select Sector</option>
              <option>1. Food manufacturing</option>
              <option>2. Food distribution </option>
              <option>3. Distribution</option>
              <option>4. Leisure </option>
              <option>5. Zoos</option>
              <option>6. Leisure Centre</option>
              <option>7. Hotels </option>
              <option>8. Defence </option>
              <option>9. Transport </option>
              <option>10. Hospitality </option>
              <option>11. Retail </option>
              <option>12. Utilities </option>
              <option>13. Telecoms</option>
              <option>14. Power </option>
              <option>15. Construction </option>
              <option>16. Public services</option>
              <option>17. Universities </option>
              <option>18. Construction </option>
              <option>19. Universities</option>
              <option>20. Construction</option>
              <option>21. Local Authority </option>
              <option>22. Facilities Management</option>
              <option>23. Cleaning</option>
              <option>24. Property management </option>
              <option>25. Shopping centres</option>
              <option>26. Office blocks</option>
              <option>27. Schools </option>
              <option>28. Hospitals </option>
              <option>29. Prisons </option>
              <option>30. Leisure centres</option>
              <option>31. Airports</option>
              <option>32. Healthcare </option>
              <option>33. Restaurants </option>
              <option>34. Civil & infrastructure </option>
              <option>35. Stadia </option>
              <option>36. Other</option>
            </select>
          </div>
          {errors.select && touched.select && (
            <p className="help is-danger">{errors.select}</p>
          )}
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
          {errors.message && touched.message && (
            <p className="help is-danger">{errors.message}</p>
          )}
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
    phone: yup.string().required('Phone Number is required!'),
    address: yup.string().required('Address is required!'),
    company: yup.string().required('company is required!'),
    find: yup.string().required('required field'),
    message: yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    props.addContact(values);
    setSubmitting(false);
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);
