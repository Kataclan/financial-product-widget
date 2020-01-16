import { Product } from '../store/types';
import { List } from 'immutable';

export const parseProductsFromApi = (productsFromApi: any[]): List<Product> =>
  List<Product>(
    productsFromApi.map(p => ({
      instalmentCount: p.instalment_count,
      instalmentTotal: p.instalment_total,
    })),
  );

// This method fetches the products from the API
export const fetchProducts = async (totalItemValue: number) => {
  try {
    const response = await fetch(
      `http://localhost:8080/credit_agreements?totalWithTax=${totalItemValue}`,
    );
    const data = await response.json();
    return parseProductsFromApi(data);
  } catch (e) {}
};

// This method sends an event to the API to tell that the user has changed the installment
export const sendInstalmentChangedEvent = async (selectedInstalment: number) => {
  try {
    await fetch(`http://localhost:8080/events`, {
      method: 'post',
      body: `'{"context":"checkoutWidget", "type":"simulatorInstalmentChanged", "selectedInstalment": ${selectedInstalment}}`,
    });
    return true;
  } catch (e) {
    return false;
  }
};
