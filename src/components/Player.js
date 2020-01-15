/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 0rem;
  .test {
    background: ${props => props.theme.primaryColor};
  }
  .button {
    border-radius: 3rem;
    margin-top: -1.5rem;
    border: 1px solid ${props => props.theme.primaryColor};
    background-color: #fff !important;
    color: #fff !important;
    :hover {
      opacity: 1 !important;
    }
  }
`;

const Player = props => {
  const [play, change] = useState(false);
  return (
    <Section className="has-text-centered">
      <div className="test">
        <ReactPlayer url={props.src} playing={play} width={props.width} />
      </div>
      <button
        className={play ? 'is-hidden' : 'button is-large'}
        onClick={() => change(!play)}
      >
        <span className="icon has-text-danger">
          <i className="fas fa-play-circle"></i>
        </span>
      </button>
      <button
        className={play ? 'button is-large' : 'is-hidden'}
        onClick={() => change(!play)}
      >
        <span className="icon has-text-danger">
          <i className="fas fa-pause-circle"></i>
        </span>
      </button>
    </Section>
  );
};

export default Player;
