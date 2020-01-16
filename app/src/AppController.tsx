import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State, AppActionTypes, AppActions } from './store/types';
import * as appSelectors from './store/selectors';
import { readProducts } from './store/actions';

import AppComponent, { StateProps, DispatchProps } from './AppComponent';

// We have to gather the values from the general app state in addition to some
// custom props that will be passed somehow by our client when they embbed this widget
const mapStateToProps = (state: State): StateProps => ({
  totalItemValue: appSelectors.getTotalItemValue(state),
  isFetching: appSelectors.getIsFetchingProduct(state),
  products: appSelectors.getProducts(state),
});

// We will dispatch a SELECT_PRODUCT action whenever the user changes the value of the drop
const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): DispatchProps => ({
  onSelectProduct: (index: number) => dispatch({ type: AppActions.SELECT_PRODUCT, payload: index }),
  readProducts: (value: number) => dispatch(readProducts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
