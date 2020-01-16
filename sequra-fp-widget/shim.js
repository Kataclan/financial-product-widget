/**
 * The shim is responsible to 'talk' with our react app. First, it renders the app
 * inside an iframe and inits it.
 *
 * It must have a method in order to send an event which is listened by our app in
 * order to update the instalments when the price of the product changes.
 *
 * This is pseudocoded and doesn't work
 *
 */
module.exports = class SequraFPWidget {
  init = (elementId, itemValue) => {
    this.wrapperId = elementId;
    this.itemValue = itemValue;
    this.mountIframe();
  };

  mountIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.onload = () => {
      this.iframe.contentWindow.postMessage({
        type: 'INIT_IFRAME',
        value: { itemValue: this.itemValue },
      });
    };
    iframe.src = 'http://localhost:3000/financial-product-widget/index.html';
    iframe.crossorigin = 'anonymous';
    this.iframe = iframe;
    const wrapper = document.getElementById(this.wrapperId);
    wrapper.appendChild(this.iframe);
  };

  updateItemValue = value => {
    this.itemValue = value;
    this.iframe.contentWindow.postMessage({ type: 'UPDATE_ITEM_VALUE', value: this.itemValue });
  };
};
