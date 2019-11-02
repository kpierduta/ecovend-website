import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .columns {
    margin-top: 1rem;
  }
  .title.is-3 {
    padding-top: 2rem;
    color: ${theme.secondaryColor};
  }
  .para {
    padding: 0rem 0rem 1rem 0rem;
  }
  img {
    margin-top: 3rem;
  }
  .author {
    margin-top: 4rem;
  }
`;

const BlogContent = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs undelinetext="BL" simpletext="OG" />
      <div className="columns is-multiline">
        <div className="column is-8">
          <h1 className="title is-3">UPDATES REGARDING ECOVEND</h1>
          <h1 className="subtitle is-4">
            Accorss 60 sites, over 50 water streams, 15000 tones of waste
          </h1>
          <p className="para">
            The Brakes Group have always been committed to reducing the
            environmental impact its business has on the communities they serve,
            with a three pillar approach to CSER in place to ensure that not
            only to Brakes lead in food service but in environmental affairs
            also.
          </p>
          <p className="para">
            ACM became Brakes’ preferred waste and recycling service provider in
            2006. Now producing circa 15,000 tonnes of waste per year across
            multiple sites, this significant environmental goal would only be
            achieved by working in close partnership with both the Group and
            individual sites to devise innovative and environmentally focused
            initiatives.
          </p>
        </div>
        <div className="column is-4">
          <img src="/images/news/one.jpg" />
        </div>
        <div className="column is-12">
          <p className="para">
            By obtaining maximum rebates for materials such cardboard,
            polystyrene & plastics, diverting food waste to AD facilities and
            further reducing the amount of waste going to landfill and energy
            recovery ACM have been able to significantly reduce costs. The
            utilization of ACM’s compaction technology, haulage costs have been
            significantly reduced.
          </p>
          <p className="para">
            Not only have ACM helped Brakes on the road to zero % to landfill,
            we have worked hard to ensure the most sustainable end point
            disposal methods are being utilized. Through the use of innovative
            technological advances and the proper segregation of all waste
            materials, Brakes have been able to achieve radical savings through
            waste minimization and recycling initiatives, benefiting Brakes in
            achieving ISO 14001 across all UK sites.
          </p>
          <div className="author">
            <p className="has-text-weight-bold">Author: EcoVend</p>
            <p>Published: 01/12/2019</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default BlogContent;
