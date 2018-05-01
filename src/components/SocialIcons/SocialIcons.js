import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SocialIcons = (props, context) => {
  const {
    theme: { colorPrimary }
  } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rgjr"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/rgjr_"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/story/2287992"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-stack-overflow" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rgutierrez"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@rgjr"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-medium" />
      </a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
