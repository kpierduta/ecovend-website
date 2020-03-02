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
  .button.is-large {
    /* z-index: -1; */
  }
  .react-player__preview {
    height: 20rem !important;
    align-items: flex-end !important;
    margin-bottom: 0.12rem;
  }
  .react-player__shadow {
    background: transparent !important;
    width: 100px !important;
    height: 100px !important;
    z-index: 1 !important;
    margin-bottom: -3.5rem !important;
  }
  .react-player__play-icon {
    border-width: 0px !important;
  }
`;

const Player = ({ src, width, poster, play, button }) => {
  const [active, changeActive] = useState(play);
  const [display, changeDisplay] = useState(true);
  return (
    <Section className="">
      <div className="frame">
        <ReactPlayer
          url={src}
          light={poster}
          playing={active}
          width={width}
          height="100%"
          onPlay={() => changeDisplay(false)}
        />
      </div>
      <div className="has-text-centered">
        <button
          type="button"
          className={display ? 'button is-large' : 'is-hidden'}
          onClick={() => changeActive(true)}
        >
          <span className="icon has-text-danger">
            <i className="fas fa-play-circle"></i>
          </span>
        </button>

        <button
          type="button"
          className={display ? 'is-hidden' : 'button is-large'}
          onClick={() => {
            changeActive(!active);
            changeDisplay(!display);
          }}
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
