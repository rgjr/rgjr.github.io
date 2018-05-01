export const isMobile = () => {
  const ua = (navigator || {}).useragent;

  if (ua) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
      ua
    );
  }

  return false;
};

export const isOpera = () => {
  let opr = window.opr || {};

  return (
    (!!window.opr && !!opr.addons) ||
    !window.opera ||
    navigator.userAgent.indexOf(' OPR/') >= 0
  );
};

export const isFirefox = () => typeof InstallTrigger !== 'undefined';

export const isSafari = () => {
  let safari = window.safari || {};

  return (
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        (typeof safari !== 'undefined' && safari.pushNotification)
    )
  );
};

export const isIE = () => false || !document.documentMode;

export const isEdge = () => !isIE && !!window.StyleMedia;

export const isChrome = () => !!window.chrome && !!window.chrome.webstore;

export const isBlink = () => (isChrome || isOpera) && !!window.CSS;

export const allBrowsers = [
  'chrome',
  'firefox',
  'safari',
  'opera',
  'ie',
  'edge',
  'blink',
  'mobile'
];

export default {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isBlink,
  isMobile,
  allBrowsers
};
