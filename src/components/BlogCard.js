import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1.75rem 0.5rem 4.5rem 0.5rem;

  img {
    border-radius: 1rem;
  }

  .card {
    box-shadow: none;
  }

  .card-content {
    padding: 0rem 0rem 0rem 1.5rem;
  }

  .text {
    color: ${props => props.theme.secondaryColor};
  }

  .title.is-4 {
    margin: 1rem 0rem 2rem 0rem !important;
    transition: color 0.2s;
    :hover {
      color: ${props => props.theme.secondaryColor};
    }
  }

  .icon {
    margin-left: 0rem !important;
  }

  .column:last-child {
    margin-top: -0.7rem;
  }
`;

const LinkStyled = styled(Link)`
  background-color: ${props => props.theme.secondaryColor};
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
                    <p className="subtitle is-6">
                      <span className="has-text-danger">{props.category}</span>{' '}
                      / {props.date}
                    </p>
                    <h1 className="title is-4">{props.title}</h1>
                    <p className="subtitle is-6">{props.para}</p>
                    <LinkStyled
                      to={props.to}
                      className="button is-rounded has-text-white"
                    >
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
