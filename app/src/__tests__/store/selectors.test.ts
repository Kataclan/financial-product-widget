import { TEST_INITIAL_APP_STATE, emptyProducts } from '../../__mocks__/store';
import { getIsFetchingProduct, getProducts, getTotalItemValue } from '../../store/selectors';

describe('Selectors', () => {
  test('getIsFetching()', () => {
    expect(getIsFetchingProduct(TEST_INITIAL_APP_STATE)).toBe(true);
  });

  test('getProducts()', () => {
    expect(getProducts(TEST_INITIAL_APP_STATE)).toBe(emptyProducts);
  });

  test('getTotalItemValue()', () => {
    expect(getTotalItemValue(TEST_INITIAL_APP_STATE)).toBe(0);
  });
});
