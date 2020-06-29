import reducer from '../../reducers';

import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar estado inicial', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;

    const actions = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, actions)).toEqual(expected);
  });
});
