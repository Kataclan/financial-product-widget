import * as actions from '../../store/actions';
import * as types from '../../store/types';
import { emptyProducts } from '../../__mocks__/store';

describe('Actions', () => {
  it('readProducts: should create correctly', () => {
    const expectedAction = {
      type: types.AppActions.REQUEST_READ_PRODUCTS,
      payload: 0,
    };
    expect(actions.readProducts(0)).toEqual(expectedAction);
  });

  it('receiveProducts: should create correctly', () => {
    const expectedAction = {
      type: types.AppActions.SUCCESS_READ_PRODUCTS,
      payload: emptyProducts,
    };
    expect(actions.receiveProducts(emptyProducts)).toEqual(expectedAction);
  });

  it('readProducts: should create correctly', () => {
    const expectedAction = {
      type: types.AppActions.SELECT_PRODUCT,
      payload: 0,
    };
    expect(actions.selectProduct(0)).toEqual(expectedAction);
  });
});
