import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1.75rem 0.5rem 4.5rem 0.5rem;
  img {
    border-radius: 1rem;
    height: 18rem !important;
  }

  .card {
    box-shadow: none;
  }

  .card-content {
    padding: 0rem 0rem 0rem 1.5rem;
  }

  .title.is-5 {
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

const BlogCard = ({ item }) => (
  <Link to={`/blog/${item.slug}`}>
    <Section className="section">
      <div className="container">
        <div className="columns is-gapless">
          <div className="column is-5">
            <figure className="image is-square">
              <img src={item.thumbnail.file.url} alt="/" />
            </figure>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <div className="content">
                      <p className="subtitle is-6">
                        <span className="has-text-danger">{item.category}</span>{' '}
                        {item.dateOfPublish}
                      </p>
                      <h1 className="title is-5">{item.newsTitle}</h1>
                      <p className="subtitle is-6">{item.excerpt}</p>
                      <Link
                        to={`/blog/${item.slug}`}
                        className="button is-primary is-rounded has-text-white "
                      >
                        Learn More
                        <span className="icon">
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Link>
);

export default BlogCard;
