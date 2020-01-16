import * as api from '../../__mocks__/api';

describe('API', () => {
  it('mockedFetchProducts() correct response with mocked data', async () => {
    const data = await api.mockedFetchProducts(100000);
    expect(data).toEqual({ products: api.productsFromApi, value: 100000 });
  });

  //Here we will test API crashes and exceptions

  /**
   * Here we will test Events API
   */
});
