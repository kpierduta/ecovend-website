import {
FacebookShareButton,
TwitterShareButton,
EmailShareButton,
} from 'react-share';

const metaUrl = `${config.siteUrl}/product/${product.slug.current}`;
const metaTitle = `Checkout ${product.title} at 6in`;

<div className="level-item">
                    <FacebookShareButton
                      url={metaUrl}
                      quote={metaTitle}
                      hashtag="#sejalsuits"
                    >
                      <i className="fab fa-facebook-square" />
                    </FacebookShareButton>
                  </div>
                  <div className="level-item">
                    <TwitterShareButton
                      url={metaUrl}
                      title={metaTitle}
                      hashtags={['sejalsuits', 'punjabisuits']}
                    >
                      <i className="fab fa-twitter-square" />
                    </TwitterShareButton>
                  </div>
                  <div className="level-item">
                    <EmailShareButton url={metaUrl} subject={metaTitle}>
                      <i className="fas fa-envelope" />
                    </EmailShareButton>
                  </div>
