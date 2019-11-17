import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';

const Section = styled.section`
  padding: 0rem 0.5rem 4.5rem 0.5rem;
  img {
    border-radius: 1rem;
  }
  .card {
    box-shadow: none;
  }
  .text {
    color: ${theme.secondaryColor};
  }
  .is-5 {
    transition: color 0.2s;
    :hover {
      color: ${theme.secondaryColor};
    }
  }
  .button {
  }
  .icon {
    margin-left: 0rem !important;
  }
`;

const LinkStyled = styled(Link)`
  font-weight: 400;
  background-color: ${theme.secondaryColor};
  transition: opacity 0.2s;
  :hover {
    color: #fff;
    opacity: 0.6;
  }
`;

const BlogCard = props => (
  <Section className="section" image={props.image}>
    <div className="container">
      <div className="columns is-gapless">
        <div className="column is-5">
          <img src={props.image} />
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <span className="text">{props.category}</span> /{' '}
                      {props.date}
                    </p>
                    <h1 className="title is-5 has-text-weight-semibold">
                      {props.title}
                    </h1>
                    <p>{props.para}</p>
                    <LinkStyled to={props.to} className="button is-rounded">
                      Learn More
                      <span className="icon">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </LinkStyled>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default BlogCard;
