/**
 * This is what the marketer pastes onto their website. This code is primarily responsible for loading the shim
 * It loads at the start of the document our shim script in order to get ready to been used by the client
 *
 * This is an example and doesn't works yet
 */
(function(window, document) {
  // Declare our global variable that will be used to load the widget and provide the JS SDK
  if (window.sequraFPWidget) {
    console.error('Sequra financial product embed already included');
    return;
  }
  (window.sequraFPWidget = {}), (methods = ['init']);

  // Keep track of the library calls that happen before our script is loaded,
  // so we can make sure to call them after it’s been loaded
  window.sequraFPWidget._beforeLoadCallQueue = [];
  methods.forEach(methodName => {
    window.sequraFPWidget[methodName] = function() {
      // eslint-disable-next-line prefer-rest-params
      window.sequraFPWidget._beforeLoadCallQueue.push([methodName, arguments]);
    };
  });

  // Add the shim’s script tag to the page:
  const elt = document.createElement('script');
  elt.type = 'text/javascript';
  elt.async = true;
  elt.src = '/main.js';
  const before = document.getElementsByTagName('script')[0];
  before.parentNode.insertBefore(elt, before);
})(window, document);
