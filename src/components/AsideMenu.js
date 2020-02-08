import React from 'react';
import styled from 'styled-components';

import Followus from './FollowUs';
import HelpCard from './HelpCard';

const Section = styled.div`
  .menu-list li ul {
    padding: 0rem;
    border-left: none !important;
  }

  .menu-list li {
    padding-left: 0.5rem;
    font-size: 1.1rem;
    border-left: 4px solid #dbdbdb;
    transition: border-left 0.5s, padding-left 0.5s;
    :hover {
      padding-left: 0.5rem;
      border-left: 5px solid ${props => props.theme.secondaryColor};
    }
  }

  button {
    margin-top: 0.5rem;
  }

  .icon {
    color: ${props => props.theme.primaryColor};
    margin-right: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const AsideMenu = ({ onChange }) => (
  <Section>
    <Followus />
    <h5 className="title is-5">Categories</h5>
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <button type="button" onClick={() => onChange('Business')}>
            Business
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onChange('PR')}>
            PR
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onChange('Projects')}>
            Projects
          </button>
        </li>
      </ul>
    </aside>
    <div className="posts">
      <HelpCard />
    </div>
  </Section>
);

export default AsideMenu;
