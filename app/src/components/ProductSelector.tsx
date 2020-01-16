import React, { useState } from 'react';
import { Product } from '../store/types';
import { List } from 'immutable';

type Props = {
  products: List<Product>;
  onSelectProduct?: (idx: number) => any; // Make it optional
};

const ProductSelector: React.SFC<Props> = ({ products, onSelectProduct }) => {
  const [count, setCount] = useState(0);
  return (
    <select
      value={count}
      onChange={e => {
        const productIdx = parseInt(e.target.value);
        setCount(productIdx);
        if (onSelectProduct) {
          onSelectProduct(productIdx);
        }
      }}
    >
      {products.map((p, i) => (
        <option key={`product-for-${p.instalmentCount}-months`} value={i}>
          {`${p.instalmentCount} cuotas de ${p.instalmentTotal.string}€/mes`}
        </option>
      ))}
    </select>
  );
};

export default ProductSelector;
