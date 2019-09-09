import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify="true"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name:{' '}
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email Address:{' '}
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    );
  }
}
