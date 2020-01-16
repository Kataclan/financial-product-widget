import { List } from 'immutable';

/* eslint-disable @typescript-eslint/camelcase */
export const productsFromApi = List<any>([
  {
    instalment_count: 3,
    total_with_tax: { value: 100000, string: '1000 €' },
    instalment_amount: { value: 33333, string: '333,33 €' },
    instalment_fee: { value: 750, string: '7,5 €' },
    instalment_total: { value: 34083, string: '340,83 €' },
    grand_total: { value: 102250, string: '1022,5 €' },
    cost_of_credit: { value: 2250, string: '22,5 €' },
    cost_of_credit_pct: { value: 600, string: '6,00 %' },
    apr: { value: 2500, string: '25 %' },
    max_financed_amount: { value: 200000, string: '2000 €' },
  },
  {
    instalment_count: 6,
    total_with_tax: { value: 100000, string: '1000 €' },
    instalment_amount: { value: 16666, string: '166,66 €' },
    instalment_fee: { value: 750, string: '7,5 €' },
    instalment_total: { value: 17416, string: '174,16 €' },
    grand_total: { value: 104500, string: '1045 €' },
    cost_of_credit: { value: 4500, string: '45 €' },
    cost_of_credit_pct: { value: 600, string: '6,00 %' },
    apr: { value: 2500, string: '25 %' },
    max_financed_amount: { value: 200000, string: '2000 €' },
  },
]);

export const mockedFetchProducts = (value: number) =>
  Promise.resolve({ products: productsFromApi, value });
