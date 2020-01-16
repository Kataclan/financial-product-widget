import { getById, renderAppWithRedux } from './utils';
import { DEFAULT_WIDGET_OPTIONS } from '../__mocks__/store';

describe('App Controller', () => {
  const renderedApp = renderAppWithRedux();

  it('renders AppComponent with redux correctly', () => {
    expect(
      getById(renderedApp.container, DEFAULT_WIDGET_OPTIONS.layoutOptions.containerId),
    ).toBeDefined();
  });
});
