/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 0rem;
  .frame {
    padding: 0.5rem 0.5rem 0.35rem 0.5rem;
    background: ${props => props.theme.primaryColor};
  }
  .button {
    border-radius: 3rem;
    margin-top: -1.5rem;
    border: 1px solid ${props => props.theme.primaryColor};
    background-color: #fff !important;
    color: #fff !important;
  }
`;

const Player = ({ src, width }) => {
  const [active, changeActive] = useState(false);

  return (
    <Section className="">
      <div className="frame">
        <ReactPlayer
          url={src}
          playing={active}
          width={width}
          height="100%"
          autoPlay={active}
        />
      </div>
      <div className="has-text-centered">
        <button
          type="button"
          className={active ? 'is-hidden' : 'button is-large'}
          onClick={() => changeActive(!active)}>
          <span className="icon has-text-danger">
            <i className="fas fa-play-circle"></i>
          </span>
        </button>
        <button
          type="button"
          className={active ? 'button is-large' : 'is-hidden'}
          onClick={() => changeActive(!active)}>
          <span className="icon has-text-danger">
            <i className="fas fa-pause-circle"></i>
          </span>
        </button>
      </div>
    </Section>
  );
};

export default Player;
