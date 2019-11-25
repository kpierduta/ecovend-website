import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 1rem;
  font-family: ${props => props.theme.primaryFontFamily};
  background-color: #aabcbf;
  padding-bottom: 2rem;

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .text {
    margin-top: 1rem;
  }

  .sub-text {
    padding-bottom: 4rem;
  }
`;

const LinkStyled = styled(Link)`
  font-family: ${props => props.theme.primaryFontFamily};
  background: transparent;
  border: none;
`;

class About extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Container className="container">
        <section className="section has-text-centered">
          <h1 className="title is-4  has-text-white is-capitalized">
            {home.greyBlockTitle}
          </h1>
          <div className="columns is-centered">
            <div className="column">
              <h6 className="subtitle is-6 has-text-white text">
                {home.greyBlockParagraph.internal.content}
              </h6>
              <h6 className="subtitle is-6 has-text-white text sub-text">
                {home.greyBlockSecondPara.internal.content}
              </h6>
              <LinkStyled to="/contact" className="title is-5 has-text-white">
                Contact
              </LinkStyled>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default About;
