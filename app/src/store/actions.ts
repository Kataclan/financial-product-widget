import { createAction } from 'typesafe-actions';
import { AppActions, Product } from './types';
import { List } from 'immutable';

// We have 2 main actions. Read products, and receive products
export const readProducts = createAction(AppActions.REQUEST_READ_PRODUCTS)<number>();

export const receiveProducts = createAction(AppActions.SUCCESS_READ_PRODUCTS)<List<Product>>();

export const selectProduct = createAction(AppActions.SELECT_PRODUCT)<number>();
