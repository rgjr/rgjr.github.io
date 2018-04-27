import React from 'react';
import PropTypes from 'prop-types';
import browserCheck from './browser-check';

const getBrowsersArr = () => {
  const browsers = [
    {
      name: 'mobile',
      isCurrenBrowser: browserCheck.isMobile()
    },
    {
      name: 'chrome',
      isCurrenBrowser: browserCheck.isChrome()
    },
    {
      name: 'firefox',
      isCurrenBrowser: browserCheck.isFireFox()
    },
    {
      name: 'safari',
      isCurrenBrowser: browserCheck.isSafari()
    },
    {
      name: 'opera',
      isCurrenBrowser: browserCheck.isOpera()
    },
    {
      name: 'ie',
      isCurrenBrowser: browserCheck.isIE()
    },
    {
      name: 'edge',
      isCurrenBrowser: browserCheck.isEdge()
    },
    {
      name: 'blink',
      isCurrenBrowser: browserCheck.isBlink()
    }
  ];

  return browsers;
};

const shouldRenderForBrowser = (props, browsers) => {
  const allBrowsers = browserCheck.allBrowsers;

  let restrictedBrowsers = [];
  let allowedBrowsers = [];

  const only = props.only === true || typeof props.only === 'undefined';
  const except = props.except === true;

  if (except) {
    allBrowsers.forEach(browser => {
      if (props[browser]) {
        restrictedBrowsers.push(browser);
      } else {
        allowedBrowsers.push(browser);
      }
    });
  } else if (only) {
    allBrowsers.forEach(browser => {
      if (props[browser]) {
        allowedBrowsers.push(browser);
      } else {
        restrictedBrowsers.push(browser);
      }
    });
  } else {
    allowedBrowsers = allBrowsers.slice();
  }

  const currentBrowser = browsers.find(
    browser => browser.isCurrenBrowser === true
  );

  if (currentBrowser && restrictedBrowsers.includes(currentBrowser.name)) {
    return false;
  } else if (currentBrowser && allowedBrowsers.includes(currentBrowser.name)) {
    return true;
  } else {
    return false;
  }

  const Browser = props => {
    const { children } = props;
    const browsers = getBrowsersArr();
    const shouldRender = shouldRenderForBrowser(props, browser);

    if (shouldRender) {
      return <div className="browser">{children}</div>;
    } else {
      return null;
    }
  };
};

Browser.propTypes = {
  chrome: PropTypes.bool,
  firefox: PropTypes.bool,
  safari: PropTypes.bool,
  opera: PropTypes.bool,
  ie: PropTypes.bool,
  edge: PropTypes.bool,
  blink: PropTypes.bool,
  mobile: PropTypes.bool,
  except: PropTypes.bool,
  only: PropTypes.bool,
  children: PropTypes.node
};

Browser.defaultProps = {
  chrome: false,
  firefox: false,
  safari: false,
  opera: false,
  ie: false,
  edge: false,
  mobile: false,
  blink: false
};

export default Browser;
