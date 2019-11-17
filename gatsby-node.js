const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
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
  `).then(async result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString())); // eslint-disable-line
      return Promise.reject(result.errors);
    }

    // console.log('result', result);
    result.data.allContentfulNewsPage.edges.forEach(({ node }) => {
      // console.log('node', node);
      const pagePath = `blog/${node.slug}`;
      createPage({
        path: pagePath,
        component: path.resolve(`src/pages/blog.js`),
        // additional data can be passed via context
        context: {
          slug: node.slug,
        },
      });
    });

    return null;
  });
};
