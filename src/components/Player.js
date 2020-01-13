import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Section = styled.section`
  .test {
    background: black;
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

const Player = () => {
  const [play, change] = useState(false);
  return (
    <Section className="has-text-centered">
      <div className="test">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          playing={play}
        />
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
