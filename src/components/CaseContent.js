import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Casecard from './Casecard';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .has-text-orange {
    color: ${theme.secondaryColor};
  }
  .img {
    height: 25rem;
  }
  .para {
    padding: 2rem 0rem 0rem 0rem;
    line-height: 1.7;
  }
  .comment {
    padding: 4rem 0rem 0rem 0rem;
  }
  .text {
    text-align: right;
  }
  .my-card {
    margin-top: 1rem;
    padding: 1rem 0.5rem;
    background-color: ${theme.secondaryColor};
  }
`;

const CaseContent = () => (
  <Container>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-7">
            <figure className="image">
              <img src="/images/case/truck.png" />
            </figure>
          </div>
          <div className="column is-5">
            <h1 className="title is-4 has-text-orange">BRAKES</h1>
            <p>
              <span className="has-text-weight-semibold	 has-text-orange">
                Industry:
              </span>{' '}
              UK
            </p>
            <p>
              <span className="has-text-weight-semibold has-text-orange">
                Location:
              </span>
              Sussex
            </p>
            <p>
              <span className="has-text-weight-semibold	 has-text-orange">
                Size:
              </span>
              2000
            </p>
            <h1 className="title is-5 para has-text-orange">Company Bio</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Tristique
              sollicitudin nibh sit amet. Quisque id diam vel quam elementum.
            </p>
          </div>
          <div className="column is-7">
            <h1 className="subtitle is-3 comment has-text-orange">OVERVIEW</h1>
            <h1 className="subtitle is-5 para has-text-dark has-text-weight-semibold">
              Across 60 sites, over 50 waste streams, 15,000 tonnes of waste…
            </h1>
            <p>
              The Brakes Group have always been committed to reducing the
              environmental impact its business has on the communities they
              serve, with a three pillar approach to CSER in place to ensure
              that not only to Brakes lead in food service but in environmental
              affairs also.
            </p>
            <p className="para">
              ACM became Brakes’ preferred waste and recycling service provider
              in 2006. Now producing circa 15,000 tonnes of waste per year
              across multiple sites, this significant environmental goal would
              only be achieved by working in close partnership with both the
              Group and individual sites to devise innovative and
              environmentally focused initiatives.
            </p>
          </div>
          <div className="column is-5">
            <p className="is-size-5 comment is-italic is-pulled-right has-text-orange text">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Tristique
              sollicitudin nibh sit amet. Quisque id diam vel quam
            </p>
            <div className="is-italic is-pulled-right">
              <p className="has-text-weight-semibold">- Happy Customer</p>
              <p> Vice President</p>
              <p>Sales Client name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Casecard />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="subtitle is-4 comment has-text-orange">
              THE APPROACH
            </h1>
            <p className="para">
              ACM’s focus remains firmly on achieving the greenest possible
              outcome for Brakes, and their entire programme was based on
              realigning their segregation and disposal methods to follow the
              Waste Hierarchy.
            </p>
            <p className="para">
              When it comes to waste, ACM are able to provide an extensive and
              innovative range of waste handling and recycling equipment, from
              30 cardboard/plastic balers, 5 polystyrene densifiers and 20
              purpose built food compactors/dry mixed recycling compactors. All
              of this equipment is built to the highest of quality standards.
            </p>
            <div className="my-card ">
              <p className="subtitle is-4 has-text-white">
                Brakes have been able to achieve radical savings through waste
                minimization and recycling initiatives.
              </p>
            </div>
          </div>
          <div className="column">
            <h1 className="subtitle is-4 comment has-text-orange">
              THE SOLUTION
            </h1>
            <p className="para">
              By obtaining maximum rebates for materials such cardboard,
              polystyrene & plastics, diverting food waste to AD facilities and
              further reducing the amount of waste going to landfill and energy
              recovery ACM have been able to significantly reduce costs. The
              utilization of ACM’s compaction technology, haulage costs have
              been significantly reduced.
            </p>
            <p className="para">
              Not only have ACM helped Brakes on the road to zero % to landfill,
              we have worked hard to ensure the most sustainable end point
              disposal methods are being utilized. Through the use of innovative
              technological advances and the proper segregation of all waste
              materials, Brakes have been able to achieve radical savings
              through waste minimization and recycling initiatives, benefiting
              Brakes in achieving ISO 14001 across all UK sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default CaseContent;
