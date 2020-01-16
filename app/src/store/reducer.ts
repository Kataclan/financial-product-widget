import { createReducer } from 'typesafe-actions';
import { fromJS } from 'immutable';
import { State, AppActions, AppActionTypes } from './types';

const initialState: State = fromJS({
  isFetching: true,
  totalItemValue: 0,
  products: [],
});

const isFetchingReducer = createReducer<State, AppActionTypes>(initialState)
  .handleType(AppActions.REQUEST_READ_PRODUCTS, state => state.set('isFetching', true))
  .handleType(AppActions.FAIL_READ_PRODUCTS, state => state.set('isFetching', false));

const totalItemValueReducer = createReducer<State, AppActionTypes>(
  initialState,
).handleType(AppActions.REQUEST_READ_PRODUCTS, (state, action) =>
  state.set('totalItemValue', action.payload),
);

const productsReducer = createReducer<State, AppActionTypes>(
  initialState,
).handleType(AppActions.SUCCESS_READ_PRODUCTS, (state, action) =>
  state.set('products', fromJS(action.payload)).set('isFetching', false),
);

export default createReducer<State, AppActionTypes>(initialState, {
  ...isFetchingReducer.handlers,
  ...totalItemValueReducer.handlers,
  ...productsReducer.handlers,
});
