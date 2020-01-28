const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulNewsPage {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulEcoVendMachines {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    return reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  result.data.allContentfulNewsPage.edges.forEach(({ node }) => {
    const pagePath = `blog/${node.slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  result.data.allContentfulEcoVendMachines.edges.forEach(({ node }) => {
    const pagePath = `machine/${node.slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/our-machines.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  const newsPosts = path.resolve(`src/templates/news.js`);
  paginate({
    createPage,
    items: newsPosts,
    itemsPerPage: 4,
    pathPrefix: '/news',
    pageLength: 5,
    component: path.resolve('src/templates/news.js'),
  });

  return true;
};
