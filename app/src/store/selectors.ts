import { State } from './types';

// Main App selectors for our proposal
export const getIsFetchingProduct = (state: State) => state.get('isFetching');

export const getTotalItemValue = (state: State) => state.get('totalItemValue');

export const getProducts = (state: State) => state.get('products');
