/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 0rem;
  .frame {
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
    <Section className="">
      <div className="frame">
        <ReactPlayer url={props.src} playing={play} width={props.width} />
      </div>
      <div className="has-text-centered">
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
      </div>
    </Section>
  );
};

export default Player;
