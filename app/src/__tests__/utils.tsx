import * as React from 'react';
import { render, queryByAttribute, RenderResult } from '@testing-library/react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../store/reducer';
import { TEST_INITIAL_APP_STATE, DEFAULT_WIDGET_OPTIONS } from '../__mocks__/store';
import { State, AppActionTypes } from '../store/types';
import AppController from '../AppController';

export interface RenderWithReduxProps extends RenderResult {
  store: Store<State, AppActionTypes>;
}
// This is a handy function to make available for all tests that deal with connected components.
// You can provide initialState for the entire store that the ui is rendered with
// Also store is returned for developing pruposes
export const renderWithRedux = (
  ui: any,
  initialState = TEST_INITIAL_APP_STATE,
  store = createStore(reducer, initialState),
): RenderWithReduxProps => ({ ...render(<Provider store={store}>{ui}</Provider>), store });

// Renders our app with a redux container, and have initialState and store also as an args
export const renderAppWithRedux = (
  initialState = TEST_INITIAL_APP_STATE,
  store = createStore(reducer, initialState),
) =>
  renderWithRedux(
    <AppController/>,
    initialState,
    store,
  );

// This is a helper method to get an element by id with react testing library
export const getById = queryByAttribute.bind(null, 'id');
// This is a helper method to get an element by classname with react testing library
export const getByClass = queryByAttribute.bind(null, 'class');

test('renderWithRedux', () => {
  // here we will test if the ui is rendered correctly, and if it is rendered with custom
  // initial state and store
});
// We also have to test getById and getByClass to make sure that they work as expected
