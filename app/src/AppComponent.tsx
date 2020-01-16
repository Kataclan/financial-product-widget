import React, { useEffect } from 'react';

import { Product } from './store/types';
import { List } from 'immutable';

import MainLayout from './components/MainLayout';
import ProductSelector from './components/ProductSelector';

export type StateProps = {
  isFetching: boolean;
  totalItemValue: number;
  products: List<Product>;
};

export type DispatchProps = {
  onSelectProduct: (idx: number) => any;
  readProducts: (value: number) => any;
};

export type Props = StateProps & DispatchProps;

const AppComponent: React.FC<Props> = ({
  totalItemValue,
  isFetching,
  products,
  onSelectProduct,
  readProducts,
}) => {
  useEffect(() => {
    readProducts(totalItemValue);
  }, [totalItemValue]); // Only runs if totalItemValueChanges
  return (
    <MainLayout containerId='default-container' containerClassName='default-container' showLoading={isFetching}>
      <ProductSelector products={products} onSelectProduct={onSelectProduct} />
    </MainLayout>
  );
};

export default AppComponent;
