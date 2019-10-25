import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .para {
    padding: 2rem 0rem 0rem 0rem;
  }
  .comment {
    padding: 4rem 0rem 0rem 0rem;
  }
`;

const CaseContent = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src="//images.xtensio.com/images/big/xag3i4p4/oLYjK3kfZUaoZ8jZ98lIpQ.png" />
          </figure>
          <h1 className="subtitle is-3 para">OverView</h1>
          <p>
            Case studies should speak to your target client. Choose a project
            that aligns with your ideal client and that showcases how your
            product or services were effective in solving the client's problem
            and reaching their goal. Give a quick summary of the story you're
            about to tell, including a brief overview of the problem and how you
            solved it. Keep this section to 3-5 sentences
          </p>
        </div>
        <div className="column is-4">
          <h1 className="title is-2">Client Name</h1>
          <p>Industry:</p>
          <p>Location:</p>
          <p>Size:</p>
          <h1 className="title is-5 para">Company Bio</h1>
          <p>
            Short description of the client and its main service or product. If
            there is more than one product, give an overview of the division or
            product you worked on
          </p>
          <p className="is-size-4 comment is-italic">
            "Catchy quote from the client highlighting how valuable your service
            was to them."
          </p>
          <div className="is-italic is-pulled-right">
            <p className="has-text-weight-semibold">- Happy Customer</p>
            <p> Vice President</p>
            <p>Sales Client name</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default CaseContent;
