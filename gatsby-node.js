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
            order
            newsCategory
            date
            newsTitle
            shortDescription {
              internal {
                content
              }
            }
            image {
              file {
                url
              }
            }
            description {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  // console.log('result', result);
  result.data.allContentfulNewsPage.edges.forEach(({ node }) => {
    // console.log('node', node);
    const pagePath = `blog/${node.slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/blog.js`),
      // additional data can be passed via context
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
