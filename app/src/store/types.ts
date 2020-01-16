import { Action, ActionType } from 'typesafe-actions';
import { List } from 'immutable';

/* SHARED */
export type Product = {
  instalmentCount: number;
  instalmentTotal: {
    value: number;
    string: string;
  };
};

/* STATE */
export interface AppState {
  isFetching: boolean;
  totalItemValue: number;
  products: List<Product>;
}

// Needed to use immutable state. It converts the state to a map.
// Also, we have to overrride get methods because it can return undefined by default, and they crash
// when we try to use a selector and assing its value to a property that doesn't handle undefined
export type State = Map<keyof AppState, AppState[keyof AppState]> & {
  get(prop: 'isFetching'): boolean;
  get(prop: 'totalItemValue'): number;
  get(prop: 'products'): List<Product>;
};

/* Actions */
// Here I enum the app names in order to match reduxLogger and typesafe-actions Action 'type' property
export enum AppActions {
  INIT = '@app/INIT',
  REQUEST_READ_PRODUCTS = '@@app/REQUEST_READ_PRODUCT',
  SUCCESS_READ_PRODUCTS = '@@app/SUCCESS_READ_PRODUCT',
  FAIL_READ_PRODUCTS = '@@app/FAIL_READ_PRODUCT',
  SELECT_PRODUCT = '@app/SELECT_PRODUCT',
  SELECT_EVENT_SENT = '@app/SELECT_EVENT_SENT',
}

// Here I declare the interfaces relating my different actions
export interface ActionInit extends Action {
  type: AppActions.INIT;
}

export interface ActionRequestReadProducts extends Action {
  type: AppActions.REQUEST_READ_PRODUCTS;
  payload: number;
}

export interface ActionSuccessReadProducts extends Action {
  type: AppActions.SUCCESS_READ_PRODUCTS;
  payload: List<Product>;
}

export interface ActionFailReadProducts extends Action {
  type: AppActions.FAIL_READ_PRODUCTS;
}

export interface ActionSelectProduct extends Action {
  type: AppActions.SELECT_PRODUCT;
  payload: number;
}

export interface ActionSelectEventSent extends Action {
  type: AppActions.SELECT_EVENT_SENT;
}

// Here I join all the actions in one single type in order to make App Actions generic
// This is used by redux methods to match types in typescript
export type AppActionTypes =
  | ActionInit
  | ActionRequestReadProducts
  | ActionSuccessReadProducts
  | ActionFailReadProducts
  | ActionSelectProduct
  | ActionSelectEventSent;

export type RootAction = ActionType<AppActionTypes>;
