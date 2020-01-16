import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppController';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';

export const store = configureStore();

// Here declare the default widget options. It gathers the item value from a data attribute of the root element
const defaultWidgetOptions: FinancialProductWidgetOptions = {
  layoutOptions: {
    containerId: 'default-container',
    containerClassName: '',
  },
};

ReactDOM.render(
  <Provider store={store}>
    <App {...defaultWidgetOptions} />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
