import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .cookie-banner {
    position: fixed;
    bottom: 0.01rem;
    width: 90%;
    left: 5%;
    padding: 5px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: white;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
    font-size: 1rem;
  }
  .button {
    margin-right: 1rem;
  }
`;

const CookiesPopUp = () => {
  const [display, setDisplay] = useState(true);

  const rememberME =
    typeof window !== `undefined`
      ? window.localStorage.getItem('cookieAccepted')
      : null;

  if (rememberME) {
    return null;
  }
  return (
    <Container>
      <div className={display ? 'cookie-banner' : 'is-hidden'}>
        <p>
          By using our site, you acknowledge that you have read and understand
          our Cookie Policy, Privacy Policy, and our Terms of Service.
        </p>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem('cookieAccepted', true);
            setDisplay(false);
          }}
          className="button is-primary is-rounded">
          Agree
        </button>
      </div>
    </Container>
  );
};

export default CookiesPopUp;
