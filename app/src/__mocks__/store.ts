import { fromJS, List } from 'immutable';
import { Product } from '../store/types';

// Default widget options for testing
export const DEFAULT_WIDGET_OPTIONS = {
  itemValue: 0,
  layoutOptions: {
    containerId: 'test-container-id',
    containerClassName: 'test-container-classname',
  },
};

// Initial State for testing
export const TEST_INITIAL_APP_STATE = fromJS({
  isFetching: true,
  totalItemValue: 0,
  products: [],
});

export const emptyProducts = List<Product>();
export const defaultProducts = List<Product>([
  {
    instalmentCount: 3,
    instalmentTotal: { value: 34083, string: '340,83 €' },
  },
  {
    instalmentCount: 6,
    instalmentTotal: { value: 17416, string: '174,16 €' },
  },
]);
