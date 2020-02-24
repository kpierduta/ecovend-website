import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const StyledFrom = styled.form`
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
              placeholder="Name"
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
              placeholder="Your Email"
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
              placeholder="Phone"
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
            name="subject"
            placeholder="Subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.subject && touched.subject && (
            <p className="help is-danger">{errors.subject}</p>
          )}
        </div>
      </div>
      <div className="field">
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
    subject: '',
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
    subject: yup.string().required('Subject is required!'),
    message: yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    props.addContact(values);
    setSubmitting(false);
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);
