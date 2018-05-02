import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Footer = (props, context) => {
  const {
    theme: { colorPrimary, textPrimary }
  } = context;

  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>
          Made by{' '}
          <a
            href="https://github.com/rgjr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colorPrimary }}
          >
            Raul
          </a>{' '}
          with help from{' '}
          <a
            href="https://dev.to/flexdinesh/create-your-developer-landing-page-with-github-pages---42jk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ colorPrimary }}
          >
            Dinesh Pandiyan's
          </a>
          dev-landing-page
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
