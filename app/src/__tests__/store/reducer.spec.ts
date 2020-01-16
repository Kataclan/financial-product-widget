import { TEST_INITIAL_APP_STATE } from '../../__mocks__/store';

import reducer from '../../store/reducer';
import { getIsFetchingProduct, getProducts, getTotalItemValue } from '../../store/selectors';
import { AppActions } from '../../store/types';

import { defaultProducts } from '../../__mocks__/store';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: AppActions.INIT })).toEqual(TEST_INITIAL_APP_STATE);
  });

  it('should handle REQUEST_READ_PRODUCTS action', () => {
    const nextState = reducer(TEST_INITIAL_APP_STATE, {
      type: AppActions.REQUEST_READ_PRODUCTS,
      payload: 0,
    });
    expect(getIsFetchingProduct(nextState)).toBe(true);
    expect(getTotalItemValue(nextState)).toBe(0);
  });

  it('should handle SUCCESS_READ_PRODUCTS action', () => {
    const nextState = reducer(TEST_INITIAL_APP_STATE, {
      type: AppActions.SUCCESS_READ_PRODUCTS,
      payload: defaultProducts,
    });
    expect(getIsFetchingProduct(nextState)).toBe(false);
    expect(getProducts(nextState)).toBe(defaultProducts);
  });

  it('should handle FAIL_READ_PRODUCTS action', () => {
    const nextState = reducer(TEST_INITIAL_APP_STATE, { type: AppActions.FAIL_READ_PRODUCTS });
    expect(getIsFetchingProduct(nextState)).toBe(false);
  });
});
