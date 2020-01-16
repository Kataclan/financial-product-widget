import React from 'react';
import { renderWithRedux } from './utils';
import AppController from '../AppController';
import { DEFAULT_WIDGET_OPTIONS } from '../__mocks__/store';

describe('App Component', () => {
  it('can render AppComponent with redux with defaults', () => {
    const { getByAltText } = renderWithRedux(
      <AppController />,
    );
    expect(getByAltText('loading-spinner')).toBeDefined();
  });
});
