import { List } from 'immutable';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

import { sendInstalmentChangedEvent, parseProductsFromApi } from '../api';
import { mockedFetchProducts } from '../__mocks__/api';

import { receiveProducts } from './actions';
import { AppActions, ActionRequestReadProducts, Product, ActionSelectProduct } from './types';

async function stall(stallTime = 2000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

function* readProducts(action: ActionRequestReadProducts) {
  try {
    // Here I make the API call to fetch the products by totalValue
    // I let it using the mock instead of the real api call to make sure the app works
    // Then I dispatch receiveProducts action with the list of products parsed from the API
    // to put them in the state. I added a little delay to show the spinner
    yield stall();
    const data = yield mockedFetchProducts(action.payload); // To change for fetchProducts
    const products: List<Product> = parseProductsFromApi(data.products);
    yield put(receiveProducts(List<Product>(products)));
  } catch (e) {
    // Here I handle the api errors. We must have an errors property in the app state
    // to show somehow in the UI, so the user knows that something went wrong
    yield put({ type: AppActions.FAIL_READ_PRODUCTS });
  }
}

function* selectProduct(action: ActionSelectProduct) {
  try {
    // Here I make the API call to send an event everytime the user changes the instalment
    yield sendInstalmentChangedEvent(action.payload);
    // Also I dispatch an action to tell the event has sent correctly
    yield put({ type: AppActions.SELECT_EVENT_SENT });
  } catch (e) {}
}

export default function* rootSaga() {
  // I use takeLatest in order to cancel previous fetches if another has been requested
  yield takeLatest(AppActions.REQUEST_READ_PRODUCTS, readProducts);
  yield takeEvery(AppActions.SELECT_PRODUCT, selectProduct);
}
